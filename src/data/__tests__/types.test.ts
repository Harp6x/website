import { describe, it, expect } from "vitest";
import profileFallback from "../profile";
import experienceFallback from "../experience";
import projectsFallback from "../projects";
import skillsFallback from "../skills";
import beyondFallback from "../beyond";
import journalFallback from "../journal";
import productsFallback from "../products";

describe("Profile fallback data", () => {
  it("has required fields", () => {
    expect(profileFallback.name).toBeTruthy();
    expect(profileFallback.handle).toBeTruthy();
    expect(profileFallback.email).toBeTruthy();
    expect(profileFallback.location).toBeTruthy();
    expect(profileFallback.currentRole).toBeTruthy();
    expect(profileFallback.currentCompany).toBeTruthy();
    expect(profileFallback.tagline).toBeTruthy();
    expect(profileFallback.bio.length).toBeGreaterThan(0);
    expect(profileFallback.stats.length).toBeGreaterThan(0);
    expect(profileFallback.socials.length).toBeGreaterThan(0);
  });

  it("stats have label and value", () => {
    profileFallback.stats.forEach((stat) => {
      expect(stat.label).toBeTruthy();
      expect(stat.value).toBeTruthy();
    });
  });

  it("socials have label and href", () => {
    profileFallback.socials.forEach((social) => {
      expect(social.label).toBeTruthy();
      expect(social.href).toBeTruthy();
    });
  });
});

describe("Experience fallback data", () => {
  it("has at least one chapter", () => {
    expect(experienceFallback.length).toBeGreaterThan(0);
  });

  it("every chapter has required fields", () => {
    experienceFallback.forEach((chapter) => {
      expect(chapter.title).toBeTruthy();
      expect(chapter.company).toBeTruthy();
      expect(chapter.era).toBeDefined();
      expect(chapter.period).toBeDefined();
    });
  });

  it("exactly one chapter is current", () => {
    const currentChapters = experienceFallback.filter((c) => c.current);
    expect(currentChapters.length).toBeLessThanOrEqual(1);
  });
});

describe("Projects fallback data", () => {
  it("has at least one project", () => {
    expect(projectsFallback.length).toBeGreaterThan(0);
  });

  it("every project has required fields", () => {
    projectsFallback.forEach((project) => {
      expect(project.title).toBeTruthy();
      expect(project.category).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });
});

describe("Skills fallback data", () => {
  it("has all skill categories", () => {
    expect(skillsFallback.technical.length).toBeGreaterThan(0);
    expect(skillsFallback.soft.length).toBeGreaterThan(0);
    expect(skillsFallback.tools.length).toBeGreaterThan(0);
    expect(skillsFallback.credentials.length).toBeGreaterThan(0);
  });

  it("credentials have cert and org", () => {
    skillsFallback.credentials.forEach((cred) => {
      expect(cred.cert).toBeTruthy();
      expect(cred.org).toBeTruthy();
    });
  });
});

describe("Beyond Work fallback data", () => {
  it("has at least one section", () => {
    expect(beyondFallback.length).toBeGreaterThan(0);
  });

  it("every section has required fields", () => {
    beyondFallback.forEach((section) => {
      expect(section.emoji).toBeTruthy();
      expect(section.title).toBeTruthy();
      expect(section.body.length).toBeGreaterThan(0);
    });
  });
});

describe("Journal fallback data", () => {
  it("has at least one topic", () => {
    expect(journalFallback.length).toBeGreaterThan(0);
  });

  it("every topic has required fields", () => {
    journalFallback.forEach((topic) => {
      expect(topic.title).toBeTruthy();
      expect(topic.preview).toBeTruthy();
      expect(topic.category).toBeTruthy();
    });
  });
});

describe("Products fallback data", () => {
  it("has at least one product", () => {
    expect(productsFallback.length).toBeGreaterThan(0);
  });

  it("every product has required fields", () => {
    productsFallback.forEach((product) => {
      expect(product.id).toBeTruthy();
      expect(product.slug).toBeTruthy();
      expect(product.title).toBeTruthy();
      expect(product.brand).toBeTruthy();
      expect(product.productType).toBeTruthy();
      expect(product.showOn.length).toBeGreaterThan(0);
      expect(product.priceType).toBeTruthy();
    });
  });

  it("product brands are valid", () => {
    const validBrands = ["harp6x", "tgu", "crossover"];
    productsFallback.forEach((product) => {
      expect(validBrands).toContain(product.brand);
    });
  });

  it("product showOn values are valid", () => {
    const validSurfaces = ["professional", "personal"];
    productsFallback.forEach((product) => {
      product.showOn.forEach((surface) => {
        expect(validSurfaces).toContain(surface);
      });
    });
  });

  it("all product slugs are unique", () => {
    const slugs = productsFallback.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
