"use client";

import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";

export interface StickyMobileBarProps {
  price: number;
  currency?: string;
}

export function StickyMobileBar({ price, currency }: StickyMobileBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-4 border-t border-navy/10 bg-ivory px-5 py-4 lg:hidden">
      <div>
        <p className="font-sans text-[9px] tracking-[0.14em] text-navy/45 uppercase">
          Total
        </p>
        <p className="font-serif text-lg text-gold">
          {formatPrice(price, currency)}
        </p>
      </div>
      <Button variant="primary" size="md" className="flex-1">
        Add to Bag
      </Button>
    </div>
  );
}
