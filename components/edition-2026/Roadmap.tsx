const PHASES = [
  {
    phase: "Pre-Hackathon",
    items: [
      { activity: "Registration", date: "July 20 – August 10, 2026" },
      {
        activity: "Awareness Campaign & Team Outreach",
        date: "August 3 – August 10, 2026",
      },
      { activity: "Online Bootcamp", date: "August 11 – 31, 2026" },
      {
        activity: "Ideation Sprint & Mentor Reviews",
        date: "September 1 – October 23, 2026",
      },
    ],
  },
  {
    phase: "Hackathon Week",
    items: [
      { activity: "In-person Mentoring", date: "October 26 – 29, 2026" },
      { activity: "Grand Finale", date: "October 30, 2026", highlight: true },
    ],
  },
  {
    phase: "Post-Hackathon",
    items: [
      {
        activity: "Post-Hackathon Follow-up",
        date: "November 1 – December 10, 2026",
      },
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="max-w-xl mb-16">
          <span className="font-stats-mono text-primary text-label-caps uppercase tracking-[0.2em]">
            The Journey
          </span>
          <h2 className="font-headline-md text-headline-md mt-2">
            Timelines
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {PHASES.map((phase) => (
            <div
              key={phase.phase}
              className="grid grid-cols-1 md:grid-cols-12 gap-gutter"
            >
              <h3 className="md:col-span-3 font-label-caps text-label-caps text-primary uppercase tracking-[0.2em]">
                {phase.phase}
              </h3>
              <ul className="md:col-span-9 border-t border-on-surface/15">
                {phase.items.map((item) => (
                  <li
                    key={item.activity}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 py-4 border-b border-on-surface/15"
                  >
                    <span
                      className={`font-body-lg text-body-lg ${
                        "highlight" in item && item.highlight
                          ? "text-primary font-bold"
                          : "text-on-surface"
                      }`}
                    >
                      {item.activity}
                    </span>
                    <span
                      className={`font-stats-mono text-stats-mono shrink-0 ${
                        "highlight" in item && item.highlight
                          ? "text-primary"
                          : "text-on-surface-variant"
                      }`}
                    >
                      {item.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
