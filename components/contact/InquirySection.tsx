import Icon from "@/components/shared/Icon";
import InquiryForm from "@/components/contact/InquiryForm";

export default function InquirySection() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-4">
            <h2 className="font-display-lg text-headline-md text-secondary mb-4">
              Inquiry Form
            </h2>
            <p className="text-on-surface-variant mb-8">
              Please fill out the form and our coordination team will respond
              within 48 academic hours.
            </p>
            <div className="rounded-xl overflow-hidden border border-on-surface/15 aspect-square lg:aspect-video mb-6">
              <div className="w-full h-full bg-surface-container-high relative">
                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#0D2350_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="location_on" className="text-primary text-3xl" />
                </div>
                <div className="absolute bottom-4 left-4 bg-surface px-3 py-1 rounded text-xs font-stats-mono shadow-sm">
                  LOC: ACCRA, GH
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
