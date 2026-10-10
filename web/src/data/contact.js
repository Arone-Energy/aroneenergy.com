// Contact details used across the site. Sources: the current aronetech.com
// /luminar page (WhatsApp number) and the current aroneenergy.com site
// (email, Instagram, Enugu location).

export const WHATSAPP_NUMBER = '2347044556674'
export const WHATSAPP_DISPLAY = '+234 704 455 6674'

// Customer care call lines, in order of priority. Shown in local format (what
// Nigerian customers read and dial); the tel: link uses +234 so it also works
// from abroad. The first line is the main one (also the WhatsApp number).
export const CALL_LINES = [
  { tel: '+2347044556674', display: '0704 455 6674' },
  { tel: '+2349067710551', display: '0906 771 0551' },
].map((line) => ({ ...line, link: `tel:${line.tel}` }))

export const PRIMARY_CALL_LINE = CALL_LINES[0]

export const CONTACT_EMAIL = 'info@aroneenergy.com'
export const INSTAGRAM_URL = 'https://www.instagram.com/aroneenergy'
export const INSTAGRAM_HANDLE = '@aroneenergy'

export const COMPANY_NAME = 'Arone Energy Industries Limited'
export const COMPANY_LOCATION = 'Enugu, Nigeria'

export const ARONETECH_URL = 'https://aronetech.com'

// Customer portal sign-in (shared Arone platform).
export const CUSTOMER_LOGIN_URL = 'https://app.aronetech.com/login'

/** Builds a wa.me link that opens WhatsApp with a prefilled message. */
export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const GENERAL_ENQUIRY_WHATSAPP_LINK = buildWhatsAppLink(
  "Hi Arone, I'd like to learn more about LUMINAR."
)

export const EMAIL_ENQUIRY_LINK = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('LUMINAR Enquiry')}`
