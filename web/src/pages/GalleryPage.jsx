import { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import SiteNavbar from '@/components/SiteNavbar'
import SiteFooter from '@/components/SiteFooter'
import FloatingCallButton from '@/components/FloatingCallButton'
import GalleryLightbox from '@/components/GalleryLightbox'
import { GALLERY_PHOTOS } from '@/data/gallery'

// /gallery: a title and Arone Energy's photos through the years, oldest first,
// in one grid. Photos keep their own shape (portrait or landscape); any photo
// opens the full-screen viewer. Photos: src/data/gallery.js.

const PAGE_URL = 'https://www.aroneenergy.com/gallery'
const PAGE_TITLE = 'Gallery | Arone Energy'
const PAGE_DESCRIPTION =
  'Highlights from building Arone Energy and LUMINAR in Nigeria, from early prototypes to a production floor and the businesses we power.'
const OG_IMAGE_URL = 'https://www.aroneenergy.com/og/luminar-max-og.jpg'

function PhotoTile({ photo, index, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`View photo: ${photo.alt}`}
      className="group block w-full overflow-hidden bg-arone-lgray cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-arone-blue focus-visible:ring-offset-2"
    >
      <img
        src={photo.src}
        srcSet={`${photo.srcSm} 900w, ${photo.src} ${photo.width}w`}
        sizes="(min-width: 1024px) 33vw, (min-width: 600px) 50vw, 100vw"
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading={index < 3 ? 'eager' : 'lazy'}
        decoding="async"
        className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </button>
  )
}

export default function GalleryPage() {
  const [openIndex, setOpenIndex] = useState(null)
  const open = useCallback((index) => setOpenIndex(index), [])
  const close = useCallback(() => setOpenIndex(null), [])

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arone Energy" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content="Arone Energy: highlights through the years" />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="font-sans bg-white text-arone-black overflow-x-clip">
        <SiteNavbar />
        <main>
          <section className="pt-[72px] px-4 sm:px-6 lg:px-12">
            <h1 className="pt-12 lg:pt-16 text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.02em] text-arone-black animate-fadeUp">
              Gallery
            </h1>
          </section>

          {/* Photos, oldest first */}
          <section aria-label="Photos" className="px-4 sm:px-6 lg:px-12 pt-8 lg:pt-10 pb-16 lg:pb-24">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 [&>*]:mb-4 lg:[&>*]:mb-6 [&>*]:break-inside-avoid">
              {GALLERY_PHOTOS.map((photo, index) => (
                <PhotoTile key={photo.src} photo={photo} index={index} onOpen={open} />
              ))}
            </div>
          </section>

        </main>
        <SiteFooter />
        <FloatingCallButton />
        <div aria-hidden="true" className="h-20 md:hidden bg-arone-blue" />
      </div>

      {openIndex !== null && (
        <GalleryLightbox photos={GALLERY_PHOTOS} index={openIndex} onClose={close} onChange={setOpenIndex} />
      )}
    </>
  )
}
