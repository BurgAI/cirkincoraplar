import fs from "node:fs";
import path from "node:path";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const SUPPORTED = new Set([".jpg", ".jpeg", ".webp", ".png", ".avif"]);

const GALLERY_CATEGORIES = ["kadin", "erkek", "cocuk", "bez-canta"];

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
    return fs
      .readdirSync(categoryDir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((dir) => ({
        slug: dir.name,
        images: getImagesInDir(path.join(categoryDir, dir.name), `images/${category}/${dir.name}`),
      }))
      .filter((sub) => sub.images.length > 0);
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

export function getFirstCategoryImage(category: string, fallback: string): string {
  const categoryDir = path.join(IMAGES_DIR, category);
  try {
    const subdirs = fs
      .readdirSync(categoryDir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name);
    for (const sub of subdirs) {
      const files = fs
        .readdirSync(path.join(categoryDir, sub))
        .filter((f) => SUPPORTED.has(path.extname(f).toLowerCase()))
        .sort();
      if (files.length > 0) return `/images/${category}/${sub}/${files[0]}`;
    }
  } catch {
    // fall through
  }
  return fallback;
}
