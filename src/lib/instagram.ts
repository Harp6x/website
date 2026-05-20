export interface InstagramPost {
  id: string;
  caption: string;
  mediaUrl: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
  timestamp: string;
  username: string;
}

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

async function fetchUserMedia(userId: string, limit = 6): Promise<InstagramPost[]> {
  if (!ACCESS_TOKEN || ACCESS_TOKEN === "placeholder") return [];

  try {
    const res = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,media_type,permalink,timestamp,username&limit=${limit}&access_token=${ACCESS_TOKEN}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();

    return (data.data || []).map((item: Record<string, unknown>) => ({
      id: item.id as string,
      caption: ((item.caption as string) || "").slice(0, 200),
      mediaUrl: (item.media_url as string) || "",
      mediaType: (item.media_type as string) || "IMAGE",
      permalink: (item.permalink as string) || "",
      timestamp: (item.timestamp as string) || "",
      username: (item.username as string) || "",
    }));
  } catch {
    return [];
  }
}

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  const harsh6x = process.env.INSTAGRAM_USER_HARSH6X;
  const uddip = process.env.INSTAGRAM_USER_THEREGOESUDDIP;
  const jimny = process.env.INSTAGRAM_USER_JIMNYRUNS;

  const ids = [harsh6x, uddip, jimny].filter((id) => id && id !== "placeholder") as string[];

  if (ids.length === 0) return [];

  const results = await Promise.all(ids.map((id) => fetchUserMedia(id, 4)));

  return results
    .flat()
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}
