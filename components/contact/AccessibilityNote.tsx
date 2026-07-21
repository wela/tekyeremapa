import Icon from "@/components/shared/Icon";

export default function AccessibilityNote() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="border-t border-on-surface/15 pt-12 pb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Icon name="accessibility_new" className="text-primary" />
          <h3 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
            Accessibility First
          </h3>
        </div>
        <p className="font-body-md text-on-surface-variant max-w-xl mx-auto italic">
          We strive to make Tɛkyerɛma Pa inclusive for everyone. If you
          encounter any barriers on this site or have suggestions for improved
          usability, please email us directly at{" "}
          <span className="text-primary font-semibold">
            accessibility@tekyeremapa.org
          </span>
          .
        </p>
      </div>
    </section>
  );
}
