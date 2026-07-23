import { milestones } from "@/lib/edition-2025";

export default function Timeline() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
      <h2 className="font-headline-md text-headline-md mb-12">Timelines</h2>
      <ol className="space-y-0">
        {milestones.map((milestone, index) => (
          <li
            key={milestone.date}
            className={`group flex gap-8 relative ml-4${
              index < milestones.length - 1
                ? " pb-12 border-l-2 border-surface-variant"
                : ""
            }`}
          >
            <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-secondary ring-4 ring-background" />
            <div className="pl-8">
              <span className="font-stats-mono text-secondary text-sm">
                {milestone.date}
              </span>
              <h3 className="font-body-lg font-bold text-xl mt-1">
                {milestone.title}
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-xl mt-1">
                {milestone.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
