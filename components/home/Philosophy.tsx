import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Philosophy() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
        <div className="order-2 lg:order-1">
          <p className="font-sans text-[11px] tracking-[0.28em] text-gold uppercase">
            Our Philosophy
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-4xl">
            Light, Captured Eternally.
          </h2>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-navy/70">
            Solar Diamond was born from a singular vision: to create the
            world&apos;s most brilliant gemstones without the earthly cost. By
            harnessing the literal power of the sun to forge our diamonds in
            controlled laboratory environments, we achieve a purity and
            brilliance that rivals anything found in nature.
          </p>
          <p className="mt-6 max-w-md font-serif text-lg text-navy/80 italic">
            &ldquo;We don&apos;t just sell jewelry — we curate the very
            essence of light for the modern, conscious connoisseur.&rdquo;
          </p>
          <Button
            href="/heritage"
            variant="link"
            className="mt-8"
            icon={<ArrowRight className="size-4" />}
          >
            Learn Our Process
          </Button>
        </div>

        {/* No lifestyle photography exists yet — reuses a product mock shot. */}
        <div
          aria-hidden
          className="order-1 relative aspect-[4/5] overflow-hidden bg-champagne/25 lg:order-2"
        >
          <Image
            src="/images/mock/aura-oval-pave.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
