import { defineType, defineField } from "sanity";
import { RocketIcon } from "@sanity/icons";

export default defineType({
  name: "venture",
  title: "Venture",
  type: "document",
  icon: RocketIcon,
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "technical", title: "Technical" },
    { name: "meta", title: "Meta & SEO" },
  ],
  fields: [
    defineField({ name: "title", title: "Title", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", group: "content", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string", group: "content", description: "One-line description shown on cards" }),
    defineField({ name: "role", title: "Your Role", type: "string", group: "content", description: "e.g. CEO & Founder, Co-founder & Tech Lead" }),
    defineField({ name: "url", title: "Live URL", type: "url", group: "content" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", group: "content", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt text" }] }),
    defineField({ name: "logo", title: "Logo", type: "image", group: "content", options: { hotspot: true } }),
    defineField({ name: "body", title: "Full Story", type: "portableText", group: "content" }),
    defineField({ name: "philosophy", title: "Philosophy / Thinking", type: "text", rows: 4, group: "content", description: "The thinking behind building this" }),
    defineField({
      name: "highlights",
      title: "Key Highlights",
      type: "array",
      group: "content",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      group: "technical",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      group: "meta",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Building", value: "building" },
          { title: "Paused", value: "paused" },
        ],
        layout: "radio",
      },
      initialValue: "active",
    }),
    defineField({ name: "published", title: "Published", type: "boolean", group: "meta", initialValue: true }),
    defineField({ name: "order", title: "Sort Order", type: "number", group: "meta" }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "meta" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "role", media: "coverImage", published: "published" },
    prepare({ title, subtitle, media, published }) {
      return { title: `${published === false ? "[Draft] " : ""}${title}`, subtitle, media };
    },
  },
});
