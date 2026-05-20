export interface SubstackPost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  creator: string;
  source: string;
}

async function parseRSSFeed(url: string, source: string): Promise<SubstackPost[]> {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const text = await res.text();

    // Simple XML parsing without external dependency
    const items: SubstackPost[] = [];
    const itemMatches = text.match(/<item>([\s\S]*?)<\/item>/g) || [];

    for (const itemXml of itemMatches.slice(0, 10)) {
      const getTag = (tag: string) => {
        const match = itemXml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
        return (match?.[1] || match?.[2] || "").trim();
      };

      items.push({
        title: getTag("title"),
        link: getTag("link"),
        description: getTag("description").replace(/<[^>]+>/g, "").slice(0, 250),
        pubDate: getTag("pubDate"),
        creator: getTag("dc:creator"),
        source,
      });
    }

    return items;
  } catch {
    return [];
  }
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  const [harp6x, uddip] = await Promise.all([
    parseRSSFeed("https://harp6x.substack.com/feed", "harp6x"),
    parseRSSFeed("https://theregoesuddip.substack.com/feed", "There Goes Uddip"),
  ]);

  return [...harp6x, ...uddip].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );
}
