import { Heart } from "lucide-react";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Wishlist",
};

export default function WishlistPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-md px-5 py-24 text-center sm:px-8">
          <Heart className="mx-auto size-8 text-gold" strokeWidth={1.5} />
          <h1 className="mt-5 font-serif text-3xl text-navy">
            Your Wishlist is Empty
          </h1>
          <p className="mt-3 font-sans text-sm text-navy/60">
            Save the pieces you love and come back to them any time.
          </p>
          <Button href="/collections" variant="primary" size="md" className="mt-8">
            Explore Collections
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
