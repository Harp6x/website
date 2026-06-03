import type { Product, ProductSurface } from "@/data/types";

export const BRAND_LABELS: Record<string, string> = {
  harp6x: "Harp6x",
  tgu: "There Goes Uddip",
  crossover: "Crossover",
};

export const PRODUCT_TYPE_LABELS: Record<string, string> = {
  template: "System / Template",
  manual: "Manual / Guide",
  ebook: "eBook",
  toolkit: "Toolkit",
  bundle: "Bundle",
  course: "Course",
  essay: "Essays",
  subscription: "Subscription",
};

export const THEME_LABELS: Record<string, string> = {
  ai: "AI & Automation",
  cybersecurity: "Cybersecurity",
  systems: "Systems & Productivity",
  business: "Freelancing & Business",
  career: "Career & LinkedIn",
  travel: "Travel",
  trekking: "Trekking & Mountains",
  photography: "Photography",
  writing: "Writing & Essays",
  mindset: "Philosophy & Mindset",
};

export const PRICE_TYPE_LABELS: Record<string, string> = {
  free: "Free",
  paid: "Paid",
  bundle: "Bundle",
  "coming-soon": "Coming Soon",
};

/** Products visible on a given surface ("professional" | "personal"). */
export function productsForSurface(
  products: Product[],
  surface: ProductSurface
): Product[] {
  return products.filter((p) => p.showOn.includes(surface));
}

export interface ProductCta {
  label: string;
  href: string;
  disabled: boolean;
}

/**
 * Resolve a product's CTA. Links out to Gumroad (or any checkout URL).
 * Falls back to a disabled "Coming soon" state if no URL is set.
 */
export function getProductCta(product: Product): ProductCta {
  const { gumroadUrl, priceType, ctaLabel } = product;

  if (!gumroadUrl) {
    return {
      label: ctaLabel ?? "Coming soon",
      href: "#",
      disabled: true,
    };
  }

  let label = ctaLabel;
  if (!label) {
    if (priceType === "free") label = "Download free";
    else if (priceType === "coming-soon") label = "Join the waitlist";
    else label = "View on Gumroad";
  }

  return { label, href: gumroadUrl, disabled: false };
}
