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
import luminarProImage from '@/assets/images/luminar-pro-unit.webp'

export const products = [
  {
    id: 'luminar-pro',
    name: 'LUMINAR PRO',
    audience: 'For smaller homes and shops',
    // Confirmed by the owner, 2026-10-10.
    powerRating: '3kVA',
    batteryCapacity: '500Wh to 1kWh',
    specLine: '3kVA · 500Wh to 1kWh',
    specHighlights: [
      'Powers lights, fans and phone charging',
      'Solar input compatible',
      'Smart thermal management',
      '5 to 7 year battery lifespan',
    ],
    placeholderNote: null,
    specsConfirmed: true,
    featured: false,
    // Product render from assets/Luminar max  V4.0203.png, square-cropped.
    image: {
      src: luminarProImage,
      alt: 'LUMINAR PRO unit, a black wall cabinet with a display, sockets and carry handles on top',
      width: 985,
      height: 985,
    },
    orderButtonLabel: 'Order on WhatsApp',
    whatsappLink: buildWhatsAppLink("Hi Arone, I'm interested in ordering a LUMINAR PRO."),
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
    // Confirmed by the owner, 2026-10-10.
    powerRating: '5 to 10kVA',
    batteryCapacity: 'up to 40kWh',
    specLine: '5 to 10kVA · up to 40kWh',
    specHighlights: [
      'Powers a full office, clinic or factory',
      'Handles heavy appliances',
      'With solar installation',
      'Operates up to 45°C',
      'Priority service support',
      '5 to 10 year battery lifespan',
    ],
    placeholderNote: null,
    specsConfirmed: true,
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
