import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CartLineItem } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

export interface CartLineItemRowProps {
  item: CartLineItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartLineItemRow({
  item,
  onQuantityChange,
  onRemove,
}: CartLineItemRowProps) {
  return (
    <div className="flex gap-5 border-b border-navy/10 py-6 first:pt-0 last:border-b-0">
      <Link
        href={`/products/${item.productSlug}`}
        className="relative size-28 shrink-0 overflow-hidden bg-champagne/25 sm:size-36"
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="144px"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link
              href={`/products/${item.productSlug}`}
              className="font-serif text-lg text-navy transition-colors hover:text-gold sm:text-xl"
            >
              {item.name}
            </Link>
            <p className="mt-1 font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase">
              {item.specs.join(" · ")}
            </p>
          </div>
          <p className="shrink-0 font-serif text-lg text-gold">
            {formatPrice(item.price, item.currency)}
          </p>
        </div>

        <div className="mt-3 font-sans text-sm text-navy/70">
          <p>Metal: {item.metal}</p>
          <p>Size: {item.size}</p>
          {item.engraving && (
            <p className="italic">Engraved: &ldquo;{item.engraving}&rdquo;</p>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-center border border-navy/20">
            <button
              type="button"
              onClick={() =>
                onQuantityChange(item.id, Math.max(1, item.quantity - 1))
              }
              aria-label="Decrease quantity"
              className="flex size-9 items-center justify-center text-navy transition-colors hover:text-gold disabled:opacity-30"
              disabled={item.quantity <= 1}
            >
              <Minus className="size-3.5" strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center font-sans text-sm text-navy">
              {String(item.quantity).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
              className="flex size-9 items-center justify-center text-navy transition-colors hover:text-gold"
            >
              <Plus className="size-3.5" strokeWidth={1.5} />
            </button>
          </div>

          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="font-sans text-xs text-navy/60 underline underline-offset-2 hover:text-gold"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
