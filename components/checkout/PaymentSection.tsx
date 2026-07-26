import { Landmark, Lock } from "lucide-react";
import { FormField } from "@/components/checkout/FormField";
import { cn } from "@/lib/utils";

export type PaymentMethod = "credit-card" | "bank-transfer";

export interface PaymentSectionProps {
  value: PaymentMethod;
  onChange: (value: PaymentMethod) => void;
}

export function PaymentSection({ value, onChange }: PaymentSectionProps) {
  return (
    <section className="mt-10">
      <h2 className="flex items-center gap-2 font-serif text-2xl text-navy">
        Payment
        <Lock className="size-4 text-navy/40" strokeWidth={1.5} />
      </h2>

      <div className="mt-6 border border-navy/15">
        <div className="grid grid-cols-2">
          <button
            type="button"
            onClick={() => onChange("credit-card")}
            aria-pressed={value === "credit-card"}
            className={cn(
              "border-b py-4 font-sans text-[11px] tracking-[0.12em] uppercase transition-colors",
              value === "credit-card"
                ? "border-navy text-navy"
                : "border-navy/10 text-navy/45 hover:text-navy",
            )}
          >
            Credit Card
          </button>
          <button
            type="button"
            onClick={() => onChange("bank-transfer")}
            aria-pressed={value === "bank-transfer"}
            className={cn(
              "border-b py-4 font-sans text-[11px] tracking-[0.12em] uppercase transition-colors",
              value === "bank-transfer"
                ? "border-navy text-navy"
                : "border-navy/10 text-navy/45 hover:text-navy",
            )}
          >
            Bank Transfer{" "}
            <span className="text-gold">— 2% Instant Discount</span>
          </button>
        </div>

        <div className="p-5 sm:p-6">
          {value === "credit-card" ? (
            <div className="flex flex-col gap-5">
              <FormField
                label="Card Number"
                name="cardNumber"
                inputMode="numeric"
                placeholder="0000 0000 0000 0000"
                required
              />
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  label="Expiration (MM/YY)"
                  name="expiration"
                  placeholder="MM/YY"
                  required
                />
                <FormField
                  label="Security Code (CVV)"
                  name="cvv"
                  inputMode="numeric"
                  placeholder="123"
                  required
                />
              </div>
              <FormField label="Name on Card" name="cardName" required />
              <p className="font-sans text-xs text-navy/50 italic">
                Note: For orders exceeding $50,000, please ensure your card
                provider has pre-authorized the transaction to prevent
                delays.
              </p>
            </div>
          ) : (
            <div>
              <p className="flex items-center gap-2 font-serif text-lg text-navy">
                <Landmark className="size-5 text-gold" strokeWidth={1.5} />
                Secure Wire / EFT
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-navy/65">
                Selecting Bank Transfer applies an immediate{" "}
                <span className="font-medium text-gold">2% discount</span> to
                your order total.
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-navy/65">
                Upon placing your order, you will receive an email containing
                a secure link with our wire instructions and routing details.
                Your piece will be reserved for 48 hours awaiting funds.
              </p>
              <p className="mt-4 bg-champagne/25 p-4 font-sans text-xs leading-relaxed text-navy/70">
                Need assistance with large international transfers? Our
                Concierge will contact you immediately upon confirmation to
                assist with the process.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
