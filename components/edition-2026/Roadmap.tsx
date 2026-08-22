import Icon from "@/components/shared/Icon";

const DETAILED_TIMELINE_URL =
  "https://docs.google.com/document/d/1Bbn_g1J1NKjp856bTVPoqBhWVtXE3HLb/edit?usp=sharing&ouid=112393053722192340525&rtpof=true&sd=true";

const PHASES = [
  {
    phase: "Pre-Hackathon",
    items: [
      { activity: "Registration", date: "July to August" },
      {
        activity: "Awareness Campaign & Team Outreach",
        date: "August",
      },
      { activity: "Online Bootcamp", date: "August" },
      {
        activity: "Ideation Sprint & Mentor Reviews",
        date: "September to October",
      },
    ],
  },
  {
    phase: "Hackathon Week",
    items: [
      { activity: "In-person Mentoring", date: "October" },
      { activity: "Grand Finale", date: "October", highlight: true },
    ],
  },
  {
    phase: "Post-Hackathon",
    items: [
      {
        activity: "Post-Hackathon Follow-up",
        date: "November to December",
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

        <a
          href={DETAILED_TIMELINE_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 font-body-md font-bold text-primary underline decoration-primary/40 underline-offset-4 transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          View the detailed timelines here
          <Icon name="open_in_new" className="text-base" />
        </a>
      </div>
    </section>
  );
}
