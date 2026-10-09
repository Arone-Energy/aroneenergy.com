import SectionHeading from '@/components/SectionHeading'
import { products } from '@/data/products'

function ProductCard({ product }) {
  const isFeatured = product.featured

  return (
    <article
      className={`relative flex flex-col overflow-hidden p-7 lg:p-9 ${
        isFeatured ? 'bg-arone-blue text-white' : 'bg-white text-arone-black'
      }`}
    >
      {/* Corner notch, as on the aronetech.com/luminar tier cards */}
      <div
        aria-hidden="true"
        className={`absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-r-transparent ${
          isFeatured ? 'border-t-white/15' : 'border-t-arone-lgray'
        }`}
      />

      <div className="flex items-center justify-between gap-3 mb-5">
        <span
          className={`text-[0.65rem] uppercase tracking-[0.15em] font-semibold ${
            isFeatured ? 'text-white/55' : 'text-arone-dgray'
          }`}
        >
          {product.audience}
        </span>
        {isFeatured && (
          <span className="text-[0.6rem] uppercase tracking-[0.15em] font-semibold text-white border border-white/40 px-2 py-1">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-[1.5rem] font-bold tracking-[-0.01em] mb-1">{product.name}</h3>
      <p
        className={`text-[0.85rem] font-medium mb-6 ${
          isFeatured ? 'text-white/70' : product.specsConfirmed ? 'text-arone-blue' : 'text-arone-dgray italic'
        }`}
      >
        {product.specLine}
      </p>

      {product.image && (
        <img
          src={product.image.src}
          alt={product.image.alt}
          width={product.image.width}
          height={product.image.height}
          loading="lazy"
          decoding="async"
          className="w-full h-auto aspect-square object-cover mb-6"
        />
      )}

      {product.specHighlights.length > 0 && (
        <ul className="flex-grow mb-6">
          {product.specHighlights.map((highlight) => (
            <li
              key={highlight}
              className={`flex items-center gap-2.5 py-2 text-[0.82rem] border-t ${
                isFeatured ? 'text-white/80 border-white/10' : 'text-arone-black border-arone-lgray'
              }`}
            >
              <span
                aria-hidden="true"
                className={`w-1 h-1 rounded-full shrink-0 ${isFeatured ? 'bg-white/70' : 'bg-arone-blue'}`}
              />
              {highlight}
            </li>
          ))}
        </ul>
      )}

      {/* Shown whenever the owner has not signed off the numbers yet */}
      {!product.specsConfirmed && product.placeholderNote && (
        <p
          className={`text-[0.78rem] leading-[1.6] mb-6 ${
            product.specHighlights.length === 0 ? 'flex-grow' : ''
          } ${isFeatured ? 'text-white/50' : 'text-arone-dgray'}`}
        >
          {product.placeholderNote}
        </p>
      )}

      <a
        href={product.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto block text-center py-3.5 text-[0.82rem] font-medium transition-colors ${
          isFeatured
            ? 'bg-white text-arone-blue hover:bg-arone-lgray'
            : 'bg-arone-blue text-white hover:bg-arone-blueMid'
        }`}
      >
        {product.orderButtonLabel}
      </a>
    </article>
  )
}

export default function ProductsSection() {
  return (
    <section id="products" className="reveal bg-arone-lgray px-4 sm:px-6 lg:px-12 py-16 lg:py-28">
      <SectionHeading
        eyebrow="Products"
        title="Choose your LUMINAR."
        intro="Three systems, one promise: power that stays on. Tell us what you need to run and we will recommend the right one."
      />

      <div className="mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-px bg-arone-dgray/40 border border-arone-dgray/40 max-w-[560px] mx-auto lg:max-w-none">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
