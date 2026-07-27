export interface InfoHeroProps {
  kicker: string;
  title: string;
  subcopy?: string;
}

/** Shared kicker + title (+ optional subcopy) header for simple content
 * pages (legal, care, contact, etc.) that don't need a full hero. */
export function InfoHero({ kicker, title, subcopy }: InfoHeroProps) {
  return (
    <section className="border-b border-navy/10 bg-champagne/20 py-16 text-center sm:py-20">
      <div className="mx-auto max-w-xl px-5 sm:px-8">
        <p className="font-sans text-[11px] tracking-[0.28em] text-gold uppercase">
          {kicker}
        </p>
        <h1 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">
          {title}
        </h1>
        {subcopy && (
          <p className="mt-4 font-sans text-sm leading-relaxed text-navy/60">
            {subcopy}
          </p>
        )}
      </div>
    </section>
  );
}
