import { useEffect, useRef } from 'react'
import { GENERAL_ENQUIRY_WHATSAPP_LINK } from '@/data/contact'

// Hero video lives in public/videos (served as-is, not bundled). Compressed
// from source-assets/luminar-max-product-video.mp4: 1080p, no audio, faststart.
const HERO_VIDEO_URL = '/videos/luminar-max-product.mp4'
const HERO_VIDEO_POSTER_URL = '/videos/luminar-max-product-poster.jpg'

/**
 * Whether the visitor asked the OS to reduce motion.
 *
 * @returns {boolean}
 */
function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Autoplay a muted video reliably, and only while it is on screen.
 *
 * React does not write the `muted` attribute to the DOM, and Chrome refuses
 * autoplay for a video it cannot see is muted, so the hero stayed on its
 * poster in production. Setting the property and calling play() fixes that;
 * the visibility observer also pauses it off screen to save data and battery.
 *
 * @param {{ current: HTMLVideoElement | null }} videoRef
 */
function useMutedAutoplayWhenVisible(videoRef) {
  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined
    video.muted = true
    if (prefersReducedMotion()) return undefined

    const tryPlay = () => {
      const playAttempt = video.play()
      if (playAttempt && typeof playAttempt.catch === 'function') {
        playAttempt.catch(() => {
          // Autoplay blocked (for example by a data saver). The poster stays visible.
        })
      }
    }
    if (!('IntersectionObserver' in window)) {
      tryPlay()
      return undefined
    }
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? tryPlay() : video.pause()),
      { threshold: 0.25 },
    )
    visibilityObserver.observe(video)
    return () => visibilityObserver.disconnect()
  }, [videoRef])
}

/** Slow sine-wave lines behind the hero, same effect as aronetech.com. */
function useHeroWaveCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')
    let width = 0
    let height = 0
    let phase = 0
    let animationFrame

    const resize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < 8; i++) {
        ctx.strokeStyle = `rgba(255,255,255,${0.03 + i * 0.008})`
        ctx.lineWidth = 1
        ctx.beginPath()

        for (let x = 0; x <= width; x += 4) {
          const y =
            height * 0.4 +
            Math.sin((x / width) * Math.PI * 2 + phase + i * 0.5) * (height * 0.05 * (i * 0.2 + 0.4)) +
            i * (height / 10)

          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }

        ctx.stroke()
      }

      phase += 0.007
      if (!prefersReducedMotion) animationFrame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    const handleResize = () => {
      resize()
      if (prefersReducedMotion) draw()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', handleResize)
    }
  }, [canvasRef])
}

export default function HeroSection() {
  const canvasRef = useRef(null)
  const heroVideoRef = useRef(null)
  useMutedAutoplayWhenVisible(heroVideoRef)
  useHeroWaveCanvas(canvasRef)

  return (
    <section
      id="top"
      className="relative bg-arone-blue overflow-hidden pt-[72px] lg:min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-center"
    >
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" />
      {/* Faint grid, as on the aronetech.com hero */}
      <div aria-hidden="true" className="absolute inset-0 opacity-40 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Copy */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 pt-14 pb-10 lg:py-20 opacity-0 animate-fadeUp">
        <h1 className="text-white font-bold leading-[1.02] tracking-[-0.02em] text-[clamp(2.6rem,5.5vw,5rem)] max-w-[620px] mb-6">
          Reliable power. Always on.
        </h1>

        <p className="text-white/60 text-[1rem] lg:text-[1.05rem] leading-[1.8] max-w-[480px] font-light mb-10">
          When light goes, your home stays on. No generator noise, no fumes, no fuel queues.
          Just quiet, steady power.
        </p>

        <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
          <a
            href="#products"
            className="text-center bg-white hover:bg-arone-lgray transition-colors text-arone-blue px-9 py-4 text-[0.83rem] font-medium"
          >
            View products
          </a>
          <a
            href={GENERAL_ENQUIRY_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center border border-white/30 hover:border-white/70 transition-colors text-white px-9 py-4 text-[0.83rem]"
          >
            Order on WhatsApp
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[0.75rem] text-white/45">
          <li>Solar ready</li>
          <li aria-hidden="true" className="text-white/30">/</li>
          <li>Plug and play</li>
          <li aria-hidden="true" className="text-white/30">/</li>
          <li>Built in Nigeria</li>
        </ul>
      </div>

      {/* Product video, framed beside the copy. Muted so it can autoplay;
          with reduced motion it stays on the poster and shows controls. */}
      <div className="relative z-10 px-4 sm:px-6 lg:pl-0 lg:pr-12 pb-14 lg:py-20">
        <figure className="relative border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <video
            ref={heroVideoRef}
            className="block w-full h-auto aspect-[16/9] object-cover bg-arone-blue"
            poster={HERO_VIDEO_POSTER_URL}
            autoPlay={!prefersReducedMotion()}
            controls={prefersReducedMotion()}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="LUMINAR MAX product video"
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
        </figure>
      </div>
    </section>
  )
}
