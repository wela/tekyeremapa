"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type ReactNode } from "react";

type Props = Omit<ImageProps, "src" | "alt"> & {
  /** Path under /public. When the file is missing, `fallback` renders instead. */
  src?: string;
  alt: string;
  /** Shown before a real image exists (or if it fails to load). */
  fallback: ReactNode;
};

/**
 * Renders an optimised next/image, but falls back to placeholder markup when
 * `src` is absent or the file 404s. This lets us ship image "slots" that show a
 * tidy placeholder now and light up automatically once the real file is dropped
 * into /public — no code change required.
 */
export default function ImageWithFallback({
  src,
  alt,
  fallback,
  ...imageProps
}: Props) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return <>{fallback}</>;

  return (
    <Image
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      {...imageProps}
    />
  );
}
