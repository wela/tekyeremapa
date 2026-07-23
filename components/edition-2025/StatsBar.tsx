const STATS = [
  { value: "$5,000", label: "TOTAL PRIZE POOL" },
  { value: "5", label: "FINALIST TEAMS" },
  { value: "12", label: "MENTORS" },
  { value: "10", label: "SPONSORS" },
];

export default function StatsBar() {
  return (
    <section className="bg-surface-container-lowest hairline-border border-x-0">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dd className="font-stats-mono text-3xl text-secondary mb-2">
                {stat.value}
              </dd>
              <dt className="font-label-caps text-label-caps text-on-surface-variant">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
