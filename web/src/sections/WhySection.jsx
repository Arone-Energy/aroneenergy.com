import SectionHeading from '@/components/SectionHeading'

// Benefits and wording from the "why" section of aronetech.com/luminar.
const ICON_STROKE_PROPS = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#002A47',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const PlugIcon = () => (
  <svg {...ICON_STROKE_PROPS}>
    <path d="M9 2v4M15 2v4" />
    <path d="M7 6h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V6Z" />
    <path d="M12 15v4M9 22h6" />
  </svg>
)

const SunIcon = () => (
  <svg {...ICON_STROKE_PROPS}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </svg>
)

const BatteryIcon = () => (
  <svg {...ICON_STROKE_PROPS}>
    <rect x="2" y="7" width="17" height="10" rx="2" />
    <path d="M22 10v4" />
    <path d="M6 11v2M9 11v2M12 11v2" />
  </svg>
)

const HomeIcon = () => (
  <svg {...ICON_STROKE_PROPS}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5 10v10h14V10" />
    <path d="M10 20v-6h4v6" />
  </svg>
)

const LocationIcon = () => (
  <svg {...ICON_STROKE_PROPS}>
    <path d="M12 21s-7-6.5-7-11.5a7 7 0 1 1 14 0C19 14.5 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
)

const CheckIcon = () => (
  <svg {...ICON_STROKE_PROPS}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5l2.3 2.3 4.7-5.3" />
  </svg>
)

const benefits = [
  {
    Icon: PlugIcon,
    title: 'Plug and play',
    description: 'No complex installation required. Charge LUMINAR when power is available and it keeps your appliances running when the grid fails.',
  },
  {
    Icon: SunIcon,
    title: 'Solar ready',
    description: 'Connect solar panels directly to LUMINAR for fully off-grid operation. Stop paying for generator fuel entirely.',
  },
  {
    Icon: BatteryIcon,
    title: 'Built to last',
    description: 'LiFePO4 lithium iron phosphate batteries with smart thermal management. Designed for Nigerian temperatures. 5 to 7 year lifespan.',
  },
  {
    Icon: HomeIcon,
    title: 'Home and business',
    description: 'From a single room to a full office or clinic, LUMINAR scales to your needs across our product range.',
  },
  {
    Icon: LocationIcon,
    title: 'Built in Nigeria',
    description: 'Designed, assembled and serviced in Nigeria. Local support, local knowledge, no import delays.',
  },
  {
    Icon: CheckIcon,
    title: 'Flexible ownership',
    description: 'Buy outright, pay in instalments, or share one system with neighbouring shops and pay only for the power you use. Ask us which suits you.',
  },
]

export default function WhySection() {
  return (
    <section id="why" className="reveal bg-white px-4 sm:px-6 lg:px-12 py-16 lg:py-28">
      <SectionHeading
        title="Energy you can depend on."
        intro="Clean, stable power that keeps your appliances running when the grid fails."
      />

      <div className="mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-arone-lgray border border-arone-lgray">
        {benefits.map(({ Icon, title, description }) => (
          <div key={title} className="bg-white p-7 lg:p-10">
            <div className="mb-5">
              <Icon />
            </div>
            <h3 className="text-[1rem] font-bold text-arone-black mb-2">{title}</h3>
            <p className="text-[0.86rem] text-arone-dgray leading-[1.7] font-light">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
