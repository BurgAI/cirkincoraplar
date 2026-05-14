import type { MetadataRoute } from "next";
import { getCategoryDir } from "@/data/categoryCatalog";
import { locales, pageSlugs } from "@/data/i18n";
import { getCategorySubfolders } from "@/lib/gallery";
import { absoluteUrl, buildLocalizedPath } from "@/lib/seo";

const categoryPages = ["women", "men", "kids"] as const;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: absoluteUrl(buildLocalizedPath(locale)),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    });

    for (const slug of pageSlugs) {
      entries.push({
        url: absoluteUrl(buildLocalizedPath(locale, slug)),
        lastModified: now,
        changeFrequency: slug === "contact" ? "monthly" : "weekly",
        priority: slug === "socks" || slug === "tote-bags" ? 0.9 : 0.8,
      });
    }

    for (const slug of categoryPages) {
      const subfolders = getCategorySubfolders(getCategoryDir(slug));

      for (const subfolder of subfolders) {
        entries.push({
          url: absoluteUrl(buildLocalizedPath(locale, `${slug}/${subfolder.slug}`)),
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    }
  }

  return entries;
}
