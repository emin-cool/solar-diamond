import { BadgeCheck, ShieldCheck, Truck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { EngravingModule } from "@/components/product/EngravingModule";
import { ImageGallery } from "@/components/product/ImageGallery";
import { MetalSelector } from "@/components/product/MetalSelector";
import { SizeSelector } from "@/components/product/SizeSelector";
import { SpecsTable } from "@/components/product/SpecsTable";
import { StickyMobileBar } from "@/components/product/StickyMobileBar";
import { ProductCard } from "@/components/product/ProductCard";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return MOCK_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((item) => item.slug === slug);
  return { title: product?.name ?? "Product" };
}

const TRUST_ITEMS = [
  { icon: Truck, label: "Free Shipping" },
  { icon: ShieldCheck, label: "30-Day Returns" },
  { icon: BadgeCheck, label: "Lifetime Warranty" },
];

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((item) => item.slug === slug);
  if (!product) notFound();

  const related = MOCK_PRODUCTS.filter((item) => item.slug !== slug).slice(
    0,
    4,
  );

  return (
    <>
      <Header />

      <main className="flex-1 pb-28 lg:pb-0">
        <div className="mx-auto max-w-[1440px] px-5 pt-8 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="font-sans text-xs">
            <ol className="flex flex-wrap items-center gap-2 text-navy/45">
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
              <li>
                <Link href="/collections" className="hover:text-gold">
                  Engagement Rings
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-gold" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <ImageGallery image={product.image} alt={product.name} />

            <div>
              <h1 className="font-serif text-3xl text-navy sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 font-serif text-2xl text-gold">
                {formatPrice(product.price, product.currency)}
              </p>
              {product.tagline && (
                <p className="mt-3 font-serif text-lg text-navy/60 italic">
                  &ldquo;{product.tagline}&rdquo;
                </p>
              )}

              {product.certificate && (
                <div className="mt-5 flex items-center justify-between border-y border-navy/10 py-3">
                  <span className="flex items-center gap-2 font-sans text-[11px] tracking-[0.12em] text-navy uppercase">
                    <BadgeCheck className="size-4 text-gold" strokeWidth={1.5} />
                    {product.certificate} Certified
                  </span>
                  <Link
                    href="/certification"
                    className="font-sans text-[10px] tracking-[0.1em] text-navy/50 underline underline-offset-2 hover:text-gold"
                  >
                    View Digital Certificate
                  </Link>
                </div>
              )}

              <div className="mt-5">
                <SpecsTable product={product} />
              </div>

              <div className="mt-6">
                <MetalSelector defaultMetal={product.metal} />
              </div>

              <div className="mt-6">
                <SizeSelector />
              </div>

              <div className="mt-6">
                <EngravingModule />
              </div>

              <Button variant="primary" size="lg" fullWidth className="mt-6">
                Add to Bag
              </Button>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <Button href="/wishlist" variant="secondary" size="md">
                  Wishlist
                </Button>
                <Button href="/bespoke" variant="secondary" size="md">
                  Consultation
                </Button>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-navy/10 pt-6">
                {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5 text-center"
                  >
                    <Icon className="size-4 text-gold" strokeWidth={1.5} />
                    <span className="font-sans text-[9px] tracking-[0.1em] text-navy/50 uppercase">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Accordion
            className="mt-16 max-w-3xl"
            items={[
              {
                title: "Product Details",
                content: (
                  <p>
                    Handcrafted in our atelier from {product.metal ?? "18K gold"},
                    this piece is set with a {product.carat?.toFixed(2)} carat{" "}
                    {product.shape?.toLowerCase()} cut diamond. Each ring is
                    inspected under magnification before it leaves our workshop.
                  </p>
                ),
              },
              {
                title: "Certification & Sustainability",
                content: (
                  <p>
                    Independently graded by {product.certificate ?? "GIA/HRD"},
                    with a digital certificate available for every stone above
                    0.3 carats. Our diamonds are lab-grown, using a fraction of
                    the energy and land footprint of mined stones.
                  </p>
                ),
              },
              {
                title: "Shipping & Returns",
                content: (
                  <p>
                    Fully insured worldwide delivery, with complimentary
                    standard shipping on every order. Returns are accepted
                    within 30 days of delivery, provided the piece is unworn
                    and in its original packaging.
                  </p>
                ),
              },
            ]}
          />

          {related.length > 0 && (
            <section className="mt-20 border-t border-navy/10 pt-14">
              <h2 className="text-center font-serif text-2xl text-navy">
                You May Also Like
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                {related.map((item) => (
                  <ProductCard
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    specs={item.specs}
                    certificate={item.certificate}
                    href={`/products/${item.slug}`}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <StickyMobileBar price={product.price} currency={product.currency} />
      <Footer />
    </>
  );
}
