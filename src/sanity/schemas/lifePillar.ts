import { defineType, defineField } from "sanity";

export default defineType({
  name: "lifePillar",
  title: "Life Pillar",
  type: "document",
  fields: [
    defineField({ name: "brand", title: "Brand Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "key", title: "Key (e.g. harp6x)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "theme", title: "Theme Line", type: "string", description: "e.g. Systems · Technology · AI" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "contentPillars",
      title: "Content Pillars",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. Shortform: Instagram, Longform: YouTube",
    }),
    defineField({ name: "bio", title: "Short Bio", type: "text", rows: 3, description: "Optional short tagline or bio for this pillar" }),
    defineField({ name: "website", title: "Website URL", type: "url", description: "Main project/brand website" }),
    defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
    defineField({ name: "youtube", title: "YouTube URL", type: "url" }),
    defineField({ name: "substack", title: "Substack URL", type: "url" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "brand", subtitle: "theme" } },
});
