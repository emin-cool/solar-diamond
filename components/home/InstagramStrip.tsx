import Image from "next/image";

/**
 * Placeholder lifestyle imagery (Lorem Picsum, picsum.photos) — no real
 * Instagram feed exists yet. Swap for the live feed once the account is
 * connected.
 */
const POSTS = [
  "/images/mock/instagram/post-1.jpg",
  "/images/mock/instagram/post-2.jpg",
  "/images/mock/instagram/post-3.jpg",
  "/images/mock/instagram/post-4.jpg",
  "/images/mock/instagram/post-5.jpg",
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
        {POSTS.map((src, index) => (
          <div
            key={src}
            className="group relative aspect-square overflow-hidden bg-champagne/25"
          >
            <Image
              src={src}
              alt={`Solar Diamond Instagram post ${index + 1}`}
              fill
              sizes="(min-width: 640px) 20vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
