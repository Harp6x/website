import { defineType, defineField } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "handle", title: "Handle", type: "string" }),
    defineField({ name: "email", title: "Primary Email", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "currentRole", title: "Current Role", type: "string" }),
    defineField({ name: "currentCompany", title: "Current Company", type: "string" }),
    defineField({ name: "focus", title: "Focus Area", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "subtitleLine1", title: "Hero Subtitle Line 1", type: "string" }),
    defineField({ name: "subtitleLine2", title: "Hero Subtitle Line 2", type: "text", rows: 2 }),
    defineField({ name: "heroKeywords", title: "Hero Keywords", type: "string", description: "e.g. Security · Product · Systems" }),
    defineField({ name: "landingIntro", title: "Landing Page Intro", type: "string", description: "One-liner on the split landing page" }),
    defineField({
      name: "bio",
      title: "Bio Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({ name: "bioClosing", title: "Bio Closing Line", type: "text", rows: 2 }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "label", title: "Label", type: "string" }),
          defineField({ name: "value", title: "Value", type: "string" }),
        ],
      }],
    }),
    defineField({
      name: "socials",
      title: "Social Links",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "label", title: "Label", type: "string" }),
          defineField({ name: "href", title: "URL", type: "url" }),
        ],
      }],
    }),
    defineField({
      name: "professionalEmails",
      title: "Professional Emails",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "personalBrands",
      title: "Personal Brands",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "key", title: "Key (e.g. harp6x)", type: "string" }),
          defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
          defineField({ name: "youtube", title: "YouTube URL", type: "url" }),
          defineField({ name: "substack", title: "Substack URL", type: "url" }),
          defineField({ name: "email", title: "Email", type: "string" }),
        ],
      }],
    }),
    defineField({ name: "resumePath", title: "Resume Path", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Profile" }) },
});
