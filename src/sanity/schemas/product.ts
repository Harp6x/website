import { defineType, defineField } from "sanity";

const brands = [
  { title: "Harp6x", value: "harp6x" },
  { title: "There Goes Uddip", value: "tgu" },
  { title: "Crossover", value: "crossover" },
];

const productTypes = [
  { title: "System / Notion Template", value: "template" },
  { title: "Manual / Guide (PDF)", value: "manual" },
  { title: "eBook", value: "ebook" },
  { title: "Toolkit / Checklist", value: "toolkit" },
  { title: "Bundle", value: "bundle" },
  { title: "Course / Cohort", value: "course" },
  { title: "Essay Collection", value: "essay" },
  { title: "Subscription", value: "subscription" },
];

const themes = [
  { title: "AI & Automation", value: "ai" },
  { title: "Cybersecurity", value: "cybersecurity" },
  { title: "Systems & Productivity", value: "systems" },
  { title: "Freelancing & Business", value: "business" },
  { title: "Career & LinkedIn", value: "career" },
  { title: "Travel", value: "travel" },
  { title: "Trekking & Mountains", value: "trekking" },
  { title: "Photography", value: "photography" },
  { title: "Writing & Essays", value: "writing" },
  { title: "Philosophy & Mindset", value: "mindset" },
];

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  groups: [
    { name: "main", title: "Main", default: true },
    { name: "filters", title: "Filters" },
    { name: "cta", title: "Price & CTA" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "main",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "main",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description (shown on card)",
      type: "text",
      rows: 3,
      group: "main",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image (optional)",
      type: "image",
      group: "main",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "format",
      title: "Format (e.g. 'Notion template', 'PDF · 60 pages')",
      type: "string",
      group: "main",
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
      group: "filters",
      options: { list: brands, layout: "radio" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "productType",
      title: "Product Type",
      type: "string",
      group: "filters",
      options: { list: productTypes },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "themes",
      title: "Themes",
      type: "array",
      group: "filters",
      of: [{ type: "string" }],
      options: { list: themes },
    }),
    defineField({
      name: "showOn",
      title: "Show On",
      description:
        "Which side(s) of the site this product appears on. Professional = work / recruiter context. Personal = creator / library context.",
      type: "array",
      group: "filters",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Professional", value: "professional" },
          { title: "Personal", value: "personal" },
        ],
      },
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "priceType",
      title: "Price Type",
      type: "string",
      group: "cta",
      options: {
        list: [
          { title: "Free", value: "free" },
          { title: "Paid", value: "paid" },
          { title: "Bundle", value: "bundle" },
          { title: "Coming Soon", value: "coming-soon" },
        ],
        layout: "radio",
      },
      initialValue: "paid",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "price",
      title: "Price (for your reference only — NOT shown on the site)",
      description:
        "Pricing lives on Gumroad. This optional field is internal only and never rendered on the site.",
      type: "string",
      group: "cta",
    }),
    defineField({
      name: "gumroadUrl",
      title: "Gumroad / Checkout URL",
      type: "url",
      group: "cta",
      validation: (r) => r.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Label Override (optional)",
      type: "string",
      group: "cta",
    }),
    defineField({
      name: "featured",
      title: "Flagship product?",
      description:
        "Flagship products appear first in the showcase strips on the Professional (Library) and Personal (Products) pages. All products appear in the full /products catalog regardless.",
      type: "boolean",
      group: "main",
      initialValue: false,
    }),
    defineField({
      name: "published",
      title: "Published?",
      type: "boolean",
      group: "main",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      group: "main",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "brand", media: "coverImage" },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: subtitle ? `[${subtitle}]` : "", media };
    },
  },
});
