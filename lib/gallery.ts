import fs from "node:fs";
import path from "node:path";

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");
const SUPPORTED = new Set([".jpg", ".jpeg", ".webp", ".png", ".avif"]);

export function getGalleryImages(): string[] {
  try {
    return fs
      .readdirSync(GALLERY_DIR)
      .filter((f) => SUPPORTED.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/images/gallery/${f}`);
  } catch {
    return [];
  }
}
