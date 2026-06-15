export interface SocialLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface BrandLinks {
  instagram?: string;
  youtube?: string;
  substack?: string;
  email?: string;
}

export interface Profile {
  name: string;
  handle: string;
  email: string;
  phone?: string;
  location: string;
  currentRole: string;
  currentCompany: string;
  focus: string;
  tagline: string;
  subtitleLine1: string;
  subtitleLine2: string;
  heroKeywords: string;
  bio: string[];
  bioClosing: string;
  stats: Stat[];
  socials: SocialLink[];
  professionalEmails: string[];
  personalBrands: Record<string, BrandLinks>;
  professionalResumeUrl: string;
  personalResumeUrl: string;
  claudeReviewHeading?: string;
  claudeReviewSubtitle?: string;
  claudeReview?: string;
  claudeReviewShort?: string;
}

export interface Chapter {
  era: string;
  title: string;
  company: string;
  period: string;
  narrative: string;
  highlights: string[];
  current?: boolean;
}

export interface Credential {
  cert: string;
  org: string;
}

export interface Skills {
  technical: string[];
  soft: string[];
  tools: string[];
  credentials: Credential[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  thinking: string;
  tags: string[];
  link?: string;
}

export interface LifeSection {
  emoji: string;
  title: string;
  subtitle: string;
  body: string[];
  mood: string;
}

export interface CreatorBrand {
  name: string;
  handle: string;
  tagline: string;
  description: string;
  themes: string[];
  tone: string;
  visual?: string;
  links: SocialLink[];
}

export interface FeaturedVideo {
  title: string;
  description: string;
  category: string;
  url?: string;
  thumbnailPlaceholder: string;
}

export interface JournalTopic {
  title: string;
  preview: string;
  category: string;
  substackUrl?: string;
}

export interface ContentVision {
  headline: string;
  subtitle: string;
  pillars: string[];
  closingLine: string;
}

export type ProductBrand = "harp6x" | "tgu" | "crossover";
export type ProductType =
  | "template"
  | "manual"
  | "ebook"
  | "toolkit"
  | "bundle"
  | "course"
  | "essay"
  | "subscription";
export type PriceType = "free" | "paid" | "bundle" | "coming-soon";
export type ProductSurface = "professional" | "personal";

export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  format?: string;
  brand: ProductBrand;
  productType: ProductType;
  themes: string[];
  showOn: ProductSurface[];
  priceType: PriceType;
  price?: string;
  gumroadUrl?: string;
  ctaLabel?: string;
  coverImage?: string;
  featured?: boolean;
}

export interface Venture {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  url?: string;
  coverImage?: string;
  philosophy?: string;
  highlights: string[];
  techStack: string[];
  status: "active" | "building" | "paused";
}

export interface ProductDetail {
  slug: string;
  headline: string;
  subheadline: string;
  problem: string;
  whatsIncluded: { title: string; description: string }[];
  closingPitch?: string;
  seoKeywords: string[];
}
