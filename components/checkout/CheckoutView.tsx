"use client";

import { useState } from "react";
import { CheckoutSummary } from "@/components/checkout/CheckoutSummary";
import { ContactSection } from "@/components/checkout/ContactSection";
import {
  DELIVERY_PRICES,
  DeliveryMethodSection,
  type DeliveryMethod,
} from "@/components/checkout/DeliveryMethodSection";
import { OrderNotesSection } from "@/components/checkout/OrderNotesSection";
import {
  PaymentSection,
  type PaymentMethod,
} from "@/components/checkout/PaymentSection";
import { ShippingSection } from "@/components/checkout/ShippingSection";
import { MOCK_CART_ITEMS } from "@/lib/cart-data";

const BANK_TRANSFER_DISCOUNT_RATE = 0.02;

export function CheckoutView() {
  const [deliveryMethod, setDeliveryMethod] =
    useState<DeliveryMethod>("white-glove");
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("bank-transfer");

  const items = MOCK_CART_ITEMS;
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shippingCost = DELIVERY_PRICES[deliveryMethod];
  const discount =
    paymentMethod === "bank-transfer"
      ? Math.round(subtotal * BANK_TRANSFER_DISCOUNT_RATE)
      : 0;

  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_400px] lg:px-12 lg:py-16">
      <div>
        <CheckoutSummary
          items={items}
          subtotal={subtotal}
          shippingCost={shippingCost}
          discount={discount}
          className="mb-10 lg:hidden"
        />

        <ContactSection />
        <ShippingSection />
        <DeliveryMethodSection
          value={deliveryMethod}
          onChange={setDeliveryMethod}
        />
        <PaymentSection value={paymentMethod} onChange={setPaymentMethod} />
        <OrderNotesSection />
      </div>

      <CheckoutSummary
        items={items}
        subtotal={subtotal}
        shippingCost={shippingCost}
        discount={discount}
        className="hidden lg:block lg:sticky lg:top-10 lg:self-start"
      />
    </div>
  );
}
