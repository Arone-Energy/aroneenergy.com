import { useEffect, useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import PhoneIcon from '@/components/PhoneIcon'
import operationsTileImage from '@/assets/images/luminar-unit.webp'
import lineupSceneImage from '@/assets/images/luminar-lineup-scene.webp'
import homeSceneImage from '@/assets/images/luminar-home-scene.webp'
import shopSceneImage from '@/assets/images/luminar-shop-scene.webp'
import {
  EMAIL_ENQUIRY_LINK,
  GENERAL_ENQUIRY_WHATSAPP_LINK,
  CALL_LINES,
} from '@/data/contact'

// The pictures beside "Ready to order?", sliding one to the next: the
// "Keep your operations always on" tile, then LUMINAR at work and at home.
const SLIDES = [
  { src: operationsTileImage, alt: 'LUMINAR unit mounted beside a security control room, with the caption Keep your operations always on' },
  { src: lineupSceneImage, alt: 'The LUMINAR range in a shop at night' },
  { src: homeSceneImage, alt: 'LUMINAR beside a home lit up at dusk', position: '85% center' },
  { src: shopSceneImage, alt: 'LUMINAR mounted outside a shop at dusk', position: '75% center' },
]
const SLIDE_MS = 5000

function OperationsSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || paused) return undefined
    const timer = setInterval(() => setIndex((n) => (n + 1) % SLIDES.length), SLIDE_MS)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <div
      className="w-full max-w-[460px] mx-auto lg:mx-0 lg:justify-self-end"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative overflow-hidden aspect-square" role="region" aria-roledescription="carousel" aria-label="LUMINAR in use">
        <div
          className="flex h-full transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              aria-hidden={i !== index}
              loading="lazy"
              decoding="async"
              className="w-full h-full shrink-0 object-cover"
              style={slide.position ? { objectPosition: slide.position } : undefined}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center lg:justify-end gap-2" role="group" aria-label="Choose a picture">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Picture ${i + 1} of ${SLIDES.length}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/35 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function OrderSection() {
  return (
    <section id="contact" className="reveal bg-arone-blue px-4 sm:px-6 lg:px-12 py-16 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <SectionHeading
            onDark
            title="Ready to order?"
            intro="Tell us what you need to power and we will recommend the right LUMINAR for you."
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div className="bg-arone-blue p-7 lg:p-9 flex flex-col">
              <h3 className="text-[1.1rem] font-bold text-white mb-2">Order via WhatsApp</h3>
              <p className="text-[0.85rem] text-white/55 leading-[1.7] font-light mb-7 flex-grow">
                Chat directly with our team. Fast, personal, and no commitment until you are ready.
              </p>
              <a
                href={GENERAL_ENQUIRY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start bg-white hover:bg-arone-lgray transition-colors text-arone-blue px-8 py-3.5 text-[0.82rem] font-medium"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-arone-blue p-7 lg:p-9 flex flex-col">
              <h3 className="text-[1.1rem] font-bold text-white mb-2">Email us</h3>
              <p className="text-[0.85rem] text-white/55 leading-[1.7] font-light mb-7 flex-grow">
                Have detailed questions first? Our team will walk you through specs, delivery timelines and payment options.
              </p>
              <a
                href={EMAIL_ENQUIRY_LINK}
                className="self-start border border-white/30 hover:border-white transition-colors text-white px-8 py-3.5 text-[0.82rem] font-medium"
              >
                Email us
              </a>
            </div>
          </div>

          {/* Call lines: many buyers want to talk before they order */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-[0.9rem] text-white/60 font-light">Prefer to talk? Call us:</span>
            {CALL_LINES.map((line) => (
              <a
                key={line.tel}
                href={line.link}
                className="inline-flex items-center gap-2 text-[1rem] font-medium text-white hover:text-white/80 transition-colors"
              >
                <PhoneIcon />
                {line.display}
              </a>
            ))}
          </div>
        </div>

        <OperationsSlider />
      </div>
    </section>
  )
}
