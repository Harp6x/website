import { notFound } from "next/navigation";
import { fetchVenture, fetchVentures, fetchProfile } from "@/lib/cms";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const revalidate = 60;

export async function generateStaticParams() {
  const ventures = await fetchVentures();
  return ventures.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venture = await fetchVenture(slug);
  if (!venture) return { title: "Venture Not Found" };
  return {
    title: `${venture.title} — Uddip Ranjan Das`,
    description: venture.tagline,
  };
}

export default async function VentureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [venture, profile] = await Promise.all([
    fetchVenture(slug),
    fetchProfile(),
  ]);

  if (!venture) notFound();

  return (
    <div className="personal-warm">
      <Navbar variant="personal" profile={profile} />
      <main className="pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/personal#ventures"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--personal-accent)] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Back to ventures
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="font-serif-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
                {venture.title}
              </h1>
              {venture.url && (
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--personal-accent)] hover:scale-110 transition-transform"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="text-[var(--text-secondary)] text-lg mb-2">{venture.tagline}</p>
            <p className="font-mono text-[11px] text-[var(--text-faint)] tracking-wider uppercase">
              {venture.role} · {venture.status}
            </p>
          </div>

          {/* Philosophy */}
          {venture.philosophy && (
            <div className="warm-card p-6 md:p-8 mb-8">
              <p className="font-mono text-[10px] text-[var(--personal-accent)] tracking-[0.2em] uppercase mb-3">
                Thinking
              </p>
              <p className="text-[var(--text-secondary)] text-base leading-[1.8] italic font-serif-heading">
                {venture.philosophy}
              </p>
            </div>
          )}

          {/* Highlights */}
          {venture.highlights.length > 0 && (
            <div className="mb-8">
              <h2 className="font-mono text-[11px] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-4">
                Key Highlights
              </h2>
              <ul className="space-y-2">
                {venture.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                    <span className="text-[var(--personal-accent)] mt-1">→</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {venture.techStack.length > 0 && (
            <div className="mb-8">
              <h2 className="font-mono text-[11px] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {venture.techStack.map((t) => (
                  <span key={t} className="text-xs font-mono text-[var(--text-secondary)] px-3 py-1 rounded-full border border-[var(--personal-border-subtle)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer profile={profile} />
    </div>
  );
}
