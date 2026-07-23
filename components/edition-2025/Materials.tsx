import Icon from "@/components/shared/Icon";
import { materials } from "@/lib/edition-2025";

export default function Materials() {
  if (materials.length === 0) return null;

  return (
    <section
      id="materials"
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap scroll-mt-24"
    >
      <h2 className="font-headline-md text-headline-md mb-2">
        Hackathon Materials
      </h2>
      <p className="text-on-surface-variant font-body-md mb-12 max-w-2xl">
        The decks shared with participants during the 2025 edition, free to
        download and reuse.
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {materials.map((material) => (
          <li key={material.file}>
            <a
              href={material.file}
              download
              className="group flex items-start gap-5 p-6 bg-surface-container-lowest rounded-xl hairline-border card-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary h-full"
            >
              <span
                className="w-12 h-12 shrink-0 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center"
                aria-hidden="true"
              >
                <Icon name="slideshow" className="text-2xl" />
              </span>
              <span className="flex-grow">
                <span className="block font-body-lg font-bold text-on-surface mb-1">
                  {material.title}
                </span>
                <span className="block font-body-md text-sm text-on-surface-variant mb-3">
                  {material.description}
                </span>
                <span className="flex items-center gap-2 font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                  Download {material.format}
                  {material.size && ` · ${material.size}`}
                  <Icon
                    name="download"
                    className="text-base group-hover:translate-y-0.5 transition-transform"
                  />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
