FROM node:22-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund \
      --fetch-retries=5 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000 --fetch-timeout=300000
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Cache rules live in nginx.conf (see the comments there).
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
