import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu'
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaXTwitter, FaFacebookF, FaTiktok } from 'react-icons/fa6'
import BrandLogo from './BrandLogo'
import { NAV_LINKS } from './SiteNavbar'
import {
  ARONETECH_URL,
  COMPANY_LOCATION,
  COMPANY_NAME,
  CONTACT_EMAIL,
  SOCIAL_LINKS,
  CALL_LINES,
} from '@/data/contact'

// Brand marks for the social accounts in SOCIAL_LINKS.
const SOCIAL_ICONS = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  facebook: FaFacebookF,
  tiktok: FaTiktok,
}

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-arone-blue">
      {/* Gold accent top border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />

      <div className="px-4 sm:px-6 lg:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <BrandLogo onDark />
          <p className="text-[0.78rem] text-white/45 max-w-[260px] leading-relaxed">
            LUMINAR power systems. Built in Nigeria.
          </p>
          <p className="text-[0.65rem] text-white/25 tracking-widest uppercase">aroneenergy.com</p>
        </div>

        {/* Site links */}
        <div>
          <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/30 font-medium mb-4">Explore</div>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[0.8rem] text-white/50 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/30 font-medium mb-4">Contact</div>
          <ul className="flex flex-col gap-3.5 text-[0.8rem] text-white/50">
            {/* Both lines take calls and WhatsApp: one line, comma separated. */}
            <li className="flex items-start gap-3">
              <span className="flex items-center gap-1.5 shrink-0 mt-[1px] text-white/70" aria-hidden="true">
                <LuPhone className="w-4 h-4" />
                <FaWhatsapp className="w-4 h-4" />
              </span>
              <span>
                <span className="sr-only">Call or WhatsApp: </span>
                {CALL_LINES.map((line, index) => (
                  <span key={line.tel}>
                    {index > 0 && ', '}
                    <a href={line.link} className="whitespace-nowrap hover:text-white transition-colors">
                      {line.display}
                    </a>
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <LuMail aria-hidden="true" className="w-4 h-4 shrink-0 mt-[1px] text-white/70" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/35">
              <LuMapPin aria-hidden="true" className="w-4 h-4 shrink-0 mt-[1px] text-white/70" />
              {COMPANY_LOCATION}
            </li>
            {/* One row per social account, aligned with the rows above */}
            {SOCIAL_LINKS.map(({ network, label, url, handle }) => {
              const Icon = SOCIAL_ICONS[network]
              return (
                <li key={network}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Arone Energy on ${label}: ${handle}`}
                    className="flex items-start gap-3 hover:text-white transition-colors"
                  >
                    <Icon aria-hidden="true" className="w-4 h-4 shrink-0 mt-[1px] text-white/70" />
                    {handle}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-white/10 px-4 sm:px-6 lg:px-12 py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <p className="text-[0.72rem] text-white/30">
          © {currentYear} {COMPANY_NAME}
        </p>
        <a
          href={ARONETECH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.68rem] text-white/60 hover:text-white tracking-wide transition-colors"
        >
          AI security monitoring: aronetech.com
        </a>
      </div>
    </footer>
  )
}
