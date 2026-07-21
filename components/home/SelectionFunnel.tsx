import Link from "next/link";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";

const FINALISTS = [
  "Asase Ye Duru",
  "Kasa-Kasa AI",
  "Onyame Ne Hene",
  "Ga-Shikpon",
  "Ewe Connect",
];

const STAGES = [
  { value: "50", label: "Teams Applied", accent: false },
  { value: "28", label: "Qualified", accent: false },
  { value: "5", label: "Finalists", accent: true },
];

export default function SelectionFunnel() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="max-w-container-max mx-auto px-6 text-center">
        <h2 className="font-headline-md text-headline-md text-primary mb-16">
          2025 Selection Funnel
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          {STAGES.map((stage, index) => (
            <div key={stage.label} className="contents">
              {index > 0 && (
                <>
                  <Icon
                    name="arrow_forward"
                    className="text-secondary text-4xl hidden md:block"
                  />
                  <Icon
                    name="arrow_downward"
                    className="text-secondary text-4xl md:hidden"
                  />
                </>
              )}
              <Reveal className="flex flex-col items-center">
                <span
                  className={`font-stats-mono text-display-lg ${stage.accent ? "text-secondary" : "text-primary"}`}
                >
                  {stage.value}
                </span>
                <span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">
                  {stage.label}
                </span>
              </Reveal>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto mb-12">
          <p className="font-eyebrow text-eyebrow text-secondary uppercase mb-6">
            2025 Finalists
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {FINALISTS.map((team) => (
              <span
                key={team}
                className="font-headline-md text-lg px-6 py-2 bg-surface-container hairline rounded-lg"
              >
                {team}
              </span>
            ))}
          </div>
        </div>
        <Link
          href="/editions/2025"
          className="font-body-md text-secondary border border-secondary px-8 py-3 rounded-full hover:bg-secondary/5 transition-colors"
        >
          View 2025 Record
        </Link>
      </div>
    </section>
  );
}
