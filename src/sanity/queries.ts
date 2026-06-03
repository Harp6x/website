import { client } from "./client";

// ─── Blog ───
export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: { asset: { _ref: string } };
}

export async function getBlogPosts(): Promise<SanityBlogPost[]> {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) [0...20] {
      _id, title, slug, category, excerpt, publishedAt, coverImage
    }`
  );
}

export async function getBlogPost(slug: string): Promise<SanityBlogPost & { body: unknown[] }> {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id, title, slug, category, excerpt, publishedAt, coverImage, body
    }`,
    { slug }
  );
}

// ─── Profile ───
export interface SanityProfile {
  name?: string;
  handle?: string;
  email?: string;
  location?: string;
  currentRole?: string;
  currentCompany?: string;
  focus?: string;
  tagline?: string;
  subtitleLine1?: string;
  subtitleLine2?: string;
  heroKeywords?: string;
  landingIntro?: string;
  bio?: string[];
  bioClosing?: string;
  stats?: { label: string; value: string }[];
  socials?: { label: string; href: string }[];
  professionalEmails?: string[];
  personalBrands?: { key: string; instagram?: string; youtube?: string; substack?: string; email?: string }[];
  professionalResumeUrl?: string;
  personalResumeUrl?: string;
}

export async function getProfile(): Promise<SanityProfile | null> {
  return client.fetch(`*[_type == "profile"][0] {
    ...,
    "professionalResumeUrl": professionalResume.asset->url,
    "personalResumeUrl": personalResume.asset->url
  }`);
}

// ─── Experience ───
export interface SanityExperience {
  _id: string;
  era?: string;
  title: string;
  company: string;
  period?: string;
  narrative?: string;
  highlights?: string[];
  current?: boolean;
  order?: number;
}

export async function getExperiences(): Promise<SanityExperience[]> {
  return client.fetch(`*[_type == "experience"] | order(order asc)`);
}

// ─── Project ───
export interface SanityProject {
  _id: string;
  title: string;
  category?: string;
  description?: string;
  thinking?: string;
  tags?: string[];
  link?: string;
  order?: number;
}

export async function getProjects(): Promise<SanityProject[]> {
  return client.fetch(`*[_type == "project"] | order(order asc)`);
}

// ─── Skills ───
export interface SanitySkills {
  technical?: string[];
  soft?: string[];
  tools?: string[];
  credentials?: { cert: string; org: string }[];
}

export async function getSkills(): Promise<SanitySkills | null> {
  return client.fetch(`*[_type == "skill"][0]`);
}

// ─── Beyond Work ───
export interface SanityBeyondWork {
  _id: string;
  emoji?: string;
  title: string;
  subtitle?: string;
  body?: string[];
  mood?: string;
  order?: number;
}

export async function getBeyondWork(): Promise<SanityBeyondWork[]> {
  return client.fetch(`*[_type == "beyondWork"] | order(order asc)`);
}

// ─── Philosophy ───
export interface SanityPhilosophy {
  _id: string;
  title: string;
  summary?: string;
  tags?: string[];
  order?: number;
}

export async function getPhilosophies(): Promise<SanityPhilosophy[]> {
  return client.fetch(`*[_type == "philosophy"] | order(order asc)`);
}

// ─── Journal Topics ───
export interface SanityJournalTopic {
  _id: string;
  title: string;
  preview?: string;
  category?: string;
  substackUrl?: string;
  order?: number;
}

export async function getJournalTopics(): Promise<SanityJournalTopic[]> {
  return client.fetch(`*[_type == "journalTopic"] | order(order asc)`);
}

// ─── Personal About ───
export interface SanityPersonalAbout {
  headline?: string;
  headlineAccent?: string;
  paragraphs?: string[];
  pillars?: { label: string; value: string }[];
}

export async function getPersonalAbout(): Promise<SanityPersonalAbout | null> {
  return client.fetch(`*[_type == "personalAbout"][0]`);
}

// ─── Life Pillars ───
export interface SanityLifePillar {
  _id: string;
  brand: string;
  key: string;
  theme?: string;
  description?: string;
  contentPillars?: string[];
  order?: number;
}

export async function getLifePillars(): Promise<SanityLifePillar[]> {
  return client.fetch(`*[_type == "lifePillar"] | order(order asc)`);
}

// ─── Products ───
export interface SanityProductDoc {
  _id: string;
  title: string;
  slug?: { current: string };
  shortDescription?: string;
  format?: string;
  brand: string;
  productType: string;
  themes?: string[];
  showOn?: string[];
  priceType: string;
  price?: string;
  gumroadUrl?: string;
  ctaLabel?: string;
  featured?: boolean;
  order?: number;
  coverImageUrl?: string;
}

export async function getProducts(): Promise<SanityProductDoc[]> {
  return client.fetch(
    `*[_type == "product" && published == true] | order(order asc) {
      _id, title, slug, shortDescription, format, brand, productType,
      themes, showOn, priceType, price, gumroadUrl, ctaLabel, featured, order,
      "coverImageUrl": coverImage.asset->url
    }`
  );
}

// ─── Legacy ───
export interface SanitySettings {
  currentRole?: string;
  currentCompany?: string;
  location?: string;
  tagline?: string;
  focus?: string;
  subtitleLine1?: string;
  subtitleLine2?: string;
}

export async function getSiteSettings(): Promise<SanitySettings | null> {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}
