// Single source of truth for the LUMINAR product line.
//
// Rules for editing this file:
// - Only publish specs the owner has confirmed. Set `specsConfirmed: true`
//   once a product's numbers are signed off.
// - When `specsConfirmed` is false, the product card shows an
//   "awaiting confirmation" note so visitors are never misled.
// - `specHighlights` are the bullet points on the card. Each one must come
//   from approved marketing material (see the source note per product).

import { buildWhatsAppLink } from './contact'
import luminarMaxTileImage from '@/assets/images/luminar-hero-shot.webp'
import luminarMegapackImage from '@/assets/images/luminar-megapack.webp'

export const products = [
  {
    id: 'luminar-pro',
    name: 'LUMINAR PRO',
    audience: 'Coming soon',
    // No confirmed specs exist yet. Do not fill these with guesses.
    powerRating: null,
    batteryCapacity: null,
    specLine: 'Specifications coming soon',
    specHighlights: [],
    placeholderNote: 'Full specifications will be published once confirmed. Message us on WhatsApp to register your interest.',
    specsConfirmed: false,
    featured: false,
    image: null,
    orderButtonLabel: 'Register interest on WhatsApp',
    whatsappLink: buildWhatsAppLink("Hi Arone, I'm interested in the LUMINAR PRO."),
  },
  {
    id: 'luminar-max',
    name: 'LUMINAR MAX',
    audience: 'For homes and small offices',
    // Confirmed by the owner's marketing image ("3kva 2,000WH", lithium battery).
    powerRating: '3kVA',
    batteryCapacity: '2,000Wh',
    specLine: '3kVA · 2,000Wh lithium battery',
    // Bullets taken from the MAX tiers on aronetech.com/luminar.
    specHighlights: [
      'Powers lights, fans and phone charging',
      'Solar input compatible',
      'Smart thermal management',
      '5 to 7 year battery lifespan',
    ],
    placeholderNote: null,
    specsConfirmed: true,
    featured: true,
    image: {
      src: luminarMaxTileImage,
      alt: 'LUMINAR MAX unit mounted on a tiled wall, labelled 3kVA 2,000Wh',
      width: 2000,
      height: 2000,
    },
    orderButtonLabel: 'Order on WhatsApp',
    whatsappLink: buildWhatsAppLink("Hi Arone, I'm interested in ordering a LUMINAR MAX."),
  },
  {
    id: 'luminar-megapack',
    name: 'LUMINAR MEGAPACK',
    audience: 'For businesses and clinics',
    // From aronetech.com/luminar. Owner must confirm before launch.
    powerRating: '5 to 10kW',
    batteryCapacity: 'up to 40kWh',
    specLine: '5 to 10kW · up to 40kWh',
    specHighlights: [
      'Powers a full office, clinic or factory',
      'Handles heavy appliances',
      'With solar installation',
      'Operates up to 45°C',
      'Priority service support',
      '5 to 10 year battery lifespan',
    ],
    placeholderNote: 'Specifications awaiting final confirmation.',
    specsConfirmed: false,
    featured: false,
    // Cropped from the owner's MEGAPACK poster (assets/megapack.png): the photo
    // area only, without the printed title and contact footer.
    image: {
      src: luminarMegapackImage,
      alt: 'LUMINAR MEGAPACK unit in front of a clinic, a telecom tower and high-rise buildings',
      width: 2000,
      height: 1725,
    },
    orderButtonLabel: 'Order on WhatsApp',
    whatsappLink: buildWhatsAppLink("Hi Arone, I'm interested in ordering a LUMINAR MEGAPACK."),
  },
]
