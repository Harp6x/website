"use client";

import AnimatedSection from "./AnimatedSection";
import videos from "@/data/youtube";
import { SiYoutube } from "react-icons/si";

export default function YouTube() {
  return (
    <section id="youtube" className="section-padding px-6 md:px-10 ambient-glow">
      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-6">
            Archive
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Long-form visual stories.
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mb-6 leading-relaxed">
            Not content for algorithms. A long-term archive of experiences,
            growth, experimentation, and storytelling. travel films, trekking
            documentaries, vehicle builds, and philosophy-driven reflections.
          </p>
          <p className="text-[var(--text-faint)] text-sm font-mono italic mb-16">
            The behind-the-scenes of becoming.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, i) => (
            <AnimatedSection key={video.title} delay={i * 0.08}>
              <div className="group glass rounded-lg overflow-hidden hover:border-[#d97706]/20 transition-all duration-500">
                {/* Thumbnail placeholder */}
                <div className="relative aspect-video bg-[var(--bg-secondary)] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--border-subtle)] to-[var(--bg-secondary)]" />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:border-[#d97706]/40 group-hover:bg-[#d97706]/5 transition-all duration-500">
                      <SiYoutube className="w-5 h-5 text-[var(--text-faint)] group-hover:text-[#d97706] transition-colors" />
                    </div>
                    <span className="text-[var(--text-faint)] text-[10px] font-mono tracking-wider">
                      {video.thumbnailPlaceholder}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <SiYoutube className="w-3 h-3 text-[var(--text-muted)]" />
                    <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="text-[var(--text-primary)] font-semibold text-sm mb-2 group-hover:text-[#d97706] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <a
            href="https://youtube.com/@harp6x"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--border)] text-[var(--text-secondary)] rounded hover:border-[#d97706]/30 hover:text-[var(--text-primary)] transition-all duration-300"
          >
            <SiYoutube className="w-4 h-4" />
            Watch on YouTube
          </a>
        </AnimatedSection>
      </div>

      <div className="divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
