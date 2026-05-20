"use client";

import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";
import { SiSubstack } from "react-icons/si";
import type { SubstackPost } from "@/lib/substack";

interface Props {
  posts: SubstackPost[];
}

export default function SubstackFeed({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section id="substack" className="section-padding px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-6">
            Writing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Recent dispatches.
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mb-16 leading-relaxed">
            Latest from Substack. cybersecurity analysis, travel reflections,
            and the ongoing documentation of building something intentional.
          </p>
        </AnimatedSection>

        <div className="space-y-1">
          {posts.map((post, i) => (
            <AnimatedSection key={post.link} delay={i * 0.05}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-6 border-b border-[var(--border-subtle)] hover:border-[var(--border)] transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="hidden sm:flex items-center gap-2 min-w-[100px] pt-1">
                    <SiSubstack className="w-3 h-3 text-[var(--text-faint)]" />
                    <span className="text-[10px] font-mono text-[var(--text-faint)] tracking-wider uppercase">
                      {post.source}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[var(--text-primary)] font-semibold text-sm mb-2 group-hover:text-[#d97706] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                      {post.description}
                    </p>
                    {post.pubDate && (
                      <p className="text-[var(--text-faint)] text-xs font-mono mt-2">
                        {new Date(post.pubDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    )}
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-[#1a1a1a] group-hover:text-[#d97706] mt-1 shrink-0 transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
