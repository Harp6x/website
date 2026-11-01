import { notFound } from "next/navigation";
import { fetchVenture, fetchVentures, fetchProfile } from "@/lib/cms";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const revalidate = 60;

const VENTURE_STORIES: Record<
  string,
  { story: string[]; learned: string[]; statusDetail: string }
> = {
  indieroam: {
    story: [
      "IndieRoam was co-founded to build one of India's leading automotive expedition companies. The self-drive overland market in India has long been polarized between rigid sightseeing tourist buses and hardcore off-road rallies with minimal hospitality. IndieRoam bridges that divide with premium self-drive expeditions, curated convoys, and end-to-end managed road experiences.",
      "As Co-Founder, I lead business strategy, product development, technology systems, expedition operations, marketing, and growth. We design each expedition with the precision of an engineering architecture: detailed route reconnaissance, multi-vehicle VHF/satellite communications, mechanical triage protocols, medical safety margins, and curated mountain stays.",
      "Having planned and executed demanding expeditions including high-altitude convoys in Ladakh, our long-term ambition is to establish a recognizable, deeply trusted overland expedition brand built on flawless execution.",
    ],
    learned: [
      "Automotive expedition operations require institutional-grade redundancy: weather margins, fuel contingencies, elevation profiles, and vehicle recovery cannot be left to chance.",
      "The traveler experience is dictated by convoy discipline. Clear radio protocols, defined roles, and calm contingency management make high-altitude travel accessible and safe.",
      "Building a premium adventure brand requires absolute operational integrity. Trust is earned on the mountain passes, not in marketing copy.",
    ],
    statusDetail:
      "Actively operating premium self-drive convoys across Ladakh and Himalayan corridors while scaling expedition technology and operations.",
  },
  "before-maps": {
    story: [
      "BeforeMaps is my independent travel venture focused on personally explored destinations, curated group departures, private trips, customized itineraries, and travel experiences across India.",
      "Rather than aggregating standard tourist destinations, every journey is born from firsthand field scouting. I personally explore remote routes, evaluate homestays, and build direct networks with local communities across the Himalayas, Northeast India, and the Western Ghats.",
      "The venture delivers bespoke travel planning, intimate departures, and customized itineraries for travelers who value authenticity, thoughtful pacing, and ground truth.",
    ],
    learned: [
      "Ground-truth exploration is irreplaceable. No amount of online research matches physically walking a route and meeting local partners.",
      "Bespoke itinerary design requires disciplined logistics: acclimatization timing, transit buffers, and local relationships define the journey's quality.",
      "Independent travel ventures succeed by earning deep trust through transparent preparation and personalized care.",
    ],
    statusDetail:
      "Curating group departures, private journeys, and custom itineraries across India based on ongoing firsthand field scouting.",
  },
  "ms-paul-therapies": {
    story: [
      "MSPaulTherapies is a modern mental health and wellness platform where I serve as Chief Technology Officer (CTO). Clinical care in India is often hindered by fragmented digital systems, clunky booking workflows, and administrative friction. We set out to build a calm, modern, and reliable digital health infrastructure.",
      "I direct technology leadership and platform architecture: built the client intake and scheduling pipeline, integrated secure payment systems, established practice automation, and built a CMS-driven platform for workshops and clinical resources.",
      "The digital infrastructure eliminates operational friction for clinicians, allowing them to focus entirely on therapy while providing clients with a seamless, private, and dependable healthcare experience.",
    ],
    learned: [
      "Healthcare digital products demand absolute clarity and privacy. Every interaction must communicate security, dignity, and calm.",
      "Technology leadership in clinical settings means building systems that empower non-technical practitioners without creating dependencies.",
      "Reliable digital systems—from automated intake to secure payment processing—are the backbone of sustainable clinical practice growth.",
    ],
    statusDetail:
      "Live platform serving clients with automated booking, payment workflows, and expanding clinical workshops.",
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
  const [venture, profile] = await Promise.all([fetchVenture(slug), fetchProfile()]);

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
                  <p key={i} className="text-[var(--text-secondary)] text-base leading-[1.8]">
                    {p}
                  </p>
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
                  <li
                    key={h}
                    className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed"
                  >
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
                  <p key={i} className="text-[var(--text-secondary)] text-base leading-[1.8]">
                    {p}
                  </p>
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
                  <span
                    key={t}
                    className="text-xs font-mono text-[var(--text-secondary)] px-3 py-1 rounded-full border border-[var(--personal-border-subtle)]"
                  >
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
