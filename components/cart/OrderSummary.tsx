"use client";

import { Gem, Lock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Insured" },
  { icon: Lock, label: "Secure" },
  { icon: Gem, label: "GIA" },
];

export interface OrderSummaryProps {
  subtotal: number;
  className?: string;
}

export function OrderSummary({ subtotal, className }: OrderSummaryProps) {
  const [showPromo, setShowPromo] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className={className}>
      <div className="bg-champagne/25 p-6 sm:p-8">
        <h2 className="font-serif text-2xl text-navy">Order Summary</h2>

        <dl className="mt-6 flex flex-col gap-3 border-b border-navy/15 pb-5">
          <div className="flex items-center justify-between font-sans text-sm text-navy/70">
            <dt>Subtotal</dt>
            <dd>{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex items-center justify-between font-sans text-sm text-navy/70">
            <dt>Shipping</dt>
            <dd className="text-gold">Free</dd>
          </div>
        </dl>

        <div className="flex items-center justify-between pt-5">
          <span className="font-serif text-lg font-medium text-navy">
            Total
          </span>
          <span className="font-serif text-xl font-medium text-navy">
            {formatPrice(subtotal)}
          </span>
        </div>

        {showPromo ? (
          <input
            type="text"
            value={promoCode}
            onChange={(event) => setPromoCode(event.target.value)}
            placeholder="Enter promo code"
            autoFocus
            className="mt-4 h-10 w-full border border-navy/20 bg-ivory px-3 font-sans text-sm text-navy placeholder:text-navy/35 focus:border-gold focus:outline-none"
          />
        ) : (
          <button
            type="button"
            onClick={() => setShowPromo(true)}
            className="mt-4 font-sans text-xs text-gold underline underline-offset-2 hover:text-navy"
          >
            Add Promo Code
          </button>
        )}

        <Button href="/checkout" variant="primary" size="lg" fullWidth className="mt-6">
          Proceed to Checkout
        </Button>

        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-navy/15 pt-6">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 text-center"
            >
              <Icon className="size-4 text-navy/60" strokeWidth={1.5} />
              <span className="font-sans text-[9px] tracking-[0.1em] text-navy/50 uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-center font-sans text-xs text-navy/55 italic">
        Questions?{" "}
        <a
          href="mailto:concierge@solardiamond.com"
          className="text-gold not-italic underline underline-offset-2 hover:text-navy"
        >
          Contact our Concierge
        </a>{" "}
        for wire transfers and inquiries.
      </p>
    </div>
  );
}
