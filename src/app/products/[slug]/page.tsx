import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Package, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import { fetchProfile, fetchProducts } from "@/lib/cms";
import { getProductDetailBySlug } from "@/data/product-details";
import type { Product } from "@/data/types";

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await fetchProducts();
  return products.map((p: Product) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const products = await fetchProducts();
  const product = products.find((p: Product) => p.slug === slug);
  const detail = getProductDetailBySlug(slug);

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} — Uddip Ranjan Das`,
    description: detail?.headline || product.shortDescription,
    keywords: detail?.seoKeywords,
    openGraph: {
      title: `${product.title} — Uddip Ranjan Das`,
      description: detail?.headline || product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [profile, products] = await Promise.all([
    fetchProfile(),
    fetchProducts(),
  ]);

  const product = products.find((p: Product) => p.slug === slug);
  if (!product) notFound();

  const detail = getProductDetailBySlug(slug);

  const brandLabel =
    product.brand === "harp6x"
      ? "Harp6x"
      : product.brand === "tgu"
        ? "There Goes Uddip"
        : "Harp6x × There Goes Uddip";

  return (
    <div className="grain">
      {/* Header */}
      <header className="border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm tracking-[0.2em] text-[var(--text-primary)] hover:text-[#d97706] transition-colors"
          >
            {profile.name}
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/products"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Library
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#d97706] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Library
        </Link>

        {/* Hero */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase">
              {brandLabel}
            </span>
            <span className="text-[var(--border-subtle)]">·</span>
            <span className="font-mono text-[11px] text-[var(--text-muted)] tracking-[0.2em] uppercase">
              {product.format || product.productType}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-6">
            {detail?.headline || product.title}
          </h1>

          {detail?.subheadline && (
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              {detail.subheadline}
            </p>
          )}

          {/* Price + CTA */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            {product.price && (
              <span className="text-2xl font-bold text-[var(--text-primary)]">
                {product.price}
              </span>
            )}
            {product.gumroadUrl && (
              <a
                href={product.gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#d97706] text-white font-medium rounded-lg hover:bg-[#b45309] transition-colors"
              >
                {product.ctaLabel || "Get This Product"}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {product.priceType === "coming-soon" && (
              <span className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-subtle)] text-[var(--text-muted)] font-medium rounded-lg">
                Coming Soon
              </span>
            )}
          </div>
        </section>

        {/* Problem */}
        {detail?.problem && (
          <section className="mb-20">
            <h2 className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-6">
              The Problem
            </h2>
            <div className="border-l-2 border-[#d97706]/30 pl-6 md:pl-8">
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                {detail.problem}
              </p>
            </div>
          </section>
        )}

        {/* What's Included */}
        {detail?.whatsIncluded && detail.whatsIncluded.length > 0 && (
          <section className="mb-20">
            <h2 className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-8">
              {"What's Inside"}
            </h2>
            <div className="grid gap-6">
              {detail.whatsIncluded.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-lg border border-[var(--border-subtle)] hover:border-[#d97706]/30 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#d97706] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing Pitch */}
        {detail?.closingPitch && (
          <section className="mb-20">
            <div className="bg-[var(--border-subtle)]/10 border border-[var(--border-subtle)] rounded-lg p-8 text-center">
              <Package className="w-8 h-8 text-[#d97706] mx-auto mb-4" />
              <p className="text-[var(--text-secondary)] text-lg">
                {detail.closingPitch}
              </p>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="text-center py-12 border-t border-[var(--border-subtle)]">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {product.price && (
              <span className="text-xl font-bold text-[var(--text-primary)]">
                {product.price}
              </span>
            )}
            {product.gumroadUrl && (
              <a
                href={product.gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#d97706] text-white font-medium rounded-lg hover:bg-[#b45309] transition-colors"
              >
                {product.ctaLabel || "Get This Product"}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#d97706] transition-colors mt-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Library
          </Link>
        </section>
      </main>

      <Footer profile={profile} />
    </div>
  );
}
