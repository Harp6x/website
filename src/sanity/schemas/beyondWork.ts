import { defineType, defineField } from "sanity";

export default defineType({
  name: "beyondWork",
  title: "Beyond Work",
  type: "document",
  fields: [
    defineField({
      name: "emoji",
      title: "Emoji",
      type: "string",
      description: "Paste any emoji, e.g. 🧭 ⛰️ 🎵 📖",
    }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    defineField({
      name: "body",
      title: "Body Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({ name: "mood", title: "Mood Line", type: "string" }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "subtitle" } },
});
