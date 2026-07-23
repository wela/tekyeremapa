import Icon from "@/components/shared/Icon";
import { edition2025, prizes } from "@/lib/edition-2025";

const FACTS = [
  { icon: "calendar_today", label: "Date", value: edition2025.finale.date },
  { icon: "schedule", label: "Time", value: edition2025.finale.time },
  { icon: "location_on", label: "Venue", value: edition2025.finale.venue },
];

export default function Hero2025() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-16 pb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div className="md:col-span-7">
        <span className="font-stats-mono text-stats-mono text-secondary uppercase tracking-widest block mb-4">
          Edition Archive · {edition2025.duration}
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-none">
          Tɛkyerɛma Pa (Good Tongue) Hackathon 2025
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">
          A challenge to design and develop innovative applications using
          Automatic Speech Recognition (ASR) or Text-to-Speech (TTS)
          technologies, to facilitate communication in Ghanaian languages for
          individuals with speech impairment.
        </p>

        <dl className="flex flex-col sm:flex-row flex-wrap gap-x-10 gap-y-4 mb-10">
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex items-start gap-3">
              <Icon name={fact.icon} className="text-secondary mt-0.5" />
              <div>
                <dt className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">
                  {fact.label}
                </dt>
                <dd className="font-body-md text-on-surface max-w-[15rem]">
                  {fact.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="max-w-2xl border-l-2 border-secondary pl-8 py-2">
          <p className="font-body-md text-body-md text-on-surface">
            Delivered in partnership between the University of Ghana and
            University College London, as part of AT2030 — a programme funded by
            UK Aid and led by the Global Disability Innovation Hub. A curated{" "}
            {edition2025.dataset} dataset supported every team&rsquo;s project.
          </p>
        </div>
      </div>

      <div className="md:col-span-5 flex flex-col justify-end">
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
                    index === 0 ? "text-secondary" : "text-on-surface-variant"
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
    </section>
  );
}
