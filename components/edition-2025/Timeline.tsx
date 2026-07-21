const MILESTONES = [
  {
    date: "MAY 15",
    title: "Application Phase",
    text: "Nationwide call for developers, designers, and SLPs to form multidisciplinary teams focused on speech inclusivity.",
  },
  {
    date: "JUNE 20",
    title: "Mentor Matchmaking",
    text: "Pairs 30 selected teams with industry experts for technical and accessibility vetting of their initial concepts.",
  },
  {
    date: "AUGUST 12",
    title: "Main Hackathon",
    text: "48 hours of intense co-creation at the UG HCI Lab, including live testing with members of the speech-impaired community.",
  },
  {
    date: "AUGUST 18",
    title: "Demo Day",
    text: "Finalists presented to a jury of venture capitalists and accessibility advocates at the Grand Hall.",
  },
];

export default function Timeline() {
  return (
    <section className="px-margin-desktop max-w-container-max mx-auto py-section-gap">
      <h2 className="font-headline-md text-headline-md mb-12">Road to Impact</h2>
      <div className="space-y-0">
        {MILESTONES.map((milestone, index) => (
          <div
            key={milestone.date}
            className={`group flex gap-8 relative ml-4${
              index < MILESTONES.length - 1
                ? " pb-12 border-l-2 border-surface-variant"
                : ""
            }`}
          >
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary ring-4 ring-background" />
            <div className="pl-8">
              <span className="font-stats-mono text-primary text-sm">
                {milestone.date}
              </span>
              <h3 className="font-body-lg font-bold text-xl mt-1">
                {milestone.title}
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-xl">
                {milestone.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
