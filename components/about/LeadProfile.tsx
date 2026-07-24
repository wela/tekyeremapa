import ImageWithFallback from "@/components/shared/ImageWithFallback";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { publicImage } from "@/lib/assets";

const FOCUS_AREAS = [
  "Persuasive Tech",
  "HCI",
  "VR",
  "NLP for Low-Resource Languages",
];

export default function LeadProfile() {
  return (
    <section className="bg-[#F2EDE6] py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <div className="relative rounded-[14px] overflow-hidden aspect-[3/4]">
            <ImageWithFallback
              src={publicImage("/about/lead-isaac-wiafe.png")}
              alt="Portrait of Prof. Isaac Wiafe"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              fallback={<ImagePlaceholder icon="person" label="Lead photo" />}
            />
          </div>
        </div>
        <div className="md:col-span-7">
          <h2 className="font-headline-md text-headline-md mb-2">
            Prof. Isaac Wiafe
          </h2>
          <p className="font-body-md text-on-surface-variant mb-6 italic">
            Professor of Information Technology, University of Ghana
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {FOCUS_AREAS.map((area) => (
              <span
                key={area}
                className="bg-primary/10 text-primary font-stats-mono text-stats-mono px-3 py-1 rounded-full uppercase"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              Under Prof. Wiafe&rsquo;s leadership, the HCI Lab has transformed
              from a local research initiative into a globally recognized hub
              for indigenous technology innovation. His vision centers on the
              belief that for technology to be truly transformative in Africa,
              it must be built upon the linguistic and cultural foundations of
              its people.
            </p>
            <p>
              He spearheads our commitment to the Tɛkyerɛma Pa hackathon,
              ensuring that every dataset generated and every model built
              serves the goal of linguistic equity and digital sovereignty for
              Ghanaian languages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
