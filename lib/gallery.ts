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
 * Sort key that mirrors how Windows Explorer orders files: by the leading
 * number, then by the "(2)"/"(3)" copy suffix, so "09.jpg" comes before
 * "09 (2).jpg" and both come before "10.jpg". Falls back to a natural compare
 * for names without a leading number.
 */
function orderKey(file: string) {
  const lead = file.match(/^\d+/);
  const copy = file.match(/\((\d+)\)/);
  return {
    lead: lead ? Number(lead[0]) : Number.POSITIVE_INFINITY,
    copy: copy ? Number(copy[1]) : 1,
  };
}

/**
 * Reads /public/gallery/<edition>/ at build time and returns every image found,
 * ordered the way they appear in the folder (Explorer-style name order). Drop
 * any number of photos in that folder with any filenames, no code change
 * needed, just rebuild.
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
    .sort((a, b) => {
      const ka = orderKey(a);
      const kb = orderKey(b);
      if (ka.lead !== kb.lead) return ka.lead - kb.lead;
      if (ka.copy !== kb.copy) return ka.copy - kb.copy;
      return a.localeCompare(b, undefined, { numeric: true });
    })
    .map((file, index) => ({
      src: `/gallery/${edition}/${file}`,
      alt: `Tɛkyerɛma Pa Hackathon ${edition}, event photo ${index + 1}`,
    }));
}
