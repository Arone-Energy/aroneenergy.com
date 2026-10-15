import { useEffect, useRef } from 'react'

// Full-screen photo viewer for the gallery. Arrow keys, on-screen arrows or a
// swipe move between photos; Esc, the close button or a tap on the backdrop
// closes it. Page scroll is locked while open, and focus returns to the photo
// that opened it.

function ViewerIcon({ path }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

const CLOSE = 'M6 6l12 12M18 6L6 18'
const PREVIOUS = 'M15 5l-7 7 7 7'
const NEXT = 'M9 5l7 7-7 7'

const roundButton =
  'flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-30 disabled:hover:bg-white/10'

export default function GalleryLightbox({ photos, index, onClose, onChange }) {
  const closeRef = useRef(null)
  const touchStart = useRef(null)
  const photo = photos[index]
  const hasPrevious = index > 0
  const hasNext = index < photos.length - 1

  useEffect(() => {
    const opener = document.activeElement
    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
      if (opener && typeof opener.focus === 'function') opener.focus()
    }
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && hasPrevious) onChange(index - 1)
      if (event.key === 'ArrowRight' && hasNext) onChange(index + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, hasPrevious, hasNext, onClose, onChange])

  const onTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX
  }
  const onTouchEnd = (event) => {
    if (touchStart.current === null) return
    const moved = event.changedTouches[0].clientX - touchStart.current
    touchStart.current = null
    if (moved > 50 && hasPrevious) onChange(index - 1)
    if (moved < -50 && hasNext) onChange(index + 1)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length}`}
      className="fixed inset-0 z-[130] bg-[#00121f]/95 backdrop-blur-sm flex flex-col"
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 h-16 flex-shrink-0 text-white/60 text-[0.8rem] tracking-wide">
        <span aria-hidden="true">{index + 1} / {photos.length}</span>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close photo" className={roundButton}>
          <ViewerIcon path={CLOSE} />
        </button>
      </div>

      <div
        className="flex-1 min-h-0 flex items-center justify-center gap-3 px-2 sm:px-6"
        onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}
      >
        <button type="button" onClick={() => onChange(index - 1)} disabled={!hasPrevious} aria-label="Previous photo"
          className={`${roundButton} hidden sm:flex flex-shrink-0`}>
          <ViewerIcon path={PREVIOUS} />
        </button>
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="max-h-full max-w-full w-auto h-auto object-contain select-none animate-fadeUp"
          draggable="false"
        />
        <button type="button" onClick={() => onChange(index + 1)} disabled={!hasNext} aria-label="Next photo"
          className={`${roundButton} hidden sm:flex flex-shrink-0`}>
          <ViewerIcon path={NEXT} />
        </button>
      </div>

      {/* Phones: arrows under the photo, within thumb reach */}
      <div className="flex-shrink-0 px-4 py-5 flex justify-center sm:hidden">
        <div className="flex gap-3">
          <button type="button" onClick={() => onChange(index - 1)} disabled={!hasPrevious} aria-label="Previous photo" className={roundButton}>
            <ViewerIcon path={PREVIOUS} />
          </button>
          <button type="button" onClick={() => onChange(index + 1)} disabled={!hasNext} aria-label="Next photo" className={roundButton}>
            <ViewerIcon path={NEXT} />
          </button>
        </div>
      </div>
    </div>
  )
}
