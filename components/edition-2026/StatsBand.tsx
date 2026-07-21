const STATS = [
  { value: "2,500+", label: "Applicants" },
  { value: "120", label: "Finalists" },
  { value: "30", label: "Mentors" },
  { value: "12", label: "Tracks" },
];

export default function StatsBand() {
  return (
    <section className="py-section-gap px-margin-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <div className="grid md:grid-cols-4 gap-gutter text-center">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-8${index < STATS.length - 1 ? " md:border-r md:border-on-surface/5" : ""}`}
            >
              <p className="font-display-lg text-primary text-[56px] mb-2">
                {stat.value}
              </p>
              <p className="font-label-caps text-on-surface-variant uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
