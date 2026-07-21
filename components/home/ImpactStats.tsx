import Reveal from "@/components/shared/Reveal";

const STATS = [
  { value: "150+", label: "Participants" },
  { value: "50+", label: "Projects" },
  { value: "2", label: "Countries" },
  { value: "200+", label: "Lives Impacted" },
  { value: "5", label: "Languages" },
];

export default function ImpactStats() {
  return (
    <section className="bg-[#E8EDF2] py-20 md:py-24">
      <div className="max-w-container-max mx-auto px-6 md:px-gutter">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
          {STATS.map((stat) => (
            <Reveal key={stat.label}>
              <p className="font-stats-mono text-[32px] md:text-[40px] text-primary mb-2">
                {stat.value}
              </p>
              <p className="font-eyebrow text-eyebrow text-on-tertiary-fixed-variant uppercase">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
