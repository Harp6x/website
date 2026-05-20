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
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "brand", subtitle: "theme" } },
});
