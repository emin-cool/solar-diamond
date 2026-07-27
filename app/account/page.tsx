import type { Metadata } from "next";
import { AccountView } from "@/components/account/AccountView";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Account",
};

export default function AccountPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AccountView />
      </main>
      <Footer />
    </>
  );
}
