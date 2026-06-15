import type { StructureBuilder, StructureResolver } from "sanity/structure";

/**
 * Custom Studio desk structure.
 *
 * Organized into clear groups separated by dividers:
 *   Site (singletons) · Professional · Personal · Products · Blog
 *
 * Content types with a `published` field get Published / Drafts / All sub-folders
 * (pattern from Before Maps).
 */

/**
 * Helper: create a content-type item with Published / Drafts sub-folders.
 * "Published" = published == true (or published field not set, defaulting to true)
 * "Drafts"    = published == false explicitly
 */
function publishedDraftItem(
  S: StructureBuilder,
  title: string,
  schemaType: string,
) {
  return S.listItem()
    .title(title)
    .schemaType(schemaType)
    .child(
      S.list()
        .title(title)
        .items([
          S.listItem()
            .title("Published")
            .schemaType(schemaType)
            .child(
              S.documentList()
                .title(`${title} — Published`)
                .schemaType(schemaType)
                .filter(`_type == "${schemaType}" && published != false`),
            ),
          S.listItem()
            .title("Drafts")
            .schemaType(schemaType)
            .child(
              S.documentList()
                .title(`${title} — Drafts`)
                .schemaType(schemaType)
                .filter(`_type == "${schemaType}" && published == false`),
            ),
          S.divider(),
          S.listItem()
            .title("All")
            .schemaType(schemaType)
            .child(S.documentTypeList(schemaType).title(`${title} — All`)),
        ]),
    );
}

// Document types that are rendered as explicit list/folder items below and
// should therefore NOT also appear in the auto-generated root list.
const HANDLED_TYPES = [
  "siteSettings",
  "profile",
  "skill",
  "personalAbout",
  "experience",
  "project",
  "philosophy",
  "lifePillar",
  "journalTopic",
  "beyondWork",
  "product",
  "blogPost",
  "venture",
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio")
    .items([
      // ─── Site ───
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Profile")
        .id("profile")
        .child(
          S.document().schemaType("profile").documentId("profile-singleton")
        ),

      S.divider(),

      // ─── Professional ───
      S.listItem()
        .title("Professional")
        .child(
          S.list()
            .title("Professional")
            .items([
              S.listItem().title("Experience").schemaType("experience").child(S.documentTypeList("experience").title("Experience")),
              S.listItem().title("Projects").schemaType("project").child(S.documentTypeList("project").title("Projects")),
              S.listItem()
                .title("Skills")
                .child(
                  S.document()
                    .schemaType("skill")
                    .documentId("skills-singleton")
                ),
            ])
        ),

      // ─── Personal ───
      S.listItem()
        .title("Personal")
        .child(
          S.list()
            .title("Personal")
            .items([
              S.listItem()
                .title("Personal About")
                .child(
                  S.document()
                    .schemaType("personalAbout")
                    .documentId("personal-about-singleton")
                ),
              publishedDraftItem(S, "Ventures", "venture"),
              S.listItem().title("Philosophy").schemaType("philosophy").child(S.documentTypeList("philosophy").title("Philosophy")),
              S.listItem().title("Life Pillars").schemaType("lifePillar").child(S.documentTypeList("lifePillar").title("Life Pillars")),
              S.listItem().title("Journal Topics").schemaType("journalTopic").child(S.documentTypeList("journalTopic").title("Journal Topics")),
              S.listItem().title("Beyond Work").schemaType("beyondWork").child(S.documentTypeList("beyondWork").title("Beyond Work")),
            ])
        ),

      S.divider(),

      // ─── Products ───
      publishedDraftItem(S, "Products", "product"),

      S.divider(),

      // ─── Blog ───
      publishedDraftItem(S, "Blog Posts", "blogPost"),

      // Any other (future) document types fall through here.
      ...S.documentTypeListItems().filter(
        (item) => !HANDLED_TYPES.includes(item.getId() ?? "")
      ),
    ]);
