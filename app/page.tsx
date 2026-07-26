import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductCard } from "@/components/product/ProductCard";
import { Badge, CertificateBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MOCK_PRODUCTS } from "@/lib/mock-data";

/**
 * TEMPORARY component showcase (build-order step 2).
 * Replaced by the real homepage in step 3.
 */
export default function HomePage() {
  return (
    <>
      <Header cartCount={2} />

      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
          <Section title="Buttons" note="variant × size">
            <div className="flex flex-wrap items-center gap-4">
              <Button>Add to Bag</Button>
              <Button variant="secondary">Wishlist</Button>
              <Button variant="outline">Load More</Button>
              <Button variant="link" icon={<ArrowRight className="size-4" />}>
                Learn Our Process
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button href="/collections" variant="secondary" size="sm">
                As a link
              </Button>
              <Button disabled>Disabled</Button>
            </div>
            <div className="mt-6 max-w-md bg-navy p-8">
              <Button variant="onImage" fullWidth>
                Explore Collections
              </Button>
            </div>
          </Section>

          <Section title="Badges" note="GIA / HRD certification marks">
            <div className="flex flex-wrap items-center gap-6">
              <CertificateBadge certificate="GIA" />
              <CertificateBadge certificate="HRD" />
              <CertificateBadge certificate="GIA" variant="inline" verbose />
              <CertificateBadge certificate="HRD" variant="solid" verbose />
              <Badge variant="outline">Insured Shipping</Badge>
            </div>
          </Section>

          <Section
            title="Product Card"
            note="image · name · specs · price · badge"
          >
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
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
            <p className="mt-10 text-center font-sans text-xs text-navy/50">
              Optional props omitted — no badge, no specs:
            </p>
            <div className="mx-auto mt-6 max-w-[220px]">
              <ProductCard
                name="The Eternal Round"
                price={11900}
                image="/images/mock/zenith-emerald.png"
              />
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-navy/10 py-14 first:border-t-0 first:pt-0">
      <header className="mb-8">
        <h2 className="font-serif text-2xl text-navy">{title}</h2>
        <p className="mt-1 font-sans text-[10px] tracking-[0.18em] text-navy/45 uppercase">
          {note}
        </p>
      </header>
      {children}
    </section>
  );
}
