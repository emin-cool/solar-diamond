import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

/**
 * No dedicated hero photography exists yet (design-reference/home-desktop.png
 * is a 392px-wide export, too low-res to crop) — reuses a product mock shot
 * as the backdrop, darkened for text legibility, until real photography lands.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-navy sm:min-h-[720px]">
      <Image
        src="/images/mock/lumina-cushion.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-navy/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_100%_at_15%_20%,rgba(201,162,39,0.35),transparent_55%),radial-gradient(90%_80%_at_85%_85%,rgba(232,217,181,0.18),transparent_50%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(201,162,39,0.12),transparent)]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-xl">
          <p className="font-sans text-[11px] tracking-[0.32em] text-gold uppercase">
            Radiance Refined
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
            Where Brilliance Meets Light
          </h1>
          <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-ivory/70">
            Gold and diamond jewellery, from 0.001 to ∞ carat — every stone
            HRD & GIA certified, insured and delivered worldwide.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              href="/collections"
              variant="onImage"
              className="border-ivory bg-ivory text-navy hover:bg-transparent hover:text-ivory"
            >
              Explore Collections
            </Button>
            <Button
              href="/philosophy"
              variant="onImage"
              icon={<ArrowRight className="size-4" />}
            >
              Our Philosophy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
