import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://iansr.online/",
      lastModified: new Date("2026-06-26"),
      changeFrequency: "hourly",
      priority: 1,
    },
  ];
}
