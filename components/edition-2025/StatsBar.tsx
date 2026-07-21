const STATS = [
  { value: "420", label: "REGISTRANTS" },
  { value: "12", label: "FINALIST TEAMS" },
  { value: "$15k", label: "GRANT POOL" },
  { value: "4", label: "LIVE PILOTS" },
];

export default function StatsBar() {
  return (
    <section className="bg-surface-container-lowest hairline-border border-x-0">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-stats-mono text-3xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
