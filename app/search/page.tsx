import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SearchView } from "@/components/search/SearchView";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SearchView />
      </main>
      <Footer />
    </>
  );
}
