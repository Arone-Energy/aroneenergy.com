import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'
import {
  GENERAL_ENQUIRY_WHATSAPP_LINK,
  CUSTOMER_LOGIN_URL,
  CUSTOMER_CARE_PHONE_DISPLAY,
  CUSTOMER_CARE_PHONE_LINK,
} from '@/data/contact'

// "/#id" works on the home page (same-document jump) and from any other
// route (navigates home, then jumps).
export const NAV_LINKS = [
  { label: 'Products', href: '/#products' },
  { label: 'Why LUMINAR', href: '/#why' },
  { label: 'How it works', href: '/#how' },
  { label: 'Contact', href: '/#contact' },
]

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MenuIcon({ isOpen }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      {isOpen ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h10" />
      )}
    </svg>
  )
}

export default function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock page scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="relative">
      <nav
        aria-label="Main"
        className={`fixed top-0 left-0 right-0 z-[110] flex items-center justify-between px-4 sm:px-6 lg:px-12 h-[72px] bg-white/95 backdrop-blur-xl border-b border-arone-lgray transition-shadow duration-300 ${
          isScrolled ? 'shadow-nav' : ''
        }`}
      >
        <Link to="/" onClick={closeMobileMenu} aria-label="Arone Energy home">
          <BrandLogo />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group text-[0.83rem] tracking-wide text-arone-dgray hover:text-arone-blue transition-colors"
            >
              {link.label}
              <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-arone-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 lg:gap-5">
          {/* Customer care line: number on wide screens, a tap-to-call icon on phones */}
          {CUSTOMER_CARE_PHONE_LINK && (
            <a
              href={CUSTOMER_CARE_PHONE_LINK}
              aria-label={`Call customer care on ${CUSTOMER_CARE_PHONE_DISPLAY}`}
              className="flex items-center gap-2 text-[0.8rem] font-medium text-arone-blue hover:text-arone-blueMid transition-colors"
            >
              <PhoneIcon />
              <span className="hidden lg:inline">{CUSTOMER_CARE_PHONE_DISPLAY}</span>
            </a>
          )}
          <a
            href={CUSTOMER_LOGIN_URL}
            className="hidden sm:inline-block text-[0.8rem] font-medium text-arone-blue hover:text-arone-blueMid transition-colors"
          >
            Log in
          </a>
          <a
            href={GENERAL_ENQUIRY_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-arone-blue hover:bg-arone-blueMid transition-colors text-white px-4 py-2.5 lg:px-6 lg:py-3 text-[0.75rem] lg:text-[0.8rem] font-medium tracking-wide"
          >
            Order on WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-1 text-arone-blue"
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay, same pattern as aronetech.com */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-[115] bg-arone-blue text-white md:hidden">
          <div className="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-4 sm:px-6">
            <Link to="/" onClick={closeMobileMenu} aria-label="Arone Energy home">
              <BrandLogo onDark />
            </Link>
            <button type="button" onClick={closeMobileMenu} aria-label="Close menu" className="p-1 text-white">
              <MenuIcon isOpen />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-xl font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href={GENERAL_ENQUIRY_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="mt-4 w-full max-w-[280px] text-center bg-white text-arone-blue py-4 text-base font-semibold tracking-wide"
            >
              Order on WhatsApp
            </a>
            <a
              href={CUSTOMER_LOGIN_URL}
              onClick={closeMobileMenu}
              className="w-full max-w-[280px] text-center border border-white/40 text-white py-4 text-base font-medium tracking-wide"
            >
              Log in
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[60px] h-[2px] bg-white opacity-30" />
        </div>
      )}
    </header>
  )
}
