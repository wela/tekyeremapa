import Icon from "@/components/shared/Icon";
import { faqs } from "@/lib/edition-2025";

export default function Faq() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="font-headline-md text-headline-md mb-2">
          Any Questions? Answered
        </h2>
        <p className="text-on-surface-variant font-body-md mb-12 max-w-2xl">
          The questions participants asked most often during the 2025 edition.
        </p>

        <div className="max-w-3xl">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-on-surface/15 py-5"
            >
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none font-body-lg text-body-lg text-on-surface marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary rounded-sm">
                {faq.question}
                <Icon
                  name="add"
                  className="text-secondary shrink-0 mt-1 transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="font-body-md text-body-md text-on-surface-variant mt-4 pr-12 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
