import SectionHeading from '@/components/SectionHeading'
import { testimonials } from '@/data/testimonials'

// What customers say, in their own words. Renders nothing until
// src/data/testimonials.js has an entry.
export default function TestimonialsSection() {
  if (testimonials.length === 0) return null

  return (
    <section id="testimonials" className="reveal bg-arone-lgray px-4 sm:px-6 lg:px-12 py-16 lg:py-28">
      <SectionHeading title="What our customers say." />

      <ul className="mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <li key={`${testimonial.name}-${testimonial.quote.slice(0, 20)}`} className="bg-white rounded-2xl p-7 lg:p-9 flex flex-col">
            <blockquote className="text-[1.05rem] text-arone-black leading-[1.6] flex-grow">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figure className="mt-8 flex items-center gap-4">
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  alt=""
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
              )}
              <figcaption>
                <div className="text-[0.92rem] font-bold text-arone-black">{testimonial.name}</div>
                <div className="text-[0.8rem] text-arone-dgray">
                  {[testimonial.role, testimonial.location, testimonial.product].filter(Boolean).join(' · ')}
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
