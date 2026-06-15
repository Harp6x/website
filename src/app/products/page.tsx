import Link from "next/link";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";
import { fetchProfile, fetchProducts } from "@/lib/cms";

export const revalidate = 60;

export const metadata = {
  title: "Library — Uddip Ranjan Das",
  description:
    "Systems, field guides, manuals, and tools built across Harp6x and There Goes Uddip. For builders, travellers, and people designing a more intentional life.",
};

export default async function ProductsPage() {
  const [profile, products] = await Promise.all([
    fetchProfile(),
    fetchProducts(),
  ]);

  return (
    <div className="grain">
      {/* Lightweight header */}
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
              href="/professional"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Professional
            </Link>
            <Link
              href="/personal"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Personal
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="max-w-2xl">
          <div className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-6">
            Catalog
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-5">
            The Library.
          </h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Systems, field guides, manuals, and tools built across Harp6x and
            There Goes Uddip. Filter by brand, type, theme, or price. Every
            link takes you to its page on Gumroad.
          </p>
        </div>

        {products.length === 0 ? (
          <p className="mt-16 text-[var(--text-muted)]">
            Products are coming soon.
          </p>
        ) : (
          <ProductCatalog products={products} />
        )}
      </main>

      <Footer profile={profile} />
    </div>
  );
}
