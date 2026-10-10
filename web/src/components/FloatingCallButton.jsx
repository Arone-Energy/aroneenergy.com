import PhoneIcon from './PhoneIcon'
import { PRIMARY_CALL_LINE } from '@/data/contact'

// Phones only: a call button that stays in the bottom corner while the
// visitor scrolls, so calling is always one tap away.
export default function FloatingCallButton() {
  return (
    <a
      href={PRIMARY_CALL_LINE.link}
      aria-label={`Call Arone Energy on ${PRIMARY_CALL_LINE.display}`}
      className="md:hidden fixed z-[100] right-4 bottom-4 flex items-center gap-2 rounded-full bg-arone-blue text-white pl-4 pr-5 py-3 text-[0.85rem] font-medium shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-white/50"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <PhoneIcon className="w-[18px] h-[18px]" />
      Call us
    </a>
  )
}
