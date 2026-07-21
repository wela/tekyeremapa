import Link from "next/link";

const CHIPS = ["Innovation focus", "Community driven", "Social impact"];

export default function Hero() {
  return (
    <section className="bg-surface py-20 md:py-section-gap overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 md:px-gutter">
        <div className="max-w-3xl">
          <p className="font-eyebrow text-eyebrow text-secondary uppercase mb-4">
            University of Ghana · HCI Lab
          </p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
            Empowering communication through technology
          </h1>
          <div className="terracotta-rule w-24 mb-8" />
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
            We are dedicated to building high-impact digital tools for Ghanaian
            languages, ensuring that language is never a barrier to progress,
            healthcare, or education in our local communities.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="px-4 py-1.5 border border-primary/10 rounded-full font-stats-mono text-stats-mono text-on-surface-variant bg-surface-container-low"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/editions/2026"
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-body-md hover:scale-[0.98] transition-transform text-center"
            >
              Apply for 2026
            </Link>
            <Link
              href="/editions"
              className="border border-secondary text-secondary px-8 py-4 rounded-full font-body-md hover:bg-secondary/5 transition-colors text-center"
            >
              View Past Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
