import { Logo } from "@/components/ui/Logo";

const STEPS = ["Cart", "Information", "Payment"];

export function CheckoutHeader() {
  return (
    <header className="border-b border-navy/10 bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-6 text-center sm:px-8 lg:px-12">
        <Logo href="/" size="md" className="mx-auto" />
        <p className="mt-1.5 font-sans text-[10px] tracking-[0.3em] text-navy/45 uppercase">
          Secure Checkout
        </p>
        <ol className="mt-4 flex items-center justify-center gap-2 font-sans text-[10px] tracking-[0.14em] text-navy/40 uppercase">
          {STEPS.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden>/</span>}
              <span className={index === STEPS.length - 1 ? "text-gold" : ""}>
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </header>
  );
}
