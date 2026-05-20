import { defineType, defineField } from "sanity";

export default defineType({
  name: "journalTopic",
  title: "Journal Topic",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "preview", title: "Preview Text", type: "text", rows: 3 }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Cybersecurity", "Travel", "Philosophy", "Systems Thinking", "AI & Automation", "Reflections", "Automotive", "Exploration"] },
    }),
    defineField({ name: "substackUrl", title: "Substack URL", type: "url", description: "Link to the published article on Substack" }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "category" } },
});
