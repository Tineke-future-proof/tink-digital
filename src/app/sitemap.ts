import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { posts } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/work", "/about", "/blog", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
  }));
  const blog = posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date }));
  return [...pages, ...blog];
}
