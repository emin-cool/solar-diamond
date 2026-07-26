import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export type DeliveryMethod = "standard" | "white-glove";

export const DELIVERY_PRICES: Record<DeliveryMethod, number> = {
  standard: 0,
  "white-glove": 250,
};

const OPTIONS: {
  id: DeliveryMethod;
  label: string;
  description: string;
  price: number;
  recommended?: boolean;
}[] = [
  {
    id: "standard",
    label: "Standard Insured Shipping",
    description: "3–5 business days. Fully insured transit.",
    price: 0,
  },
  {
    id: "white-glove",
    label: "White-Glove Courier",
    description: "1–2 business days. Hand-delivered via private armored courier. Signature required.",
    price: 250,
    recommended: true,
  },
];

export interface DeliveryMethodSectionProps {
  value: DeliveryMethod;
  onChange: (value: DeliveryMethod) => void;
}

export function DeliveryMethodSection({
  value,
  onChange,
}: DeliveryMethodSectionProps) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl text-navy">Delivery Method</h2>
      <div className="mt-6 flex flex-col gap-3">
        {OPTIONS.map((option) => {
          const isSelected = value === option.id;
          return (
            <label
              key={option.id}
              className={cn(
                "flex cursor-pointer items-start justify-between gap-4 border p-4 transition-colors",
                isSelected
                  ? "border-gold bg-champagne/20"
                  : "border-navy/15 hover:border-navy/30",
              )}
            >
              <span className="flex items-start gap-3">
                <input
                  type="radio"
                  name="deliveryMethod"
                  checked={isSelected}
                  onChange={() => onChange(option.id)}
                  className="mt-1 size-4 accent-gold"
                />
                <span>
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-sans text-sm font-medium text-navy">
                      {option.label}
                    </span>
                    {option.recommended && (
                      <span className="bg-gold px-2 py-0.5 font-sans text-[9px] font-medium tracking-[0.1em] text-navy uppercase">
                        Recommended
                      </span>
                    )}
                  </span>
                  <span className="mt-1 block font-sans text-xs text-navy/55">
                    {option.description}
                  </span>
                </span>
              </span>
              <span className="shrink-0 font-sans text-sm text-navy">
                {option.price === 0 ? "Free" : `$${option.price.toFixed(2)}`}
              </span>
            </label>
          );
        })}
      </div>
      <p className="mt-4 flex items-center gap-2 font-sans text-xs text-navy/50">
        <ShieldCheck className="size-4 shrink-0 text-gold" strokeWidth={1.5} />
        All shipments are fully insured until signed for at the destination.
      </p>
    </section>
  );
}
