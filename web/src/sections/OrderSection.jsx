import SectionHeading from '@/components/SectionHeading'
import PhoneIcon from '@/components/PhoneIcon'
import operationsTileImage from '@/assets/images/luminar-unit.webp'
import {
  EMAIL_ENQUIRY_LINK,
  GENERAL_ENQUIRY_WHATSAPP_LINK,
  CALL_LINES,
} from '@/data/contact'

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

        {/* Social tile with baked-in text, shown as a picture */}
        <img
          src={operationsTileImage}
          alt="LUMINAR unit mounted beside a security control room, with the caption Keep your operations always on"
          width="2000"
          height="2000"
          loading="lazy"
          decoding="async"
          className="w-full max-w-[460px] mx-auto lg:mx-0 lg:justify-self-end h-auto aspect-square object-cover"
        />
      </div>
    </section>
  )
}
