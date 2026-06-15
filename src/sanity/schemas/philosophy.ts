import { defineType, defineField } from "sanity";

export default defineType({
  name: "philosophy",
  title: "Philosophy",
  type: "document",
  fields: [
    defineField({ name: "published", title: "Published", type: "boolean", initialValue: true, description: "Toggle to show/hide this philosophy" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", published: "published" },
    prepare({ title, published }) {
      return { title: `${published === false ? "[Draft] " : ""}${title}` };
    },
  },
});
