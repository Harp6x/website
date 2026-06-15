import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "published", title: "Published", type: "boolean", initialValue: true, description: "Toggle to show/hide this project" }),
    defineField({ name: "category", title: "Category", type: "string", description: "Categories are managed in Site Settings → Dropdown Options" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "thinking", title: "Thinking / Approach", type: "text", rows: 3 }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt text" }] }),
    defineField({ name: "link", title: "Link", type: "url" }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage", published: "published" },
    prepare({ title, subtitle, media, published }) {
      return { title: `${published === false ? "[Draft] " : ""}${title}`, subtitle, media };
    },
  },
});
