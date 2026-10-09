#!/bin/bash
# ==========================================================
# aroneenergy.com: deploy the latest web/ app on the Hetzner server.
# ==========================================================
# Runs ON THE SERVER. It is the only command the GitHub Actions deploy key may
# run (forced command in /root/.ssh/authorized_keys), so the key cannot be used
# for anything else, even if it leaked.
#
# What it does:
#   1. Updates /root/aroneenergy.com to the latest origin/master.
#   2. Builds a new image while the current site keeps serving.
#   3. Swaps the container (a few seconds of downtime) and checks it answers.
#   4. If the new container does not answer, starts the previous image again.
#
# Manual run:  bash /root/aroneenergy.com/deploy/deploy-on-server.sh
# ==========================================================
set -euo pipefail

REPO_DIR="/root/aroneenergy.com"
IMAGE_NAME="aroneenergy-web"
CONTAINER_NAME="aroneenergy-web"
LOCAL_PORT="3004"            # host nginx proxies aroneenergy.com to 127.0.0.1:3004

log() { echo "[deploy $(date -u +%H:%M:%S)] $*"; }

start_container() {
  docker run -d --name "$CONTAINER_NAME" --restart always \
    -p "127.0.0.1:${LOCAL_PORT}:80" "$1" >/dev/null
}

site_answers() {
  for attempt in 1 2 3 4 5 6 7 8 9 10; do
    if curl -sf -o /dev/null "http://127.0.0.1:${LOCAL_PORT}/"; then
      return 0
    fi
    sleep 1
  done
  return 1
}

log "Updating code"
git -C "$REPO_DIR" fetch --quiet origin master
git -C "$REPO_DIR" reset --quiet --hard origin/master
log "At commit $(git -C "$REPO_DIR" log -1 --format='%h %s')"

# This repo stores every .mp4 with Git LFS (.gitattributes). Without LFS the
# checkout holds ~130-byte pointer files instead of the videos, and the site
# ships a "video" no browser can play. Fetch the real files, and refuse to
# deploy if any web/ video is still a pointer.
if ! git -C "$REPO_DIR" lfs version >/dev/null 2>&1; then
  log "git-lfs is not installed (apt install git-lfs); refusing to deploy pointer files"
  exit 1
fi
git -C "$REPO_DIR" lfs pull --include="web/**"
for video_file in "$REPO_DIR"/web/public/videos/*.mp4; do
  [ -e "$video_file" ] || continue
  if head -c 64 "$video_file" | grep -q "git-lfs.github.com/spec"; then
    log "$(basename "$video_file") is still an LFS pointer; refusing to deploy"
    exit 1
  fi
done

# Keep the running image as a rollback point before building over the tag.
if docker image inspect "${IMAGE_NAME}:latest" >/dev/null 2>&1; then
  docker tag "${IMAGE_NAME}:latest" "${IMAGE_NAME}:previous"
fi

log "Building image (the current site keeps serving)"
docker build --quiet -t "${IMAGE_NAME}:latest" "${REPO_DIR}/web" >/dev/null

log "Swapping container"
docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true
start_container "${IMAGE_NAME}:latest"

if site_answers; then
  log "Live: http://127.0.0.1:${LOCAL_PORT} answers"
  docker image prune -f >/dev/null   # dangling layers only; never the running image
else
  log "New container did not answer; rolling back to the previous image"
  docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true
  if docker image inspect "${IMAGE_NAME}:previous" >/dev/null 2>&1; then
    start_container "${IMAGE_NAME}:previous"
  fi
  exit 1
fi
