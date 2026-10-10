import { useCallback, useEffect, useRef, useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import shopOwnerChisomImage from '@/assets/images/customer-shop-owner-chisom.webp'
import shopOwnerProvisionsImage from '@/assets/images/customer-shop-owner-provisions.webp'
import productionTeamImage from '@/assets/images/arone-energy-production-team.webp'

// Real customers and the team that builds LUMINAR, as one row of equal-size
// slides. Social proof straight after the hero, before the "why" section.
// No bottom padding: the white section below supplies the gap.
// Each image is shown uncropped with its own navy frame (brand navy #002A47).
// The slide box is filled with the same navy, so images of different shapes
// fit the same size without cropping and the fill blends into the frame.
const slides = [
  {
    src: shopOwnerChisomImage,
    alt: 'Chisom Onyenke, a shop owner, speaking in her store in front of shelves of household goods',
    width: 1600,
    height: 900,
  },
  {
    src: shopOwnerProvisionsImage,
    alt: 'Smiling shop owner behind the counter of a well stocked provisions store, with a LUMINAR unit on the shelf',
    width: 1600,
    height: 1038,
  },
  {
    src: productionTeamImage,
    alt: 'Five members of the Arone Energy team in work uniforms standing beside an Arone Energy power cabinet',
    width: 1600,
    height: 1038,
  },
]

function ArrowButton({ direction, disabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'previous' ? 'Previous photo' : 'Next photo'}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-arone-blue/25 text-arone-blue transition-colors hover:bg-arone-blue hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-arone-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-arone-blue/40"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {direction === 'previous' ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  )
}

export default function CustomersSection() {
  const trackRef = useRef(null)
  const [canScrollBack, setCanScrollBack] = useState(false)
  const [canScrollForward, setCanScrollForward] = useState(false)

  // Enable each arrow only when there is somewhere to go in that direction.
  const updateArrowState = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setCanScrollBack(track.scrollLeft > 4)
    setCanScrollForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined
    updateArrowState()
    track.addEventListener('scroll', updateArrowState, { passive: true })
    window.addEventListener('resize', updateArrowState)
    return () => {
      track.removeEventListener('scroll', updateArrowState)
      window.removeEventListener('resize', updateArrowState)
    }
  }, [updateArrowState])

  // Move by one slide (slide width plus the gap between slides).
  const scrollBySlide = (direction) => {
    const track = trackRef.current
    const firstSlide = track?.firstElementChild
    if (!track || !firstSlide) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: direction * (firstSlide.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <section id="customers" className="reveal bg-white px-4 sm:px-6 lg:px-12 pt-16 lg:pt-28">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-6">
        <SectionHeading
          title="Keeping businesses open through every outage."
          intro="Shop owners no longer lose sales when light goes. Every LUMINAR is proudly made in Nigeria."
        />
        {/* Only when the slides overflow; on wide screens all three fit. */}
        {(canScrollBack || canScrollForward) && (
          <div className="flex items-center gap-2 shrink-0">
            <ArrowButton direction="previous" disabled={!canScrollBack} onClick={() => scrollBySlide(-1)} />
            <ArrowButton direction="next" disabled={!canScrollForward} onClick={() => scrollBySlide(1)} />
          </div>
        )}
      </div>

      <div
        ref={trackRef}
        className="mt-10 lg:mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Customer and team photos"
      >
        {slides.map((slide) => (
          <figure
            key={slide.src}
            className="snap-start shrink-0 w-[85%] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] aspect-[16/10] bg-arone-blue"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
