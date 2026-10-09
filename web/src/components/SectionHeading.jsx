// Eyebrow tag + heading used at the top of each section. Matches the
// .section-tag / .section-h styles on aronetech.com/luminar.
export default function SectionHeading({ eyebrow, title, intro, onDark = false }) {
  return (
    <div className="max-w-[760px]">
      {eyebrow && (
        <div
          className={`flex items-center gap-[0.6rem] text-[0.68rem] uppercase tracking-[0.2em] font-medium mb-5 ${
            onDark ? 'text-white/40' : 'text-arone-blue'
          }`}
        >
          <span className={`w-6 h-px ${onDark ? 'bg-white/30' : 'bg-arone-blue'}`} />
          {eyebrow}
        </div>
      )}

      <h2
        className={`text-[clamp(1.9rem,3.5vw,3rem)] font-bold leading-[1.08] tracking-[-0.015em] ${
          onDark ? 'text-white' : 'text-arone-black'
        }`}
      >
        {title}
      </h2>

      {intro && (
        <p
          className={`mt-5 text-[0.95rem] leading-[1.8] font-light ${
            onDark ? 'text-white/60' : 'text-arone-dgray'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
