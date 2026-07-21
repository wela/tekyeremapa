const STEPS = [
  {
    number: "01",
    title: "Call for Ideas",
    dates: "Aug 1 — Sept 15",
    text: "Submit your concept and team profile. Focus on accessibility and scale within the Ghanaian ecosystem.",
    active: true,
  },
  {
    number: "02",
    title: "Hackathon Weekend",
    dates: "Oct 12 — 14",
    text: "48 hours of intense building, expert mentorship, and technical workshops at the UG campus.",
    active: false,
  },
  {
    number: "03",
    title: "The Grand Finale",
    dates: "Oct 15",
    text: "Pitch to industry leaders and MTN executives. Winners announced live at the gala event.",
    active: false,
  },
];

export default function Roadmap() {
  return (
    <section className="py-section-gap px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="font-stats-mono text-primary text-label-caps uppercase tracking-[0.2em]">
              The Journey
            </span>
            <h2 className="font-headline-md text-headline-md mt-2">
              Critical Dates &amp; Roadmap
            </h2>
          </div>
          <a
            href="#"
            className="font-label-caps text-on-surface border-b-2 border-primary hover:text-primary transition-colors"
          >
            Download PDF Schedule
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-gutter relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-on-surface/10 z-0" />
          {STEPS.map((step) => (
            <div key={step.number} className="relative z-10 group">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-on-primary mb-6 ring-8 ring-surface ring-offset-0 ${
                  step.active
                    ? "bg-primary"
                    : "bg-on-surface-variant transition-colors group-hover:bg-primary"
                }`}
              >
                <span className="font-stats-mono">{step.number}</span>
              </div>
              <h3 className="font-headline-md text-[20px] mb-2">{step.title}</h3>
              <p className="font-label-caps text-primary mb-4">{step.dates}</p>
              <p className="text-on-surface-variant text-body-md">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
