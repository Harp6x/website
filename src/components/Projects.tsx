"use client";

import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";
import projectsFallback from "@/data/projects";
import type { Project } from "@/data/types";

interface Props {
  projects?: Project[];
}

export default function Projects({ projects: projectsProp }: Props) {
  const projects = projectsProp ?? projectsFallback;
  return (
    <section id="projects" className="section-padding px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-6">
            Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Selected projects.
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-xl mb-10">
            Things I&apos;ve built, led, or am building. where the thinking matters
            as much as the outcome.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group p-8 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border)] transition-all duration-500">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="font-mono text-[10px] text-[#d97706] tracking-[0.2em] uppercase">
                      {p.category}
                    </span>
                    <h3 className="text-[var(--text-primary)] text-2xl font-semibold mt-1 flex items-center gap-2">
                      {p.title}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--text-muted)] hover:text-[#d97706] transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </h3>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-3">
                  {p.description}
                </p>

                <p className="text-[var(--text-muted)] text-base italic leading-relaxed mb-5">
                  &ldquo;{p.thinking}&rdquo;
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] font-mono text-[var(--text-muted)] rounded border border-[var(--border-subtle)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
