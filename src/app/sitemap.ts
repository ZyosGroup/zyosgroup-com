import type { MetadataRoute } from "next";
import { promises as fs } from "node:fs";
import path from "node:path";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";
import { CASE_STUDIES } from "@/lib/case-studies";

// Auto-discover every static App-Router page. We walk src/app and emit a URL
// for every directory that contains a page.tsx file, except segments that
// start with parentheses (route groups) or underscores (private).
//
// Hand-maintained sitemaps drift the moment a page is added or removed.
// The legacy site shipped six 404 URLs in its sitemap for months — this
// generator removes that failure mode at the source.

async function collectRoutes(
  dir: string,
  parent: string,
  out: string[]
): Promise<void> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    if (name.startsWith("_") || name.startsWith("(")) continue;
    // Skip dynamic / catch-all segments — they need explicit generators.
    if (name.startsWith("[")) continue;
    if (name === "api") continue;
    const childDir = path.join(dir, name);
    const segment = `${parent}/${name}`;
    const hasPage = await fileExists(path.join(childDir, "page.tsx"));
    if (hasPage) out.push(segment);
    await collectRoutes(childDir, segment, out);
  }
}

async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appDir = path.join(process.cwd(), "src", "app");
  const routes: string[] = ["/"];
  await collectRoutes(appDir, "", routes);

  // Stable ordering — root first, then alphabetical.
  const unique = Array.from(new Set(routes)).sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  const lastModified = new Date();
  const staticEntries: MetadataRoute.Sitemap = unique.map((p) => ({
    url: `${SITE.url}${p === "/" ? "" : p}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: p === "/" ? 1 : p.split("/").length === 2 ? 0.9 : 0.8,
  }));

  // Dynamic content routes ([slug]) are skipped by the static crawler above,
  // so emit them explicitly from their data modules. Use each item's own
  // dateModified/datePublished as lastModified so Google sees real freshness.
  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const caseEntries: MetadataRoute.Sitemap = CASE_STUDIES.map((cs) => ({
    url: `${SITE.url}/case-studies/${cs.slug}`,
    lastModified: new Date(cs.dateModified ?? cs.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries, ...caseEntries];
}
