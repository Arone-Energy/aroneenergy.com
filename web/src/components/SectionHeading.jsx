// Heading (and optional intro) used at the top of each section. No eyebrow
// tag above it: the heading carries the section on its own.
export default function SectionHeading({ title, intro, onDark = false }) {
  return (
    <div className="max-w-[760px]">
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
