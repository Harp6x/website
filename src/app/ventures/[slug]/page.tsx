import { notFound } from "next/navigation";
import { fetchVenture, fetchVentures, fetchProfile } from "@/lib/cms";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const revalidate = 60;

const VENTURE_STORIES: Record<string, { story: string[]; learned: string[]; statusDetail: string }> = {
  "before-maps": {
    story: [
      "Before Maps started because I was tired of cookie-cutter travel. Every \"hidden gem\" list was the same ten places. I wanted to build something where every route was personally scouted, every recommendation was earned by being there.",
      "I built the entire platform from scratch: Next.js frontend, Sanity CMS for content, Vercel for deployment, and a booking pipeline that handles the full customer journey. Then I went and actually walked the routes. Himalayas, Northeast India, Western Ghats. If I haven't been there, it doesn't go on the site.",
      "The company runs scouted, small-group journeys across India. No luxury resorts, no Instagram traps. Just honest places, good people, and experiences that actually change how you see things.",
    ],
    learned: [
      "Building a travel company taught me that the product IS the experience. No amount of good marketing fixes a bad route.",
      "Running ops for physical-world logistics (vehicles, permits, weather, people) is a fundamentally different problem from shipping software. Both require systems thinking, but one involves actual mud.",
      "Content is not marketing. Good content is the product itself. The scouting logs and travel guides are as valuable as the journeys.",
    ],
    statusDetail: "Actively running journeys and building the digital product line. Currently scouting new routes in Ladakh and Meghalaya for the 2025 season.",
  },
  hobie: {
    story: [
      "Hobie started as a personal frustration. I have too many hobbies and no way to track progress across all of them. Every app was either too rigid (designed for one sport) or too vague (just a notes app).",
      "So I built a cozy hobby-tracking studio. Roadmaps that break big goals into quests, focus timers that make deep work feel like a game, and progress visualization that makes casual interest feel like real growth.",
      "The whole thing was vibe-coded with Claude Code and Windsurf. React 19, TypeScript, Supabase for the backend, Tailwind v4 for styling, PWA for offline support. Built the entire thing as a conversation between human intent and AI execution.",
    ],
    learned: [
      "PWA-first design changes how you think about state management. Everything needs to work offline, sync gracefully, and feel native.",
      "Vibe-coding is not about being lazy. It's about maintaining creative velocity. The AI handles the implementation details, I handle the product decisions.",
      "Building for yourself first is the best way to build for others. Every feature in Hobie exists because I personally needed it.",
    ],
    statusDetail: "In active development. Core features shipped, deployed at hobie-deploy.vercel.app. Building out the quest system and social features next.",
  },
  "ms-paul-therapies": {
    story: [
      "Ms Paul Therapies is a therapy and wellness platform I co-founded with a clinical psychologist. The mental health space in India is full of outdated websites and broken booking flows. We wanted to build something that felt modern, trustworthy, and actually worked.",
      "I built the entire tech stack: Next.js with App Router, Sanity CMS for content management, a booking pipeline with payment integrations (Razorpay + UPI), email automation with ConvertKit, and a CMS-driven blog and workshop system.",
      "The brand identity, product design, and digital operations were all designed from scratch. Every piece of text on the site is editable from the CMS. The therapist focuses on therapy, I handle everything else.",
    ],
    learned: [
      "Healthcare platforms have unique trust requirements. Every word, every color, every interaction needs to communicate safety and professionalism.",
      "Building for a non-technical co-founder means the CMS experience matters as much as the user-facing site. If they can't update content independently, you've failed.",
      "Payment integrations in India are their own challenge. UPI, Razorpay, QR codes, each payment method has its own flow and failure modes.",
    ],
    statusDetail: "Live and serving clients. Actively iterating on the booking experience and expanding the workshop catalog.",
  },
};

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

  const extra = VENTURE_STORIES[slug];

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

          {/* Visit CTA */}
          {venture.url && (
            <a
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 mb-10 text-sm font-medium bg-[var(--personal-accent)] text-white rounded-full hover:opacity-90 transition-opacity"
            >
              Visit {venture.title} <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {/* Philosophy */}
          {venture.philosophy && (
            <div className="warm-card p-6 md:p-8 mb-10">
              <p className="font-mono text-[10px] text-[var(--personal-accent)] tracking-[0.2em] uppercase mb-3">
                Thinking
              </p>
              <p className="text-[var(--text-secondary)] text-base leading-[1.8] italic font-serif-heading">
                {venture.philosophy}
              </p>
            </div>
          )}

          {/* The Story */}
          {extra?.story && (
            <div className="mb-10">
              <h2 className="font-mono text-[11px] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-5">
                The Story
              </h2>
              <div className="space-y-4">
                {extra.story.map((p, i) => (
                  <p key={i} className="text-[var(--text-secondary)] text-base leading-[1.8]">{p}</p>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {venture.highlights.length > 0 && (
            <div className="mb-10">
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

          {/* What I Learned */}
          {extra?.learned && (
            <div className="mb-10">
              <h2 className="font-mono text-[11px] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-5">
                What I Learned
              </h2>
              <div className="space-y-4">
                {extra.learned.map((p, i) => (
                  <p key={i} className="text-[var(--text-secondary)] text-base leading-[1.8]">{p}</p>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {venture.techStack.length > 0 && (
            <div className="mb-10">
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

          {/* Current Status */}
          {extra?.statusDetail && (
            <div className="warm-card p-6 md:p-8 mb-10">
              <p className="font-mono text-[10px] text-[var(--personal-accent)] tracking-[0.2em] uppercase mb-3">
                Current Status
              </p>
              <p className="text-[var(--text-secondary)] text-base leading-[1.8]">
                {extra.statusDetail}
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer profile={profile} />
    </div>
  );
}
