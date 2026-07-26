import { Sparkles } from "lucide-react";

/**
 * No real post imagery exists yet — abstract gradient tiles stand in rather
 * than reusing product photography, which would misrepresent them as real
 * social posts.
 */
const TONES = [
  "from-navy to-navy/80",
  "from-gold/70 to-gold/40",
  "from-champagne to-champagne/50",
  "from-navy/90 to-gold/30",
  "from-champagne/70 to-navy/20",
];

export function InstagramStrip() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <header className="flex flex-col items-center text-center">
        <p className="font-sans text-[11px] tracking-[0.28em] text-gold uppercase">
          Follow the Light
        </p>
        <a
          href="https://instagram.com/ssolar_diamond"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 font-serif text-2xl text-navy transition-colors hover:text-gold sm:text-3xl"
        >
          @ssolar_diamond
        </a>
      </header>

      <div className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-3">
        {TONES.map((tone, index) => (
          <div
            key={index}
            className={`flex aspect-square items-center justify-center bg-gradient-to-br ${tone}`}
          >
            <Sparkles
              className="size-6 text-ivory/70"
              strokeWidth={1}
              aria-hidden
            />
          </div>
        ))}
      </div>
    </section>
  );
}
