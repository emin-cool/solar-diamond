import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Your Bag",
};

export default function CartPage() {
  return (
    <>
      <Header cartCount={2} />

      <main className="flex-1">
        <CartView />
      </main>

      <Footer />
    </>
  );
}
