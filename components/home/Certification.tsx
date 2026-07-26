import Image from "next/image";
import { CertificateBadge } from "@/components/ui/Badge";

export function Certification() {
  return (
    <section className="bg-champagne/20 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-12">
        <div className="order-2 relative aspect-[16/10] overflow-hidden bg-navy lg:order-1">
          <Image
            src="/images/mock/zenith-emerald.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 55vw, 90vw"
            className="object-cover opacity-90"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-serif text-3xl text-navy sm:text-4xl">
            Uncompromising Standards
          </h2>
          <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-navy/70">
            Every Solar Diamond above 0.3 carats is laser-inscribed and
            accompanied by a digital grading report from the world&apos;s
            leading gemological institutes. We guarantee Type IIa purity —
            the rarest form of diamond, representing less than 2% of mined
            stones.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <CertificateBadge certificate="GIA" variant="solid" verbose />
            <CertificateBadge certificate="HRD" variant="outline" verbose />
          </div>
        </div>
      </div>
    </section>
  );
}
