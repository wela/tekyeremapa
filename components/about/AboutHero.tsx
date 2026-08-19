import ImageWithFallback from "@/components/shared/ImageWithFallback";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { publicImage } from "@/lib/assets";

export default function AboutHero() {
  return (
    <section className="bg-[#FAF8F5] pt-20 pb-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-4">
          The team behind the hackathon
        </p>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl mb-8">
          HCI Lab, University of Ghana
        </h1>
        <hr className="border-primary opacity-20 mb-8 max-w-xs" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start mb-16">
          <div className="md:col-span-8">
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Our research is driven by a singular vision:{" "}
              <span className="text-on-surface font-semibold">
                Design for change and inclusion
              </span>
              . We are a multidisciplinary team of researchers, developers, and
              designers working at the intersection of technology and human
              behavior. <a className="editorial-link" href="https://linktr.ee/DCSHCILAB">View our work →</a>
            </p>
          </div>
        </div>
        <div className="relative rounded-[14px] overflow-hidden w-full h-[400px] md:h-[500px]">
          <ImageWithFallback
            src={"/about/hero_enhanced.jpg"}
            alt="The HCI Lab team at the University of Ghana"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            fallback={<ImagePlaceholder label="Hero photo" />}
          />
        </div>
      </div>
    </section>
  );
}
