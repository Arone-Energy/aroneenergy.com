import SectionHeading from '@/components/SectionHeading'
import familyKitchenImage from '@/assets/images/luminar-family-kitchen.webp'
import securityControlRoomImage from '@/assets/images/luminar-security-control-room.webp'
import retailStoreImage from '@/assets/images/luminar-retail-store.webp'

const useCases = [
  {
    tag: 'Homes',
    title: 'Peaceful nights at home.',
    description: 'When NEPA takes light, your fans keep turning, the lights stay on and the children keep studying. No gen to start, no noise to sleep through.',
    image: {
      src: familyKitchenImage,
      alt: 'Family cooking together in a lit kitchen on a rainy evening, with a LUMINAR unit on the wall',
    },
  },
  {
    tag: 'Security and critical sites',
    title: 'Your cameras never go blind.',
    description: 'Thieves wait for light to go. LUMINAR keeps your cameras, recorders and internet running through every outage, so your site is protected when it matters most.',
    image: {
      src: securityControlRoomImage,
      alt: 'Security control room with a wall of CCTV monitors and a LUMINAR unit mounted on the right',
    },
  },
  {
    tag: 'Businesses',
    title: 'Keep selling when light goes.',
    description: 'Keep your POS working, your shop lit and your customers served, without spending your profit on generator fuel.',
    image: {
      src: retailStoreImage,
      alt: 'Modern retail store at dusk with a LUMINAR unit mounted on the wall',
    },
  },
]

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="reveal bg-white px-4 sm:px-6 lg:px-12 py-16 lg:py-28">
      <SectionHeading title="Light goes. Life goes on." />

      <div className="mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
        {useCases.map(({ tag, title, description, image }) => (
          <article key={tag} className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-6 sm:items-center md:flex md:gap-0 md:items-stretch">
            <img
              src={image.src}
              alt={image.alt}
              width="2000"
              height="1125"
              loading="lazy"
              decoding="async"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <div className="pt-6 sm:pt-0 md:pt-6">
              <div className="text-[0.65rem] uppercase tracking-[0.18em] text-arone-blue font-semibold mb-2">{tag}</div>
              <h3 className="text-[1.2rem] font-bold text-arone-black mb-2">{title}</h3>
              <p className="text-[0.86rem] text-arone-dgray leading-[1.7] font-light">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
