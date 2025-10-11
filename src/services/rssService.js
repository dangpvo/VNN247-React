import { decodeHtmlEntities } from "../utils/helpers";

const RSS2JSON_API = "https://api.rss2json.com/v1/api.json?rss_url=";

export async function fetchRSSFeeds(feedList = [], limit = 0) {
  const promises = feedList.map(async (feed) => {
    try {
      const res = await fetch(`${RSS2JSON_API}${encodeURIComponent(feed.url)}`);
      const data = await res.json();

      if (data.status !== "ok") {
        if (data.message?.toLowerCase().includes("limit")) {
          throw new Error("Rate limit exceeded! Please try again later.");
        } else {
          throw new Error(`Failed to load ${feed.source}: ${data.message}`);
        }
        // throw new Error(`Failed to load ${feed.url}`);
      }

      const items = data.items.map((item) => ({
        title: decodeHtmlEntities(item.title),
        link: item.link,
        pubDate: item.pubDate,
        description: item.description.replace(/<[^>]+>/g, ""), // remove HTML tags
        image: decodeHtmlEntities(
          item.enclosure?.link || item.thumbnail || item.enclosure?.url || null
        ),
        source: feed.source,
      }));

      return limit ? items.slice(0, limit) : items;
    } catch (error) {
      console.error(`Error fetching ${feed.source}:`, error.message);
      return [];
    }
  });

  const results = await Promise.allSettled(promises);
  const allItems = results
    .filter((r) => r.status === "fulfilled")
    .flatMap((r) => r.value);

  return allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
}
