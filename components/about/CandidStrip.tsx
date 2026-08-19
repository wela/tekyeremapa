import ImageWithFallback from "@/components/shared/ImageWithFallback";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { publicImage } from "@/lib/assets";

// Drop a file matching `image` into /public/about/candid/ (any extension
// resolves). `alt` describes the photo for screen readers.
const SHOTS = [
  { alt: "HCI Lab candid photo", image: "/about/candid/group-1.jpg" },
  { alt: "HCI Lab candid photo", image: "/about/candid/group-2.jpg" },
  { alt: "HCI Lab candid photo", image: "/about/candid/group-3.jpg" },
  { alt: "HCI Lab candid photo", image: "/about/candid/group-4.png" },
];

export default function CandidStrip() {
  return (
    <section className="bg-[#FAF8F5] pb-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {SHOTS.map((shot) => (
            <div
              key={shot.image}
              className="relative rounded-[14px] overflow-hidden aspect-[4/3]"
            >
              <ImageWithFallback
                src={publicImage(shot.image)}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover"
                fallback={<ImagePlaceholder />}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
