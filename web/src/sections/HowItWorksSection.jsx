import SectionHeading from '@/components/SectionHeading'

// Steps from aronetech.com/luminar "Up and running in 3 steps".
const steps = [
  {
    number: '01',
    title: 'Order your LUMINAR',
    description: 'Choose your system and place your order via WhatsApp, phone or email. We confirm within 24 hours.',
  },
  {
    number: '02',
    title: 'Delivery to your door',
    description: 'We deliver across Nigeria. LUMINAR arrives ready to use, plug and play for most home setups.',
  },
  {
    number: '03',
    title: 'Optional installation',
    description: 'For solar setups and larger installations, our engineers handle everything on site.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how" className="reveal bg-white px-4 sm:px-6 lg:px-12 pb-16 lg:pb-28 pt-4 lg:pt-8">
      <SectionHeading title="Up and running in 3 steps." />

      <ol className="mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-3 border-t border-arone-lgray">
        {steps.map(({ number, title, description }) => (
          <li
            key={number}
            className="py-8 md:px-8 md:first:pl-0 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-arone-lgray"
          >
            <div className="text-[0.7rem] tracking-[0.2em] text-arone-blue font-semibold">{number}</div>
            <h3 className="text-[1.05rem] font-bold text-arone-black mt-2 mb-2">{title}</h3>
            <p className="text-[0.86rem] text-arone-dgray leading-[1.7] font-light">{description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
