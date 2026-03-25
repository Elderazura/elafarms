import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const staticPaths = [
  "",
  "/about",
  "/farm",
  "/products",
  "/blog",
  "/careers",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const lastMod = new Date();

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: lastMod,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const slug of getPostSlugs()) {
    entries.push({
      url: `${base}/blog/${slug}`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  return entries;
}
