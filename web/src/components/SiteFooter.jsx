import BrandLogo from './BrandLogo'
import { NAV_LINKS } from './SiteNavbar'
import {
  ARONETECH_URL,
  COMPANY_LOCATION,
  COMPANY_NAME,
  CONTACT_EMAIL,
  GENERAL_ENQUIRY_WHATSAPP_LINK,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  CUSTOMER_CARE_PHONE_DISPLAY,
  CUSTOMER_CARE_PHONE_LINK,
} from '@/data/contact'

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
          <ul className="flex flex-col gap-3 text-[0.8rem] text-white/50">
            {CUSTOMER_CARE_PHONE_LINK && (
              <li>
                <a href={CUSTOMER_CARE_PHONE_LINK} className="hover:text-white transition-colors">
                  Call: {CUSTOMER_CARE_PHONE_DISPLAY}
                </a>
              </li>
            )}
            <li>
              <a href={GENERAL_ENQUIRY_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram: {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li className="text-white/35">{COMPANY_LOCATION}</li>
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
