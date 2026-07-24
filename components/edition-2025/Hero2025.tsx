import Icon from "@/components/shared/Icon";
import ImageWithFallback from "@/components/shared/ImageWithFallback";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { firstImageIn } from "@/lib/assets";
import { getGalleryImages } from "@/lib/gallery";
import { edition2025, prizes } from "@/lib/edition-2025";

const FACTS = [
  { icon: "calendar_today", label: "Date", value: edition2025.finale.date },
  { icon: "schedule", label: "Time", value: edition2025.finale.time },
  { icon: "location_on", label: "Venue", value: edition2025.finale.venue },
];

export default function Hero2025() {
  // Uses whatever image sits in /public/edition-2025/ (any filename). If that
  // folder is empty, the first photo from the 2025 gallery stands in.
  const heroSrc =
    firstImageIn("edition-2025") ?? getGalleryImages("2025")[0]?.src;

  return (
    <section className="pt-12 pb-section-gap">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <span className="font-stats-mono text-stats-mono text-secondary uppercase tracking-widest block mb-5">
          Edition Archive · {edition2025.duration}
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-[1.05]">
              Tɛkyerɛma Pa <span className="text-secondary">(Good Tongue)</span>{" "}
              Hackathon 2025
            </h1>
            <div className="accent-rule w-28 mb-8" />
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
              A challenge to design and develop innovative applications using
              Automatic Speech Recognition (ASR) or Text-to-Speech (TTS)
              technologies, to facilitate communication in Ghanaian languages
              for individuals with speech impairment.
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="border-t-2 border-secondary/30 pt-4"
                >
                  <dt className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">
                    <Icon name={fact.icon} className="text-secondary text-lg" />
                    {fact.label}
                  </dt>
                  <dd className="font-body-md text-on-surface font-semibold">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="border-l-2 border-secondary pl-6 py-1 max-w-2xl">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Delivered in partnership between the University of Ghana and
                University College London, as part of AT2030, a programme funded
                by UK Aid and led by the Global Disability Innovation Hub. A
                curated {edition2025.dataset} dataset supported every
                team&rsquo;s project.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden hairline-border">
              <ImageWithFallback
                src={heroSrc}
                alt="The Tɛkyerɛma Pa Hackathon 2025 grand finale"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                fallback={<ImagePlaceholder label="2025 photo" />}
              />
            </div>

            <div className="p-8 bg-surface-container rounded-xl hairline-border">
              <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-6">
                Prize Pool
              </h2>
              <ul className="space-y-4">
                {prizes.map((prize, index) => (
                  <li
                    key={prize.place}
                    className={`flex items-baseline justify-between gap-4 ${
                      index < prizes.length - 1
                        ? "pb-4 border-b border-on-surface/10"
                        : ""
                    }`}
                  >
                    <span
                      className={`font-label-caps text-label-caps uppercase tracking-widest ${
                        index === 0
                          ? "text-secondary"
                          : "text-on-surface-variant"
                      }`}
                    >
                      {prize.place} place
                    </span>
                    <span
                      className={`font-stats-mono ${
                        index === 0
                          ? "text-3xl text-secondary"
                          : "text-2xl text-on-surface"
                      }`}
                    >
                      {prize.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
