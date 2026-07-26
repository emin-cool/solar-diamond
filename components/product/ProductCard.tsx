import Image from "next/image";
import Link from "next/link";
import { CertificateBadge } from "@/components/ui/Badge";
import type { Certificate } from "@/lib/types";
import { cn, formatPrice } from "@/lib/utils";

export interface ProductCardProps {
  name: string;
  /** Amount in major units — 4250 renders as "$4,250". */
  price: number;
  image: string;
  href?: string;
  /** Spec chips under the name, e.g. ["1.5 CT", "D COLOR", "VVS1"]. */
  specs?: string[];
  certificate?: Certificate;
  currency?: string;
  imageAlt?: string;
  /** Set on above-the-fold cards so Next prioritises the image. */
  priority?: boolean;
  className?: string;
}

export function ProductCard({
  name,
  price,
  image,
  href = "#",
  specs,
  certificate,
  currency,
  imageAlt,
  priority = false,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn("group block text-center", className)}
      aria-label={`${name} — ${formatPrice(price, currency)}`}
    >
      <div className="relative aspect-square overflow-hidden bg-champagne/25">
        <Image
          src={image}
          alt={imageAlt ?? name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {certificate && (
          <CertificateBadge
            certificate={certificate}
            className="absolute top-3 right-3"
          />
        )}
      </div>

      <div className="mt-5 space-y-2">
        <h3 className="font-serif text-lg text-navy transition-colors duration-300 group-hover:text-gold sm:text-xl">
          {name}
        </h3>

        {specs && specs.length > 0 && (
          <p className="font-sans text-[10px] tracking-[0.16em] text-navy/55 uppercase">
            {specs.join(" · ")}
          </p>
        )}

        <p className="font-sans text-sm font-medium text-gold">
          {formatPrice(price, currency)}
        </p>
      </div>
    </Link>
  );
}
