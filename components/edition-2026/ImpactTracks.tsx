import Icon from "@/components/shared/Icon";

const IMPACT_TRACKS = [
  {
    title: "Accessibility & Personalization",
    icon: "accessibility_new",
    description:
      "Design inclusive experiences that adapt to different abilities, needs, languages, and contexts.",
  },
  {
    title: "Fintech & Digital Services",
    icon: "payments",
    description:
      "Create secure, inclusive, mobile-first financial tools and digital services for underserved communities.",
  },
  {
    title: "AI & Language Technologies",
    icon: "translate",
    description:
      "Advance speech, text, and language tools that make technology work for Ghanaian and African languages.",
  },
];

export default function ImpactTracks() {
  return (
    <section className="bg-surface-container py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="mx-auto max-w-container-max">
        <div className="mb-16 text-center">
          <h2 className="font-display-lg text-headline-md">Impact Tracks</h2>
          <p className="mt-2 font-body-md text-on-surface-variant">
            Choose the area where you want to make your mark.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {IMPACT_TRACKS.map((track) => (
            <article
              key={track.title}
              className="flex min-h-72 flex-col rounded-xl bg-surface p-8 editorial-border hover-lift"
            >
              <span
                className="mb-6 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary"
                aria-hidden="true"
              >
                <Icon name={track.icon} className="text-4xl" />
              </span>
              <h3 className="font-headline-md text-[24px] leading-snug">
                {track.title}
              </h3>
              <p className="mt-3 font-body-md text-on-surface-variant">
                {track.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
