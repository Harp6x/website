"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { Product } from "@/data/types";
import {
  BRAND_LABELS,
  PRODUCT_TYPE_LABELS,
  PRICE_TYPE_LABELS,
  getProductCta,
} from "@/lib/products";

interface Props {
  product: Product;
  variant?: "professional" | "personal";
}

export default function ProductCard({ product, variant = "professional" }: Props) {
  const cta = getProductCta(product);
  const isPersonal = variant === "personal";

  const accent = isPersonal ? "var(--personal-accent)" : "#d97706";
  const cardClass = isPersonal
    ? "warm-card"
    : "bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-lg hover:border-[var(--border)] transition-all duration-500";
  const borderSubtle = isPersonal
    ? "var(--personal-border-subtle)"
    : "var(--border-subtle)";

  return (
    <div className={`group flex flex-col h-full p-7 ${cardClass}`}>
      {/* Cover (only if provided) */}
      {product.coverImage && (
        <div className="relative aspect-[16/9] -mx-7 -mt-7 mb-6 overflow-hidden rounded-t-lg bg-black/5">
          <Image
            src={product.coverImage}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Eyebrow: brand + type */}
      <div className="flex items-center gap-2 mb-3 text-[10px] font-mono uppercase tracking-[0.2em]">
        <span style={{ color: accent }}>{BRAND_LABELS[product.brand] ?? product.brand}</span>
        <span className="text-[var(--text-faint)]">·</span>
        <span className="text-[var(--text-muted)]">
          {PRODUCT_TYPE_LABELS[product.productType] ?? product.productType}
        </span>
      </div>

      <h3
        className={`${
          isPersonal ? "font-serif-heading" : ""
        } text-xl font-semibold text-[var(--text-primary)] mb-2 leading-snug`}
      >
        {product.title}
      </h3>

      {product.format && (
        <p className="text-[11px] font-mono text-[var(--text-faint)] mb-3">
          {product.format}
        </p>
      )}

      <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-6 flex-1">
        {product.shortDescription}
      </p>

      {/* Footer: price badge + CTA */}
      <div
        className="flex items-center justify-between gap-3 pt-4 mt-auto border-t"
        style={{ borderColor: borderSubtle }}
      >
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] font-mono uppercase tracking-[0.15em] px-2 py-1 rounded-full border"
            style={{ borderColor: borderSubtle, color: "var(--text-muted)" }}
          >
            {PRICE_TYPE_LABELS[product.priceType] ?? product.priceType}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Learn More
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          {cta.disabled ? (
            <span className="text-sm font-medium text-[var(--text-faint)]">
              {cta.label}
            </span>
          ) : (
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all"
              style={{ color: accent }}
            >
              {cta.label}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
