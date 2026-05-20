import { defineType, defineField } from "sanity";

export default defineType({
  name: "personalAbout",
  title: "Personal About",
  type: "document",
  fields: [
    defineField({ name: "headline", title: "Headline", type: "string", description: "e.g. I'm not building an audience." }),
    defineField({ name: "headlineAccent", title: "Headline Accent", type: "string", description: "Highlighted part, e.g. I'm documenting a transition." }),
    defineField({
      name: "paragraphs",
      title: "Body Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "pillars",
      title: "Bottom Pillars",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "label", title: "Label", type: "string" }),
          defineField({ name: "value", title: "Value", type: "string" }),
        ],
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Personal About" }) },
});
