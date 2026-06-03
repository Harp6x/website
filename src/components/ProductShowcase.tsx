"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ProductCard from "./ProductCard";
import { productsForSurface } from "@/lib/products";
import type { Product } from "@/data/types";

interface Props {
  products: Product[];
  variant: "professional" | "personal";
}

const COPY = {
  professional: {
    id: "library",
    eyebrow: "Built & Shipped",
    heading: "Library.",
    intro:
      "Beyond the day job, I design and ship systems, manuals, and tools — practical things people use to work and think better. A selection below.",
    cta: "Browse the full library",
  },
  personal: {
    id: "products",
    eyebrow: "The Library",
    heading: "Products.",
    intro:
      "Field guides, systems, and essays from the things I build and the places I go — for travellers, builders, and people designing a more intentional life.",
    cta: "See all products",
  },
} as const;

export default function ProductShowcase({ products, variant }: Props) {
  const copy = COPY[variant];
  const isPersonal = variant === "personal";
  const accent = isPersonal ? "var(--personal-accent)" : "#d97706";

  const surfaceProducts = productsForSurface(products, variant);
  // Featured first, then fill — cap at 6 for the strip.
  const featured = surfaceProducts.filter((p) => p.featured);
  const rest = surfaceProducts.filter((p) => !p.featured);
  const shown = [...featured, ...rest].slice(0, 6);

  if (shown.length === 0) return null;

  return (
    <section id={copy.id} className="section-padding px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div
            className="font-mono text-[11px] tracking-[0.3em] uppercase mb-6"
            style={{ color: accent }}
          >
            {copy.eyebrow}
          </div>
          <h2
            className={`${
              isPersonal ? "font-serif-heading" : ""
            } text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4`}
          >
            {copy.heading}
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-2xl mb-10 leading-relaxed">
            {copy.intro}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p, i) => (
            <AnimatedSection key={p.id} delay={i * 0.06}>
              <ProductCard product={p} variant={variant} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              style={{ color: accent }}
            >
              {copy.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>

      <div
        className={`${
          isPersonal ? "warm-divider" : "divider"
        } max-w-5xl mx-auto mt-32`}
      />
    </section>
  );
}
