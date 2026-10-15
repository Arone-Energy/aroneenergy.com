// Gallery page (/gallery): highlights through the years, oldest first. Each
// photo has a large file (viewer) and a small one (grid), made from the
// originals in source-assets/gallery/ with cwebp (about 1800px and 900px
// wide). `alt` describes the photo for screen readers; nothing is shown as text.

import buildingPrototypes from '@/assets/images/gallery/2022-02-building-prototypes-by-headlamp.webp'
import buildingPrototypesSm from '@/assets/images/gallery/2022-02-building-prototypes-by-headlamp-sm.webp'
import firstWorkspace from '@/assets/images/gallery/2022-02-first-workspace.webp'
import firstWorkspaceSm from '@/assets/images/gallery/2022-02-first-workspace-sm.webp'
import teamAtNewFacility from '@/assets/images/gallery/2022-04-team-at-new-facility.webp'
import teamAtNewFacilitySm from '@/assets/images/gallery/2022-04-team-at-new-facility-sm.webp'
import wiringBatteryPacks from '@/assets/images/gallery/2022-04-wiring-battery-packs.webp'
import wiringBatteryPacksSm from '@/assets/images/gallery/2022-04-wiring-battery-packs-sm.webp'
import unitsForDelivery from '@/assets/images/gallery/2023-08-units-loaded-for-delivery.webp'
import unitsForDeliverySm from '@/assets/images/gallery/2023-08-units-loaded-for-delivery-sm.webp'
import teamWithCabinet from '@/assets/images/gallery/2023-08-team-with-power-cabinet.webp'
import teamWithCabinetSm from '@/assets/images/gallery/2023-08-team-with-power-cabinet-sm.webp'
import productionFloor from '@/assets/images/gallery/2026-02-production-floor.webp'
import productionFloorSm from '@/assets/images/gallery/2026-02-production-floor-sm.webp'
import fittingEnclosure from '@/assets/images/gallery/2026-02-fitting-an-enclosure.webp'
import fittingEnclosureSm from '@/assets/images/gallery/2026-02-fitting-an-enclosure-sm.webp'
import spotWelding from '@/assets/images/gallery/2026-02-spot-welding-battery-cells.webp'
import spotWeldingSm from '@/assets/images/gallery/2026-02-spot-welding-battery-cells-sm.webp'
import provisionsShop from '@/assets/images/gallery/customer-provisions-shop.webp'
import provisionsShopSm from '@/assets/images/gallery/customer-provisions-shop-sm.webp'

export const GALLERY_PHOTOS = [
  { src: buildingPrototypes, srcSm: buildingPrototypesSm, width: 1800, height: 1350, alt: 'Three team members leaning over a workbench of electronics, lit only by headlamps in a dark room' },
  { src: firstWorkspace, srcSm: firstWorkspaceSm, width: 1170, height: 645, alt: 'Two team members in navy overalls working at a table in a bare room' },
  { src: teamAtNewFacility, srcSm: teamAtNewFacilitySm, width: 1800, height: 1350, alt: 'Twelve team members, most in navy work overalls, standing in a row in front of a building under construction' },
  { src: wiringBatteryPacks, srcSm: wiringBatteryPacksSm, width: 1800, height: 1350, alt: 'A team member in blue overalls and glasses wiring a battery pack at a long workbench' },
  { src: unitsForDelivery, srcSm: unitsForDeliverySm, width: 1800, height: 2400, alt: 'Boxes marked Arone Energy and Fragile packed into a yellow tricycle taxi' },
  { src: teamWithCabinet, srcSm: teamWithCabinetSm, width: 1800, height: 1350, alt: 'Five smiling team members in work uniforms beside a large white Arone Energy power cabinet' },
  { src: productionFloor, srcSm: productionFloorSm, width: 1179, height: 680, alt: 'A bright workshop with rows of workbenches, LUMINAR units and team members at work' },
  { src: fittingEnclosure, srcSm: fittingEnclosureSm, width: 1179, height: 685, alt: 'A team member drilling into the metal enclosure of a LUMINAR unit' },
  { src: spotWelding, srcSm: spotWeldingSm, width: 1179, height: 679, alt: 'A team member spot welding rows of battery cells' },
  { src: provisionsShop, srcSm: provisionsShopSm, width: 1800, height: 1109, alt: 'Smiling shop owner behind the counter of a well stocked provisions store, with a LUMINAR unit on the shelf' },
]
