import { getBlogPost, getBlogPosts } from "@/sanity/queries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return posts.map((post) => ({ slug: post.slug.current }));
  } catch {
    return [];
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getBlogPost(slug);
  } catch {
    notFound();
  }

  if (!post) notFound();

  return (
    <div className="grain">
      <Navbar variant="personal" />
      <main className="pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <Link
              href="/personal#journal"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#d97706] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Journal
            </Link>

            {post.category && (
              <div className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-4">
                {post.category}
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
              {post.title}
            </h1>

            {post.publishedAt && (
              <p className="text-[var(--text-muted)] text-sm font-mono mb-12">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}

            {post.excerpt && (
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-12 border-l-2 border-[#d97706]/30 pl-6">
                {post.excerpt}
              </p>
            )}

            {/* Rich text body — render blocks */}
            {post.body && (
              <div className="prose prose-invert max-w-none text-[var(--text-secondary)] leading-relaxed space-y-6">
                {(post.body as Array<{ _type: string; children?: Array<{ text: string }> }>).map(
                  (block, i) => {
                    if (block._type === "block" && block.children) {
                      const text = block.children.map((c) => c.text).join("");
                      return (
                        <p key={i} className="text-[var(--text-secondary)] leading-relaxed">
                          {text}
                        </p>
                      );
                    }
                    return null;
                  }
                )}
              </div>
            )}
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
