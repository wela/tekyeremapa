import Link from "next/link";
import ImageWithFallback from "@/components/shared/ImageWithFallback";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { publicImage } from "@/lib/assets";

export default function ClosingSection() {
  return (
    <section className="bg-[#F2EDE6] py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline-md text-headline-md mb-8">
              Why Tɛkyerɛma Pa
            </h2>
            <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
              <p>
                Tɛkyerɛma Pa (meaning &ldquo;The Good Tongue&rdquo;) is not
                just a competition; it is a movement to reclaim our digital
                future. By opening up our proprietary data and models, the HCI
                Lab aims to empower the next generation of Ghanaian developers
                to build human-centered AI that understands
                us, literally.
              </p>
              <p>
                Our mission is to foster an ecosystem where language is no
                longer a barrier to digital participation. We provide the
                tools, the guidance, and the data; you provide the vision and
                the innovation to solve local problems with global standards.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/editions/2026"
                className="bg-primary text-white font-body-md font-bold px-8 py-4 rounded-[14px] hover:shadow-lg transition-all"
              >
                Enter 2026
              </Link>
              <Link
                href="/editions/2025"
                className="border border-on-surface text-on-surface font-body-md font-bold px-8 py-4 rounded-[14px] hover:bg-on-surface hover:text-white transition-all"
              >
                View 2025 Record
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-[14px] overflow-hidden aspect-[3/4]">
              <ImageWithFallback
                src={publicImage("/about/closing-1.jpg")}
                alt="Tɛkyerɛma Pa hackathon moment"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                fallback={<ImagePlaceholder />}
              />
            </div>
            <div className="pt-12">
              <div className="relative rounded-[14px] overflow-hidden aspect-[3/4]">
                <ImageWithFallback
                  src={publicImage("/about/closing-2.jpg")}
                  alt="Tɛkyerɛma Pa hackathon moment"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  fallback={<ImagePlaceholder />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
