import type { Metadata } from "next";
import { CheckoutHeader } from "@/components/checkout/CheckoutHeader";
import { CheckoutView } from "@/components/checkout/CheckoutView";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <>
      <CheckoutHeader />
      <main className="flex-1">
        <CheckoutView />
      </main>
    </>
  );
}
