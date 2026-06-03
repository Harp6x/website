"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Product } from "@/data/types";
import ProductCard from "@/components/ProductCard";
import {
  BRAND_LABELS,
  PRODUCT_TYPE_LABELS,
  THEME_LABELS,
  PRICE_TYPE_LABELS,
} from "@/lib/products";

type Filters = {
  brand: string | null;
  type: string | null;
  price: string | null;
  themes: string[];
  q: string;
};

const EMPTY: Filters = { brand: null, type: null, price: null, themes: [], q: "" };

export default function ProductCatalog({ products }: { products: Product[] }) {
  const [f, setF] = useState<Filters>(EMPTY);

  const brands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))),
    [products]
  );
  const types = useMemo(
    () => Array.from(new Set(products.map((p) => p.productType))),
    [products]
  );
  const prices = useMemo(
    () => Array.from(new Set(products.map((p) => p.priceType))),
    [products]
  );
  const themes = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.themes.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (f.brand && p.brand !== f.brand) return false;
      if (f.type && p.productType !== f.type) return false;
      if (f.price && p.priceType !== f.price) return false;
      if (f.themes.length && !f.themes.every((t) => p.themes.includes(t)))
        return false;
      if (f.q) {
        const hay = `${p.title} ${p.shortDescription}`.toLowerCase();
        if (!hay.includes(f.q.toLowerCase())) return false;
      }
      return true;
    });
  }, [products, f]);

  const toggleTheme = (v: string) =>
    setF((s) => ({
      ...s,
      themes: s.themes.includes(v)
        ? s.themes.filter((x) => x !== v)
        : [...s.themes, v],
    }));

  const active =
    f.brand || f.type || f.price || f.themes.length > 0 || f.q.length > 0;

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr]">
      {/* Filter sidebar */}
      <aside className="space-y-7">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-faint)]" />
          <input
            type="search"
            value={f.q}
            onChange={(e) => setF((s) => ({ ...s, q: e.target.value }))}
            placeholder="Search products"
            className="w-full rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:border-[#d97706] focus:outline-none"
          />
        </div>

        <FilterGroup title="Brand">
          {brands.map((b) => (
            <Pill
              key={b}
              on={f.brand === b}
              onClick={() => setF((s) => ({ ...s, brand: s.brand === b ? null : b }))}
            >
              {BRAND_LABELS[b] ?? b}
            </Pill>
          ))}
        </FilterGroup>

        <FilterGroup title="Type">
          {types.map((t) => (
            <Pill
              key={t}
              on={f.type === t}
              onClick={() => setF((s) => ({ ...s, type: s.type === t ? null : t }))}
            >
              {PRODUCT_TYPE_LABELS[t] ?? t}
            </Pill>
          ))}
        </FilterGroup>

        <FilterGroup title="Price">
          {prices.map((p) => (
            <Pill
              key={p}
              on={f.price === p}
              onClick={() => setF((s) => ({ ...s, price: s.price === p ? null : p }))}
            >
              {PRICE_TYPE_LABELS[p] ?? p}
            </Pill>
          ))}
        </FilterGroup>

        {themes.length > 0 && (
          <FilterGroup title="Theme">
            {themes.map((t) => (
              <Pill key={t} on={f.themes.includes(t)} onClick={() => toggleTheme(t)}>
                {THEME_LABELS[t] ?? t}
              </Pill>
            ))}
          </FilterGroup>
        )}
      </aside>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[var(--text-muted)]">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>
          {active && (
            <button
              type="button"
              onClick={() => setF(EMPTY)}
              className="inline-flex items-center gap-1 text-sm font-medium text-[#d97706] hover:text-[var(--accent-soft)]"
            >
              <X className="h-4 w-4" /> Clear filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-[var(--text-muted)]">
            Nothing matches these filters. Try clearing some.
          </p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} variant="professional" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Pill({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-sm font-medium border transition-colors ${
        on
          ? "bg-[#d97706] text-white border-[#d97706]"
          : "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[#d97706]"
      }`}
    >
      {children}
    </button>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
