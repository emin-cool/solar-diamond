import type { Metadata } from "next";
import Link from "next/link";
import { FilterSidebar } from "@/components/collection/FilterSidebar";
import { MobileFilterBar } from "@/components/collection/MobileFilterBar";
import { SortSelect } from "@/components/collection/SortSelect";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { MOCK_PRODUCTS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Engagement Rings",
};

export default function CollectionsPage() {
  return (
    <>
      <Header />

      <main className="flex-1 pb-24 lg:pb-0">
        <div className="mx-auto max-w-[1440px] px-5 pt-8 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="font-sans text-xs">
            <ol className="flex items-center gap-2 text-navy/45">
              <li>
                <Link href="/" className="hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/collections" className="hover:text-gold">
                  Collections
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-gold" aria-current="page">
                Engagement Rings
              </li>
            </ol>
          </nav>

          <header className="mt-6 max-w-2xl">
            <h1 className="font-serif text-4xl text-navy sm:text-5xl">
              Engagement Rings
            </h1>
            <p className="mt-3 font-sans text-sm text-navy/60 sm:text-base">
              A curated collection of brilliance, crafted for eternal
              commitment.
            </p>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-12">
            <FilterSidebar className="hidden lg:block" />

            <div>
              <div className="flex items-center justify-between border-b border-navy/10 pb-4">
                <p className="font-sans text-xs tracking-[0.08em] text-navy/60 uppercase">
                  {MOCK_PRODUCTS.length} Designs
                </p>
                <div className="hidden lg:block">
                  <SortSelect />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
                {MOCK_PRODUCTS.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    specs={product.specs}
                    certificate={product.certificate}
                    href={`/products/${product.slug}`}
                    priority={index < 3}
                  />
                ))}
              </div>

              <div className="mt-14 flex justify-center">
                <Button variant="outline">Load More</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MobileFilterBar />
      <Footer />
    </>
  );
}
