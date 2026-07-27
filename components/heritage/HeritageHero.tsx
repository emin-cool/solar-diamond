import Image from "next/image";

export function HeritageHero() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pt-14 pb-4 sm:px-8 lg:px-12 lg:pt-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-sans text-[11px] tracking-[0.28em] text-gold uppercase">
            Our Heritage
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-navy sm:text-5xl lg:text-6xl">
            Solar Diamond
          </h1>
          <p className="mt-5 font-serif text-lg text-navy/65 italic">
            Brilliance, born from light.
          </p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-champagne/25">
          <Image
            src="/images/mock/helios-solitaire.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
