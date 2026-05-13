import fs from "node:fs";
import path from "node:path";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const SUPPORTED = new Set([".jpg", ".jpeg", ".webp", ".png", ".avif"]);

export function getGalleryImages(): string[] {
  const galleryDir = path.join(IMAGES_DIR, "gallery");
  try {
    return fs
      .readdirSync(galleryDir)
      .filter((f) => SUPPORTED.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/images/gallery/${f}`);
  } catch {
    return [];
  }
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
