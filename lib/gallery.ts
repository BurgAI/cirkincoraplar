import fs from "node:fs";
import path from "node:path";
import { categoryCatalog } from "@/data/categoryCatalog";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const SUPPORTED = new Set([".jpg", ".jpeg", ".webp", ".png", ".avif"]);

const GALLERY_CATEGORIES = ["kadin", "erkek", "cocuk", "bez-canta"];
const SLUG_ALIASES: Record<string, string> = {
  "k-01": "bamboo",
  "k-02": "diz-alti",
  "k-03": "diz-ustu",
  "k-04": "en-yeniler",
  "k-05": "ince-corap",
  "k-06": "nakisli-corap",
  "k-07": "patik",
  "k-08": "renkli-corap",
  "k-09": "sneaker-ve-babet",
  "k-10": "soket",
  "k-11": "pilates-corap",
  "e-01": "bambu-corap",
  "e-02": "desenli-corap",
  "e-03": "diyabetik-corap",
  "e-04": "kislik-corap",
  "e-05": "patik-corap",
  "e-06": "sneaker-corap",
  "c-01": "erkek-cocuk",
  "c-02": "kiz-cocuk",
  "c-03": "taraftar",
  "b-01": "baskili-bez-canta",
  "b-02": "ozel-tasarim-bez-canta",
  "bambu-c-orap": "bambu-corap",
  "desenli-c-orap": "desenli-corap",
  "diyabetik-c-orap": "diyabetik-corap",
  "kis-lik-c-orap": "kislik-corap",
  "patik-c-orap": "patik-corap",
  "sneaker-c-orap": "sneaker-corap",
  "kiz-c-ocuk": "kiz-cocuk",
  "k-z-cocuk": "kiz-cocuk",
  "k-sl-k-corap": "kislik-corap",
  "bask-l-bez-canta": "baskili-bez-canta",
  "baskili-bez-c-anta": "baskili-bez-canta",
  "ozel-tasar-m-bez-canta": "ozel-tasarim-bez-canta",
  "o-zel-tasarim-bez-c-anta": "ozel-tasarim-bez-canta",
};

export function getGalleryImages(): string[] {
  const images: string[] = [];
  for (const cat of GALLERY_CATEGORIES) {
    const catDir = path.join(IMAGES_DIR, cat);
    try {
      const subdirs = fs
        .readdirSync(catDir, { withFileTypes: true })
        .filter((e) => e.isDirectory())
        .map((e) => e.name);
      for (const sub of subdirs) {
        const files = fs
          .readdirSync(path.join(catDir, sub))
          .filter((f) => SUPPORTED.has(path.extname(f).toLowerCase()))
          .sort();
        // Pick up to 2 photos per subcategory for the gallery mosaic
        for (const f of files.slice(0, 2)) {
          images.push(`/images/${cat}/${sub}/${f}`);
        }
        if (images.length >= 8) break;
      }
    } catch {
      // category dir doesn't exist yet
    }
    if (images.length >= 8) break;
  }
  return images;
}

export type SubcategoryImages = {
  slug: string;
  images: string[];
};

export function getCategorySubfolders(category: string): SubcategoryImages[] {
  const categoryDir = path.join(IMAGES_DIR, category);
  try {
    const merged = new Map<string, string[]>();
    for (const dir of fs
      .readdirSync(categoryDir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
    ) {
      const slug = normalizeCategorySlug(dir.name);
      const images = getImagesInDir(path.join(categoryDir, dir.name), `images/${category}/${dir.name}`);
      const existing = merged.get(slug) ?? [];
      merged.set(slug, [...existing, ...images]);
    }
    return sortSubcategories(category, Array.from(merged.entries()).map(([slug, images]) => ({ slug, images })));
  } catch {
    return [];
  }
}

function getImagesInDir(dirPath: string, urlBase: string): string[] {
  try {
    return fs
      .readdirSync(dirPath)
      .filter((f) => SUPPORTED.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/${urlBase}/${f}`);
  } catch {
    return [];
  }
}

export function getSubcategoryImages(category: string, slug: string): string[] {
  const normalizedSlug = normalizeCategorySlug(slug);
  return getCategorySubfolders(category).find((sub) => sub.slug === normalizedSlug)?.images ?? [];
}

export function getFirstSubcategoryImage(category: string, slug: string, fallback: string): string {
  const images = getSubcategoryImages(category, slug);
  return images[0] ?? fallback;
}

export function getPreferredCategoryImage(
  category: string,
  preferredSlugs: string[],
  fallback: string,
): string {
  for (const slug of preferredSlugs) {
    const image = getFirstSubcategoryImage(category, slug, "");
    if (image) {
      return image;
    }
  }
  return getFirstCategoryImage(category, fallback);
}

export function getFirstCategoryImage(category: string, fallback: string): string {
  for (const sub of getCategorySubfolders(category)) {
    if (sub.images.length > 0) {
      return sub.images[0];
    }
  }
  return fallback;
}

function normalizeCategorySlug(slug: string): string {
  return SLUG_ALIASES[slug] ?? slug;
}

function sortSubcategories(category: string, items: SubcategoryImages[]): SubcategoryImages[] {
  const order = getCategoryOrderByDir(category);
  const orderMap = new Map(order.map((slug, index) => [slug, index]));
  return items.sort((a, b) => {
    const aIndex = orderMap.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = orderMap.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
    if (aIndex !== bIndex) return aIndex - bIndex;
    return a.slug.localeCompare(b.slug);
  });
}

function getCategoryOrderByDir(category: string): string[] {
  if (category === categoryCatalog.women.dir) return [...categoryCatalog.women.order];
  if (category === categoryCatalog.men.dir) return [...categoryCatalog.men.order];
  if (category === categoryCatalog.kids.dir) return [...categoryCatalog.kids.order];
  return ["baskili-bez-canta", "ozel-tasarim-bez-canta"];
}
