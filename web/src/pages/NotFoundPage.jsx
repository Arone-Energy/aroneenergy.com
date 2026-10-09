import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import SiteNavbar from '@/components/SiteNavbar'
import SiteFooter from '@/components/SiteFooter'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page not found | Arone Energy</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="font-sans bg-white text-arone-black min-h-screen flex flex-col">
        <SiteNavbar />
        <main className="flex-grow bg-arone-blue pt-[72px] flex items-center">
          <div className="px-4 sm:px-6 lg:px-12 py-24">
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-white/55 mb-5">404</div>
            <h1 className="text-white font-bold leading-[1.05] tracking-[-0.02em] text-[clamp(2.2rem,4.5vw,3.8rem)] mb-5">
              This page is off the grid.
            </h1>
            <p className="text-white/60 text-[1rem] leading-[1.8] max-w-[440px] font-light mb-10">
              The page you are looking for does not exist or has moved.
            </p>
            <Link
              to="/"
              className="inline-block bg-white hover:bg-arone-lgray transition-colors text-arone-blue px-9 py-4 text-[0.83rem] font-medium"
            >
              Back to home
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
