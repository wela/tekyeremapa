import fs from "node:fs";
import path from "node:path";
import type { GalleryImage } from "./edition-2025";

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
]);

/**
 * Reads /public/gallery/<edition>/ at build time and returns every image found,
 * sorted naturally (so "2" comes before "10"). Drop any number of photos in
 * that folder with any filenames — no code change needed, just rebuild.
 *
 * Server-only: this uses the filesystem, so call it from a Server Component and
 * pass the result to the client Gallery as a prop.
 */
export function getGalleryImages(edition: string): GalleryImage[] {
  const dir = path.join(process.cwd(), "public", "gallery", edition);

  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file, index) => ({
      src: `/gallery/${edition}/${file}`,
      alt: `Tɛkyerɛma Pa Hackathon ${edition} — event photo ${index + 1}`,
    }));
}
