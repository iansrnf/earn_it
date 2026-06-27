import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleRoutes = articles.map((article) => ({
    url: `https://iansr.online/articles/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "daily" as const,
    priority: article.slug.includes("walmart") ? 0.95 : 0.85,
  }));

  return [
    {
      url: "https://iansr.online/",
      lastModified: new Date("2026-06-27"),
      changeFrequency: "hourly",
      priority: 1,
    },
    ...articleRoutes,
  ];
}
