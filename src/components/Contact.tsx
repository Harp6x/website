"use client";

import AnimatedSection from "./AnimatedSection";
import { Mail, MapPin, ArrowUpRight, Briefcase, Code2, BookOpen, Camera, Play } from "lucide-react";
import profileFallback from "@/data/profile";
import type { Profile } from "@/data/types";

interface Props {
  variant?: "professional" | "personal";
  profile?: Profile;
}

export default function Contact({ variant = "professional", profile: profileProp }: Props) {
  const profile = profileProp ?? profileFallback;
  const isPro = variant === "professional";

  return (
    <section id="contact" className="section-padding px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className={`font-mono text-[11px] tracking-[0.3em] uppercase mb-6 ${isPro ? 'text-[#d97706]' : 'text-[var(--personal-teal)]'}`}>
            Contact
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] mb-6 leading-tight ${isPro ? 'font-bold' : 'font-serif-heading font-semibold'}`}>
            {isPro ? (
              <>Let&apos;s build<br /><span className="text-[var(--text-secondary)]">something together.</span></>
            ) : (
              <>Say hello.<br /><span className="text-[var(--text-secondary)]">Or don&apos;t. Either way.</span></>
            )}
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-xl mb-16 leading-relaxed">
            {isPro
              ? "Open to conversations about product security, threat intelligence, security automation, or anything at the intersection of technology and meaningful work."
              : "Reach out through any of the brands below. or just follow along."}
          </p>
        </AnimatedSection>

        {isPro ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16">
            <AnimatedSection>
              <div className="space-y-4">
                {profile.professionalEmails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="group flex items-center gap-4 p-6 rounded-lg border border-[var(--border)] hover:border-[#d97706]/30 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[#d97706] transition-colors" />
                    <div>
                      <p className="text-[var(--text-primary)] text-sm font-medium">Email</p>
                      <p className="text-[var(--text-muted)] text-sm">{email}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--text-faint)] group-hover:text-[#d97706] ml-auto transition-colors" />
                  </a>
                ))}
                <div className="flex items-center gap-4 p-6 rounded-lg border border-[var(--border-subtle)]">
                  <MapPin className="w-5 h-5 text-[var(--text-muted)]" />
                  <div>
                    <p className="text-[var(--text-primary)] text-sm font-medium">Location</p>
                    <p className="text-[var(--text-muted)] text-sm">{profile.location}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--text-muted)] text-sm mb-6">Find me elsewhere</p>
                {profile.socials.map(({ label, href }) => {
                  const Icon = label === "LinkedIn" ? Briefcase : label === "GitHub" ? Code2 : label === "YouTube" ? Play : BookOpen;
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 py-4 border-b border-[var(--border-subtle)] hover:border-[var(--border)] transition-all"
                    >
                      <Icon className="w-4 h-4 text-[var(--text-faint)] group-hover:text-[#d97706] transition-colors" />
                      <span className="text-[var(--text-secondary)] text-sm group-hover:text-[var(--text-primary)] transition-colors">
                        {label}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[var(--text-faint)] group-hover:text-[#d97706] ml-auto transition-colors" />
                    </a>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(profile.personalBrands).map(([brand, links], i) => (
              <AnimatedSection key={brand} delay={i * 0.08}>
                <div className="warm-card p-8">
                  <h3 className="font-serif-heading text-lg font-semibold text-[var(--personal-accent)] mb-6">
                    {brand === "theregoesuddip" ? "There Goes Uddip" : brand === "harp6x" ? "Harp6x" : "Jimny Runs"}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {links.instagram && (
                      <a href={links.instagram} target="_blank" rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--personal-border-subtle)] text-[var(--text-secondary)] text-sm hover:border-[var(--personal-accent)]/30 hover:text-[var(--text-primary)] transition-all">
                        <Camera className="w-4 h-4" /> Instagram <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )}
                    {links.youtube && (
                      <a href={links.youtube} target="_blank" rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--personal-border-subtle)] text-[var(--text-secondary)] text-sm hover:border-[var(--personal-accent)]/30 hover:text-[var(--text-primary)] transition-all">
                        <Play className="w-4 h-4" /> YouTube <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )}
                    {links.substack && (
                      <a href={links.substack} target="_blank" rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--personal-border-subtle)] text-[var(--text-secondary)] text-sm hover:border-[var(--personal-accent)]/30 hover:text-[var(--text-primary)] transition-all">
                        <BookOpen className="w-4 h-4" /> Substack <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )}
                    {links.email && (
                      <a href={`mailto:${links.email}`}
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--personal-accent)]/20 text-[var(--text-secondary)] text-sm hover:border-[var(--personal-accent)]/40 hover:text-[var(--text-primary)] transition-all">
                        <Mail className="w-4 h-4" /> {links.email} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
