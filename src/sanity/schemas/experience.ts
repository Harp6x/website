import { defineType, defineField } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "era", title: "Era Label", type: "string", description: "e.g. Latest, Growth, Foundation" }),
    defineField({ name: "published", title: "Published", type: "boolean", initialValue: true, description: "Toggle to show/hide this experience" }),
    defineField({ name: "title", title: "Job Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "company", title: "Company", type: "string", validation: (r) => r.required() }),
    defineField({ name: "period", title: "Period", type: "string", description: "e.g. 2022 – 2025" }),
    defineField({ name: "narrative", title: "Narrative", type: "text", rows: 3 }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "current", title: "Current Role?", type: "boolean" }),
    defineField({ name: "order", title: "Sort Order", type: "number", description: "Lower = shown first" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "company", published: "published" },
    prepare({ title, subtitle, published }) {
      return { title: `${published === false ? "[Draft] " : ""}${title}`, subtitle };
    },
  },
});
