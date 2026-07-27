"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { MOCK_PRODUCTS } from "@/lib/mock-data";

const POPULAR = ["Engagement Rings", "Oval Cut", "Yellow Gold", "Under $5,000"];

export function SearchView() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedQuery(query.trim());
  };

  const results = submittedQuery
    ? MOCK_PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(submittedQuery.toLowerCase()),
      )
    : null;

  return (
    <div className="mx-auto max-w-xl px-5 py-16 sm:px-8">
      <form onSubmit={handleSubmit} className="relative">
        <Search
          className="pointer-events-none absolute top-1/2 left-0 size-5 -translate-y-1/2 text-navy/40"
          strokeWidth={1.5}
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for rings, earrings, necklaces…"
          autoFocus
          className="h-14 w-full border-0 border-b border-navy/20 bg-transparent pl-8 font-serif text-2xl text-navy placeholder:text-navy/30 focus:border-gold focus:outline-none"
        />
      </form>

      {results === null ? (
        <div className="mt-10">
          <p className="font-sans text-[10px] tracking-[0.16em] text-navy/50 uppercase">
            Popular Searches
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {POPULAR.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term);
                  setSubmittedQuery(term);
                }}
                className="border border-navy/20 px-4 py-2 font-sans text-xs text-navy transition-colors hover:border-gold hover:text-gold"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      ) : results.length === 0 ? (
        <p className="mt-10 font-sans text-sm text-navy/60">
          No results for &ldquo;{submittedQuery}&rdquo;. Try browsing our{" "}
          <Link
            href="/collections"
            className="text-gold underline underline-offset-2 hover:text-navy"
          >
            full collection
          </Link>
          .
        </p>
      ) : (
        <div className="mt-10 flex flex-col gap-4">
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="flex items-center justify-between border-b border-navy/10 py-3 font-sans text-sm text-navy hover:text-gold"
            >
              {product.name}
              <span className="text-navy/40">{product.specs?.join(" · ")}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
