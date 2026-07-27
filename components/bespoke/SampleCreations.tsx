import { ProductCard } from "@/components/product/ProductCard";
import { MOCK_PRODUCTS } from "@/lib/mock-data";

/** A few mock pieces standing in for real bespoke commissions until we have
 * photography of client work to show instead. */
const FEATURED_SLUGS = ["celestial-pear", "lumina-cushion", "radiant-bezel"];

export function SampleCreations() {
  const pieces = MOCK_PRODUCTS.filter((product) =>
    FEATURED_SLUGS.includes(product.slug),
  );

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <header className="text-center">
        <p className="font-sans text-[11px] tracking-[0.28em] text-gold uppercase">
          Recent Commissions
        </p>
        <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
          A Few Bespoke Creations
        </h2>
      </header>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
        {pieces.map((piece) => (
          <ProductCard
            key={piece.id}
            name={piece.name}
            price={piece.price}
            image={piece.image}
            specs={piece.specs}
            certificate={piece.certificate}
            href={`/products/${piece.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
