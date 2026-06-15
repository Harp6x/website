import { defineType, defineField } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "meta", title: "Meta & SEO" },
  ],
  fields: [
    defineField({ name: "title", title: "Title", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", group: "content", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "published", title: "Published", type: "boolean", group: "content", initialValue: true, description: "Toggle to show/hide this blog post" }),
    defineField({ name: "category", title: "Category", type: "string", group: "content", description: "Categories are managed in Site Settings → Dropdown Options" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, group: "content" }),
    defineField({ name: "body", title: "Body", type: "portableText", group: "content" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", group: "content", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt text" }] }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime", group: "meta" }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "meta" }),
  ],
  orderings: [{ title: "Published", name: "published", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage", published: "published" },
    prepare({ title, subtitle, media, published }) {
      return { title: `${published === false ? "[Draft] " : ""}${title}`, subtitle, media };
    },
  },
});
