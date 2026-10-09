// Contact details used across the site. Sources: the current aronetech.com
// /luminar page (WhatsApp number) and the current aroneenergy.com site
// (email, Instagram, Enugu location).

export const WHATSAPP_NUMBER = '2347044556674'
export const WHATSAPP_DISPLAY = '+234 704 455 6674'

export const CONTACT_EMAIL = 'info@aroneenergy.com'
export const INSTAGRAM_URL = 'https://www.instagram.com/aroneenergy'
export const INSTAGRAM_HANDLE = '@aroneenergy'

export const COMPANY_NAME = 'Arone Energy Industries Limited'
export const COMPANY_LOCATION = 'Enugu, Nigeria'

export const ARONETECH_URL = 'https://aronetech.com'

/** Builds a wa.me link that opens WhatsApp with a prefilled message. */
export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const GENERAL_ENQUIRY_WHATSAPP_LINK = buildWhatsAppLink(
  "Hi Arone, I'd like to learn more about LUMINAR."
)

export const EMAIL_ENQUIRY_LINK = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('LUMINAR Enquiry')}`
