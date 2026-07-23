import { aboutParagraphs, edition2025 } from "@/lib/edition-2025";

const ELIGIBILITY = [
  "Students and technology advocates",
  "Diverse teams of up to five members, with at least one female participant and, preferably, one individual with a speech impairment",
];

export default function AboutHackathon() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-7">
          <h2 className="font-headline-md text-headline-md mb-8">
            About the Hackathon
          </h2>
          <div className="space-y-5 max-w-2xl">
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside className="md:col-span-4 md:col-start-9 flex flex-col gap-8">
          <div className="p-6 bg-surface-container rounded-xl hairline-border">
            <h3 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4">
              Eligibility
            </h3>
            <ul className="space-y-3">
              {ELIGIBILITY.map((item) => (
                <li
                  key={item}
                  className="font-body-md text-body-md text-on-surface-variant"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-surface-container rounded-xl hairline-border">
            <h3 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4">
              Enquiries
            </h3>
            <dl className="space-y-3">
              <div>
                <dt className="font-body-md text-sm text-on-surface-variant mb-0.5">
                  Hackathon
                </dt>
                <dd>
                  <a
                    href={`mailto:${edition2025.contactEmail}`}
                    className="editorial-link font-body-md text-body-md break-all"
                  >
                    {edition2025.contactEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-body-md text-sm text-on-surface-variant mb-0.5">
                  {edition2025.labName}
                </dt>
                <dd>
                  <a
                    href={`mailto:${edition2025.labEmail}`}
                    className="editorial-link font-body-md text-body-md break-all"
                  >
                    {edition2025.labEmail}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4">
              {edition2025.labName}, Department of Computer Science, University
              of Ghana, Legon.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
