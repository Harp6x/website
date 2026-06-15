import { defineType, defineField } from "sanity";

export default defineType({
  name: "journalTopic",
  title: "Journal Topic",
  type: "document",
  fields: [
    defineField({ name: "published", title: "Published", type: "boolean", initialValue: true, description: "Toggle to show/hide this journal topic" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "preview", title: "Preview Text", type: "text", rows: 3 }),
    defineField({ name: "category", title: "Category", type: "string", description: "Categories are managed in Site Settings → Dropdown Options" }),
    defineField({ name: "substackUrl", title: "Substack URL", type: "url", description: "Link to the published article on Substack" }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "category", published: "published" },
    prepare({ title, subtitle, published }) {
      return { title: `${published === false ? "[Draft] " : ""}${title}`, subtitle };
    },
  },
});
