const ROWS = [
  {
    label: "Duration",
    title: "48 Hours of Intensity",
    text: "A non-stop weekend of coding, designing, and cultural consultation.",
  },
  {
    label: "Location",
    title: "HCI Lab, University of Ghana",
    text: "A state-of-the-art facility designed for collaboration and deep work.",
  },
  {
    label: "Prizes",
    title: "Funding & Incubation",
    text: "Access to $10,000 in seed funding and 6 months of technical mentorship.",
  },
  {
    label: "Mentors",
    title: "Industry Experts",
    text: "Guidance from engineers at Google, linguists, and accessibility specialists.",
  },
  {
    label: "Resources",
    title: "Compute & APIs",
    text: "Free access to GPU clusters and specialized language dataset APIs.",
  },
  {
    label: "Eligibility",
    title: "Students & Professionals",
    text: "Open to all passionate builders regardless of formal background.",
  },
];

export default function WhatToExpect() {
  return (
    <section className="bg-surface py-20 md:py-section-gap">
      <div className="max-w-container-max mx-auto px-6 md:px-gutter">
        <h2 className="font-headline-md text-headline-md text-primary mb-12">
          What to expect
        </h2>
        <div className="flex flex-col">
          {ROWS.map((row, index) => (
            <div
              key={row.label}
              className={`flex flex-col md:flex-row py-8${index < ROWS.length - 1 ? " border-b border-primary/10" : ""}`}
            >
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <span className="font-eyebrow text-eyebrow text-secondary uppercase">
                  {row.label}
                </span>
              </div>
              <div className="w-full md:w-2/3">
                <p className="font-body-lg font-bold text-primary mb-1">
                  {row.title}
                </p>
                <p className="font-body-md text-on-tertiary-fixed-variant">
                  {row.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
