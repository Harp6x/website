"use client";

import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import type { InstagramPost } from "@/lib/instagram";
import Image from "next/image";

interface Props {
  posts: InstagramPost[];
}

export default function InstagramFeed({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <section id="instagram" className="section-padding px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-6">
              Visual Feed
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              From the field.
            </h2>
            <p className="text-[var(--text-muted)] max-w-2xl mb-10 leading-relaxed">
              Follow the journey on Instagram. travel, builds, philosophy, and
              everything in between.
            </p>
            <div className="flex flex-wrap gap-4">
              {["@harp6x", "@theregoesuddip", "@jimnyruns"].map((handle) => (
                <a
                  key={handle}
                  href={`https://instagram.com/${handle.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded border border-[var(--border)] text-[var(--text-secondary)] text-sm hover:border-[#d97706]/30 hover:text-[var(--text-primary)] transition-all duration-300"
                >
                  <SiInstagram className="w-4 h-4" />
                  {handle}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
        <div className="divider max-w-5xl mx-auto mt-32" />
      </section>
    );
  }

  return (
    <section id="instagram" className="section-padding px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-6">
            Visual Feed
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            From the field.
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mb-16 leading-relaxed">
            Latest from Instagram. travel, builds, philosophy, and everything
            in between.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {posts.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 0.05}>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-lg overflow-hidden block"
              >
                {post.mediaType !== "VIDEO" ? (
                  <Image
                    src={post.mediaUrl}
                    alt={post.caption || "Instagram post"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[var(--bg-secondary)] flex items-center justify-center">
                    <SiInstagram className="w-6 h-6 text-[var(--text-faint)]" />
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end p-3">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[var(--text-primary)] text-[10px] leading-relaxed line-clamp-3">
                      {post.caption}
                    </p>
                    <p className="text-[#d97706] text-[9px] font-mono mt-1">
                      @{post.username}
                    </p>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-10 flex flex-wrap gap-4">
          {["harp6x", "theregoesuddip", "jimnyruns"].map((handle) => (
            <a
              key={handle}
              href={`https://instagram.com/${handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[#d97706] transition-colors"
            >
              <SiInstagram className="w-3 h-3" />
              @{handle}
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </AnimatedSection>
      </div>

      <div className="divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
