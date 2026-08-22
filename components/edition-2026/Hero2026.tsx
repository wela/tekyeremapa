import Image from "next/image";
import Icon from "@/components/shared/Icon";
import ImageWithFallback from "@/components/shared/ImageWithFallback";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { publicImage } from "@/lib/assets";
import { getGalleryImages } from "@/lib/gallery";

const FACTS = [
  { label: "Host", value: "University of Ghana" },
  { label: "Sponsor", value: "MTN Ghana" },
  { label: "Timeline", value: "July to October" },
  { label: "Grand Finale", value: "October" },
];

export default function Hero2026() {
  // Prefer /public/edition-2026/hero.jpg; otherwise use a real 2025 photo so
  // the hero is never blank.
  const heroSrc =
    publicImage("/edition-2026/hero.jpg") ?? getGalleryImages("2025")[40]?.src;

  return (
    <section className="relative py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-on-surface/5">
      <div className="max-w-container-max mx-auto grid md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-7 z-10">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/brand/mtn-logo.svg"
              alt="MTN"
              width={72}
              height={72}
              className="h-14 w-14 rounded-lg shadow-sm"
            />
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-stats-mono text-label-caps uppercase text-on-surface">
                Edition 2026 · Closed for entries
              </span>
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 text-on-surface leading-[1.1]">
            <span className="text-primary">MTN GHANA</span> Tɛkyerɛma Pa Hackathon 2026
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">
            This hackathon challenges teams to design and develop inclusive digital solutions that support communication in Ghanaian languages. All solutions must beaccessible to persons with disabilities.
          </p>
          <div className="flex flex-wrap gap-8 items-center border-l-2 border-primary pl-6 mb-8">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <p className="font-label-caps text-on-surface-variant mb-1 uppercase tracking-widest">
                  {fact.label}
                </p>
                <p className="font-headline-md text-body-lg font-bold">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="aspect-square bg-surface-container rounded-xl overflow-hidden editorial-border p-4 relative group">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <ImageWithFallback
                src={heroSrc}
                alt="MTN Tɛkyerɛma Pa Hackathon 2026"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                fallback={<ImagePlaceholder label="Hero photo" />}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl editorial-border hidden lg:block">
            <div className="flex items-center gap-4">
              <Icon name="workspace_premium" className="text-primary text-4xl" />
              <div>
                <p className="font-stats-mono text-primary font-bold">
                  GHS 100,000
                </p>
                <p className="text-label-caps text-on-surface-variant uppercase">
                  Prize Pool
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
