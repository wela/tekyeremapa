const SOLUTIONS = [
  {
    team: "Team EchoSync",
    name: "Akan Speak",
    award: { label: "Overall Winner", className: "bg-primary" },
    description:
      "A real-time translation tool specifically designed for Twi speakers with severe stutters, using pattern recognition to smooth out speech outputs.",
    stack: ["TensorFlow", "Flutter"],
    members: "Ama K., David O., Sarah B.",
  },
  {
    team: "Team VibeCheck",
    name: "HapticVoice",
    award: null,
    description:
      "Wearable device converting complex speech nuances into haptic vibrations for individuals with cerebral palsy to navigate smart home systems.",
    stack: ["Arduino", "Python"],
    members: "Kwame A., Isaac N.",
  },
  {
    team: "Team NeuroBridge",
    name: "Linguistix AI",
    award: { label: "Technical Excellence", className: "bg-secondary" },
    description:
      "Advanced ML model trained on 'disordered' speech datasets to improve voice-to-text accuracy for English speakers in West Africa.",
    stack: ["PyTorch", "FastAPI"],
    members: "Ekow F., Linda M., Rita G.",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline-md text-headline-md mb-2">
              Finalist Solutions
            </h2>
            <p className="text-on-surface-variant font-body-md">
              The 12 teams that defined the 2025 cohort.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.name}
              className="bg-white p-8 rounded-xl hairline-border hover-lift flex flex-col relative overflow-hidden"
            >
              {solution.award && (
                <div
                  className={`absolute top-0 right-0 ${solution.award.className} text-white px-4 py-1 font-label-caps text-[10px] tracking-tighter uppercase`}
                >
                  {solution.award.label}
                </div>
              )}
              <div className="mb-6">
                <span className="font-stats-mono text-primary text-xs uppercase">
                  {solution.team}
                </span>
                <h3 className="font-headline-md text-2xl mt-1">{solution.name}</h3>
              </div>
              <p className="font-body-md text-on-surface-variant mb-6 flex-grow">
                {solution.description}
              </p>
              <div className="space-y-4">
                <div>
                  <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">
                    TECH STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {solution.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-clay-tint text-primary px-2 py-0.5 rounded-full font-stats-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-on-surface/5">
                  <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">
                    TEAM
                  </span>
                  <p className="font-body-md text-sm">{solution.members}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
