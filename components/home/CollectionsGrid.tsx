import Image from "next/image";
import Link from "next/link";

/**
 * Reuses the six product mock photos (no dedicated category photography
 * exists yet) — one representative shot per category, same placeholder
 * approach as lib/mock-data.ts.
 */
const CATEGORIES = [
  {
    label: "Engagement",
    note: "Shop the Collection",
    href: "/collections",
    image: "/images/mock/helios-solitaire.png",
  },
  {
    label: "Earrings",
    note: "Discover Brilliance",
    href: "/collections",
    image: "/images/mock/aura-oval-pave.png",
  },
  {
    label: "Necklaces",
    note: "Radiant Essentials",
    href: "/collections",
    image: "/images/mock/zenith-emerald.png",
  },
  {
    label: "Bespoke",
    note: "Create Your Own",
    href: "/bespoke",
    image: "/images/mock/celestial-pear.png",
  },
];

export function CollectionsGrid() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <header className="text-center">
        <p className="font-sans text-[11px] tracking-[0.28em] text-gold uppercase">
          Categories
        </p>
        <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
          Curated Radiance
        </h2>
      </header>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {CATEGORIES.map((category) => (
          <Link
            key={category.label}
            href={category.href}
            className="group relative block aspect-[3/4] overflow-hidden bg-champagne/25"
          >
            <Image
              src={category.image}
              alt={category.label}
              fill
              sizes="(min-width: 1024px) 23vw, 45vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <h3 className="font-serif text-lg text-ivory sm:text-xl">
                {category.label}
              </h3>
              <p className="mt-1 font-sans text-[9px] tracking-[0.16em] text-ivory/75 uppercase">
                {category.note}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
