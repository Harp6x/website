export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  channelTitle: string;
}

const API_KEY = process.env.YOUTUBE_API_KEY;

async function fetchChannelVideos(channelId: string, maxResults = 6): Promise<YouTubeVideo[]> {
  if (!API_KEY || API_KEY === "placeholder") return [];

  try {
    // First get the uploads playlist ID
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (!channelRes.ok) return [];
    const channelData = await channelRes.json();
    const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploadsPlaylistId) return [];

    // Then fetch latest videos from the uploads playlist
    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (!videosRes.ok) return [];
    const videosData = await videosRes.json();

    return (videosData.items || []).map((item: Record<string, unknown>) => {
      const snippet = item.snippet as Record<string, unknown>;
      const resourceId = snippet.resourceId as Record<string, string>;
      const thumbnails = snippet.thumbnails as Record<string, Record<string, string>>;
      return {
        id: resourceId?.videoId || "",
        title: (snippet.title as string) || "",
        description: ((snippet.description as string) || "").slice(0, 200),
        thumbnail: thumbnails?.maxres?.url || thumbnails?.high?.url || thumbnails?.medium?.url || "",
        publishedAt: (snippet.publishedAt as string) || "",
        channelTitle: (snippet.channelTitle as string) || "",
      };
    });
  } catch {
    return [];
  }
}

export async function getYouTubeVideos(): Promise<YouTubeVideo[]> {
  const harsh6xId = process.env.YOUTUBE_CHANNEL_HARSH6X;
  const jimnyrunsId = process.env.YOUTUBE_CHANNEL_JIMNYRUNS;

  const results = await Promise.all([
    harsh6xId && harsh6xId !== "placeholder" ? fetchChannelVideos(harsh6xId, 4) : Promise.resolve([]),
    jimnyrunsId && jimnyrunsId !== "placeholder" ? fetchChannelVideos(jimnyrunsId, 4) : Promise.resolve([]),
  ]);

  // Merge and sort by date
  return [...results[0], ...results[1]].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
