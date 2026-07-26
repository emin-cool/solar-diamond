import { Lock } from "lucide-react";
import Image from "next/image";
import { Badge, CertificateBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { CartLineItem } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

export interface CheckoutSummaryProps {
  items: CartLineItem[];
  subtotal: number;
  shippingCost: number;
  discount: number;
  className?: string;
}

export function CheckoutSummary({
  items,
  subtotal,
  shippingCost,
  discount,
  className,
}: CheckoutSummaryProps) {
  const total = subtotal + shippingCost - discount;

  return (
    <div className={className}>
      <div className="bg-champagne/25 p-6 sm:p-8">
        <h2 className="font-serif text-2xl text-navy">Order Summary</h2>

        <div className="mt-6 flex flex-col gap-5 border-b border-navy/15 pb-5">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative size-16 shrink-0 overflow-hidden bg-ivory">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 items-start justify-between gap-3">
                <div>
                  <p className="font-serif text-sm text-navy">{item.name}</p>
                  <p className="mt-1 font-sans text-[10px] tracking-[0.08em] text-navy/50 uppercase">
                    {item.metal} · {item.specs[0]} · {item.specs[1]}
                  </p>
                  <p className="mt-0.5 font-sans text-[10px] tracking-[0.08em] text-navy/50 uppercase">
                    Ring Size {item.size} · Qty {item.quantity}
                  </p>
                </div>
                <p className="shrink-0 font-sans text-sm text-navy">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <dl className="mt-5 flex flex-col gap-3 border-b border-navy/15 pb-5">
          <div className="flex items-center justify-between font-sans text-sm text-navy/70">
            <dt>Subtotal</dt>
            <dd>{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex items-center justify-between font-sans text-sm text-navy/70">
            <dt>Shipping</dt>
            <dd>{shippingCost === 0 ? "Free" : formatPrice(shippingCost)}</dd>
          </div>
          {discount > 0 && (
            <div className="flex items-center justify-between font-sans text-sm text-gold">
              <dt>Bank Transfer Discount (2%)</dt>
              <dd>−{formatPrice(discount)}</dd>
            </div>
          )}
        </dl>

        <div className="flex items-center justify-between pt-5">
          <span className="font-serif text-lg font-medium text-navy">
            Total
          </span>
          <span className="font-serif text-xl font-medium text-navy">
            {formatPrice(total)}
          </span>
        </div>

        <Button variant="primary" size="lg" fullWidth className="mt-6">
          Place Order
        </Button>

        <div className="mt-6 flex items-center justify-center gap-3">
          <CertificateBadge certificate="GIA" variant="outline" verbose />
          <Badge variant="outline">HRD Antwerp</Badge>
        </div>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-center font-sans text-[10px] text-navy/50">
          <Lock className="size-3 shrink-0" strokeWidth={1.5} />
          Secured with 256-bit encryption. All pieces are accompanied by
          original certification documents.
        </p>
      </div>
    </div>
  );
}
