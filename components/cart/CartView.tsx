"use client";

import { useState } from "react";
import Link from "next/link";
import { CartLineItemRow } from "@/components/cart/CartLineItemRow";
import { GiftOptions } from "@/components/cart/GiftOptions";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { Button } from "@/components/ui/Button";
import { MOCK_CART_ITEMS } from "@/lib/cart-data";

export function CartView() {
  const [items, setItems] = useState(MOCK_CART_ITEMS);

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-md px-5 py-24 text-center sm:px-8">
        <h1 className="font-serif text-3xl text-navy">Your Bag is Empty</h1>
        <p className="mt-3 font-sans text-sm text-navy/60">
          Discover a piece worth carrying home.
        </p>
        <Button href="/collections" variant="primary" size="md" className="mt-8">
          Explore Collections
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
      <header>
        <h1 className="font-serif text-4xl text-navy sm:text-5xl">
          Your Bag
        </h1>
        <p className="mt-2 font-sans text-[11px] tracking-[0.14em] text-navy/50 uppercase">
          {items.length} {items.length === 1 ? "Item" : "Items"} in Your
          Selection
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:gap-12">
        <div>
          <div>
            {items.map((item) => (
              <CartLineItemRow
                key={item.id}
                item={item}
                onQuantityChange={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>

          <div className="mt-8">
            <GiftOptions />
          </div>

          <Link
            href="/collections"
            className="mt-6 inline-block font-sans text-xs text-navy/60 underline underline-offset-2 hover:text-gold"
          >
            ← Continue Shopping
          </Link>
        </div>

        <OrderSummary subtotal={subtotal} className="lg:sticky lg:top-24 lg:self-start" />
      </div>
    </div>
  );
}
