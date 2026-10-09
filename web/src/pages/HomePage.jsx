import { Helmet } from 'react-helmet-async'
import SiteNavbar from '@/components/SiteNavbar'
import SiteFooter from '@/components/SiteFooter'
import HeroSection from '@/sections/HeroSection'
import WhySection from '@/sections/WhySection'
import ProductsSection from '@/sections/ProductsSection'
import UseCasesSection from '@/sections/UseCasesSection'
import HowItWorksSection from '@/sections/HowItWorksSection'
import OrderSection from '@/sections/OrderSection'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

const SITE_URL = 'https://www.aroneenergy.com/'
const PAGE_TITLE = 'LUMINAR by Arone Energy | Reliable power. Always on.'
const PAGE_DESCRIPTION =
  'LUMINAR lithium power systems by Arone Energy keep homes, security sites and businesses running through power cuts. Solar ready. Plug and play. Built in Nigeria.'
const OG_IMAGE_URL = 'https://www.aroneenergy.com/og/luminar-max-og.jpg'

export default function HomePage() {
  useRevealOnScroll()

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arone Energy" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="LUMINAR: Reliable power. Always on." />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LUMINAR: Reliable power. Always on." />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
      </Helmet>

      <div className="font-sans bg-white text-arone-black overflow-x-hidden">
        <SiteNavbar />
        <main>
          <HeroSection />
          <WhySection />
          <ProductsSection />
          <UseCasesSection />
          <HowItWorksSection />
          <OrderSection />
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
