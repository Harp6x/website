import { getProfile, getExperiences, getProjects, getSkills, getBeyondWork, getPhilosophies, getJournalTopics, getPersonalAbout, getLifePillars } from "@/sanity/queries";
import type { SanityProfile, SanityExperience, SanityProject, SanitySkills, SanityBeyondWork, SanityPhilosophy, SanityJournalTopic, SanityPersonalAbout, SanityLifePillar } from "@/sanity/queries";
import type { Profile, Chapter, Project, Skills, LifeSection, JournalTopic } from "@/data/types";

import profileFallback from "@/data/profile";
import experienceFallback from "@/data/experience";
import projectsFallback from "@/data/projects";
import skillsFallback from "@/data/skills";
import beyondFallback from "@/data/beyond";
import journalFallback from "@/data/journal";

function safe<T>(fn: () => Promise<T>): Promise<T | null> {
  return fn().catch(() => null);
}

export async function fetchProfile(): Promise<Profile> {
  const cms = await safe(getProfile);
  if (!cms) return profileFallback;

  const personalBrands: Record<string, { instagram?: string; youtube?: string; substack?: string; email?: string }> = {};
  if (cms.personalBrands) {
    for (const b of cms.personalBrands) {
      personalBrands[b.key] = { instagram: b.instagram, youtube: b.youtube, substack: b.substack, email: b.email };
    }
  }

  return {
    ...profileFallback,
    name: cms.name ?? profileFallback.name,
    handle: cms.handle ?? profileFallback.handle,
    email: cms.email ?? profileFallback.email,
    location: cms.location ?? profileFallback.location,
    currentRole: cms.currentRole ?? profileFallback.currentRole,
    currentCompany: cms.currentCompany ?? profileFallback.currentCompany,
    focus: cms.focus ?? profileFallback.focus,
    tagline: cms.tagline ?? profileFallback.tagline,
    subtitleLine1: cms.subtitleLine1 ?? profileFallback.subtitleLine1,
    subtitleLine2: cms.subtitleLine2 ?? profileFallback.subtitleLine2,
    heroKeywords: cms.heroKeywords ?? profileFallback.heroKeywords,
    bio: cms.bio?.length ? cms.bio : profileFallback.bio,
    bioClosing: cms.bioClosing ?? profileFallback.bioClosing,
    stats: cms.stats?.length ? cms.stats : profileFallback.stats,
    socials: cms.socials?.length ? cms.socials : profileFallback.socials,
    professionalEmails: cms.professionalEmails?.length ? cms.professionalEmails : profileFallback.professionalEmails,
    personalBrands: Object.keys(personalBrands).length ? personalBrands : profileFallback.personalBrands,
    resumePath: cms.resumePath ?? profileFallback.resumePath,
  };
}

export async function fetchExperiences(): Promise<Chapter[]> {
  const cms = await safe(getExperiences);
  if (!cms?.length) return experienceFallback;
  return cms.map((e: SanityExperience) => ({
    era: e.era ?? "",
    title: e.title,
    company: e.company,
    period: e.period ?? "",
    narrative: e.narrative ?? "",
    highlights: e.highlights ?? [],
    current: e.current,
  }));
}

export async function fetchProjects(): Promise<Project[]> {
  const cms = await safe(getProjects);
  if (!cms?.length) return projectsFallback;
  return cms.map((p: SanityProject) => ({
    title: p.title,
    category: p.category ?? "",
    description: p.description ?? "",
    thinking: p.thinking ?? "",
    tags: p.tags ?? [],
    link: p.link,
  }));
}

export async function fetchSkills(): Promise<Skills> {
  const cms = await safe(getSkills);
  if (!cms) return skillsFallback;
  return {
    technical: cms.technical?.length ? cms.technical : skillsFallback.technical,
    soft: cms.soft?.length ? cms.soft : skillsFallback.soft,
    tools: cms.tools?.length ? cms.tools : skillsFallback.tools,
    credentials: cms.credentials?.length ? cms.credentials : skillsFallback.credentials,
  };
}

export async function fetchBeyondWork(): Promise<LifeSection[]> {
  const cms = await safe(getBeyondWork);
  if (!cms?.length) return beyondFallback;
  return cms.map((b: SanityBeyondWork) => ({
    emoji: b.emoji ?? "🧭",
    title: b.title,
    subtitle: b.subtitle ?? "",
    body: b.body ?? [],
    mood: b.mood ?? "",
  }));
}

export async function fetchPhilosophies(): Promise<{ title: string; summary: string; tags: string[] }[]> {
  const cms = await safe(getPhilosophies);
  if (!cms?.length) return [];
  return cms.map((p: SanityPhilosophy) => ({
    title: p.title,
    summary: p.summary ?? "",
    tags: p.tags ?? [],
  }));
}

export async function fetchJournalTopics(): Promise<JournalTopic[]> {
  const cms = await safe(getJournalTopics);
  if (!cms?.length) return journalFallback;
  return cms.map((j: SanityJournalTopic) => ({
    title: j.title,
    preview: j.preview ?? "",
    category: j.category ?? "",
    substackUrl: j.substackUrl,
  }));
}

export async function fetchPersonalAbout(): Promise<SanityPersonalAbout | null> {
  return safe(getPersonalAbout);
}

export async function fetchLifePillars(): Promise<{ brand: string; key: string; theme: string; description: string; contentPillars: string[] }[]> {
  const cms = await safe(getLifePillars);
  if (!cms?.length) return [];
  return cms.map((l: SanityLifePillar) => ({
    brand: l.brand,
    key: l.key,
    theme: l.theme ?? "",
    description: l.description ?? "",
    contentPillars: l.contentPillars ?? [],
  }));
}
