import fs from "node:fs";
import path from "node:path";

// Formats next/image can serve. SVG works because dangerouslyAllowSVG is
// enabled in next.config.ts (first-party logos only).
const IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
  ".svg",
];

function existsInPublic(urlPath: string): boolean {
  const full = path.join(process.cwd(), "public", urlPath.replace(/^\//, ""));
  try {
    return fs.statSync(full).isFile();
  } catch {
    return false;
  }
}

/**
 * Resolves an image slot to a real file under /public, or undefined if none
 * exists. If the exact path is missing, it looks for the same basename with any
 * common image extension, so a slot declared as `foo.jpg` still matches a
 * `foo.png` that was dropped in. Lets components fall back to a placeholder
 * without emitting a 404.
 *
 * Server-only: uses the filesystem, so call it from Server Components.
 */
/**
 * Returns the first image found in a folder under /public, or undefined if the
 * folder is missing or empty. Lets a section use "whatever image is in this
 * folder" instead of requiring an exact filename.
 *
 * Server-only: uses the filesystem, so call it from Server Components.
 */
export function firstImageIn(dir: string): string | undefined {
  const clean = dir.replace(/^\/|\/$/g, "");
  const full = path.join(process.cwd(), "public", clean);

  try {
    const file = fs
      .readdirSync(full)
      .filter((f) => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))[0];
    return file ? `/${clean}/${file}` : undefined;
  } catch {
    return undefined;
  }
}

export function publicImage(src?: string): string | undefined {
  if (!src) return undefined;
  if (existsInPublic(src)) return src;

  const slash = src.lastIndexOf("/");
  const dir = src.slice(0, slash);
  const file = src.slice(slash + 1);
  const dot = file.lastIndexOf(".");
  const base = dot === -1 ? file : file.slice(0, dot);

  for (const ext of IMAGE_EXTENSIONS) {
    const candidate = `${dir}/${base}${ext}`;
    if (candidate !== src && existsInPublic(candidate)) return candidate;
  }
  return undefined;
}
