"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ImageWithFallback from "@/components/shared/ImageWithFallback";
import Icon from "@/components/shared/Icon";
import type { GalleryImage } from "@/lib/edition-2025";

const tilePlaceholder = (
  <span className="absolute inset-0 flex items-center justify-center bg-surface-container-high">
    <Icon name="image" className="text-3xl text-on-surface-variant opacity-40" />
  </span>
);

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const count = images.length;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null ? current : (current + delta + count) % count,
      ),
    [count],
  );

  // Keyboard nav + lock background scroll while the lightbox is open.
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  if (count === 0) return null;

  const active = openIndex === null ? null : images[openIndex];

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
      <h2 className="font-headline-md text-headline-md mb-2">Edition Gallery</h2>
      <p className="font-body-md text-on-surface-variant mb-8">
        {count} photos from the 2025 edition. Select any photo to view it full
        size.
      </p>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open image ${index + 1} of ${count}`}
              className="group relative block w-full aspect-square overflow-hidden rounded-xl hairline-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                fallback={tilePlaceholder}
              />
            </button>
          </li>
        ))}
      </ul>

      {/*
       * Rendered through a portal so the fixed overlay escapes the <Reveal>
       * wrapper's CSS transform, which would otherwise become its containing
       * block and push it off screen.
       */}
      {active &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            onClick={close}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Icon name="close" className="text-3xl" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute left-2 md:left-6 text-white/80 hover:text-white p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Icon name="chevron_left" className="text-4xl" />
            </button>

            <figure
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl h-full max-h-[80vh] flex flex-col items-center justify-center gap-4"
            >
              <div className="relative w-full flex-grow">
                <ImageWithFallback
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  fallback={
                    <span className="absolute inset-0 flex items-center justify-center text-white/60 font-body-md">
                      Image unavailable
                    </span>
                  }
                />
              </div>
              <figcaption className="text-white/80 font-body-md text-sm text-center">
                {openIndex! + 1} / {count}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute right-2 md:right-6 text-white/80 hover:text-white p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Icon name="chevron_right" className="text-4xl" />
            </button>
          </div>,
          document.body,
        )}
    </section>
  );
}
