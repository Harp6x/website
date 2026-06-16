import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { fetchProfile, fetchSiteSettings } from "@/lib/cms";
import { getBlogPosts } from "@/sanity/queries";
import { notFound } from "next/navigation";

export const revalidate = 60;

export const metadata = {
  title: "Journal — Uddip Ranjan Das",
  description:
    "Long-form writing and reflections on cybersecurity, travel, philosophy, AI, building, and the honest process of designing a life.",
};

export default async function JournalPage() {
  const [profile, posts, settings] = await Promise.all([
    fetchProfile(),
    getBlogPosts(),
    fetchSiteSettings(),
  ]);

  if (!settings.enableBlogPage) notFound();

  return (
    <div className="personal-warm">
      <Navbar variant="personal" profile={profile} showProducts={settings.enableProductsPage} />
      <main className="pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="font-mono text-[11px] text-[var(--personal-accent)] tracking-[0.3em] uppercase mb-6">
              Journal
            </div>
            <h1 className="font-serif-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">
              Thinking out loud.
            </h1>
            <p className="text-[var(--text-muted)] text-base max-w-2xl mb-16 leading-relaxed">
              Long-form writing and reflections. Lessons from cybersecurity,
              travel journals, philosophy, systems thinking, and the honest
              process of building a life that holds up under pressure.
            </p>
          </AnimatedSection>

          {posts.length === 0 ? (
            <AnimatedSection delay={0.1}>
              <p className="text-[var(--text-muted)] text-lg">
                Posts are on the way. Check back soon.
              </p>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, i) => (
                <AnimatedSection key={post._id} delay={i * 0.04}>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="warm-card group block p-6 h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-3">
                      {post.category && (
                        <span className="text-[9px] font-mono text-[var(--personal-accent)] tracking-[0.2em] uppercase">
                          {post.category}
                        </span>
                      )}
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-faint)] group-hover:text-[var(--personal-accent)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <h2 className="font-serif-heading text-[var(--text-primary)] font-semibold text-base mb-2 group-hover:text-[var(--personal-accent)] transition-colors duration-300 leading-snug">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                    )}
                    {post.publishedAt && (
                      <span className="mt-4 text-[10px] font-mono text-[var(--text-faint)]">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    )}
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer profile={profile} />
    </div>
  );
}
