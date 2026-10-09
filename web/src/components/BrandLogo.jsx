import aroneIconNavy from '@/assets/brand/arone-logo-icon-navy.png'
import aroneIconWhite from '@/assets/brand/arone-logo-icon-white.png'

// Arone Energy mark + wordmark: the Arone group icon (shared with
// aronetech.com) in navy on light backgrounds and white on dark ones, with the
// name set in DM Sans next to it.
export default function BrandLogo({ onDark = false, className = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <img src={onDark ? aroneIconWhite : aroneIconNavy} alt="" width="32" height="32" className="h-7 w-7 md:h-8 md:w-8" />
      <span className="flex flex-col leading-none">
        <span className={`text-[0.95rem] font-bold tracking-[-0.01em] ${onDark ? 'text-white' : 'text-arone-blue'}`}>
          Arone Energy
        </span>
        <span className={`mt-1 text-[0.58rem] uppercase tracking-[0.2em] font-medium ${onDark ? 'text-white/45' : 'text-arone-dgray'}`}>
          LUMINAR power
        </span>
      </span>
    </span>
  )
}
