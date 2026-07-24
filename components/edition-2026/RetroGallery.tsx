import ImageWithFallback from "@/components/shared/ImageWithFallback";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { publicImage } from "@/lib/assets";
import { getGalleryImages } from "@/lib/gallery";

/*
 * Override slots: drop retro-1.jpg .. retro-4.jpg into /public/edition-2026/ to
 * pick exactly which photos appear here. Any slot left empty falls back to a
 * photo from the real 2025 gallery, so this section is never empty.
 */
const SLOTS = [
  { file: "/edition-2026/retro-1.jpg", offset: false },
  { file: "/edition-2026/retro-2.jpg", offset: true },
  { file: "/edition-2026/retro-3.jpg", offset: false },
  { file: "/edition-2026/retro-4.jpg", offset: true },
];

export default function RetroGallery() {
  const gallery2025 = getGalleryImages("2025");
  // Spread the fallbacks across the set rather than taking the first four.
  const step = Math.max(1, Math.floor(gallery2025.length / SLOTS.length));

  const photos = SLOTS.map((slot, index) => ({
    ...slot,
    src: publicImage(slot.file) ?? gallery2025[index * step]?.src,
  }));

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-high border-y border-on-surface/5">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-md">
            The 2025 Retrospective
          </h2>
          <p className="text-on-surface-variant font-body-md mt-2">
            Relive the energy and innovation from last year&rsquo;s event.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.file}
              className={`h-64 rounded-xl overflow-hidden editorial-border relative${photo.offset ? " md:mt-12" : ""}`}
            >
              <ImageWithFallback
                src={photo.src}
                alt="A moment from the 2025 Tɛkyerɛma Pa Hackathon"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                fallback={<ImagePlaceholder />}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
