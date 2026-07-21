import Icon from "@/components/shared/Icon";

const PATHS = [
  {
    icon: "corporate_fare",
    title: "Corporate Sponsorship",
    text: "Direct funding and hardware resources to scale the hackathon across multiple regions.",
    linkLabel: "LEARN MORE",
  },
  {
    icon: "school",
    title: "Academic Collaboration",
    text: "Research partnerships, data sharing agreements, and curriculum integration opportunities.",
    linkLabel: "VIEW LABS",
  },
  {
    icon: "groups",
    title: "Community Partnership",
    text: "Grassroots outreach, linguistic consulting, and local mentorship programs.",
    linkLabel: "JOIN US",
  },
];

export default function PartnerSection() {
  return (
    <section
      id="partner"
      className="bg-surface-container py-section-gap border-y border-on-surface/15 scroll-mt-24"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-secondary mb-4">
            Partner with Us
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Join our mission to empower voices through technology. We seek
            long-term alliances that provide sustainable value to the
            linguistic landscape of Africa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATHS.map((path) => (
            <div
              key={path.title}
              className="bg-surface rounded-xl p-8 border border-on-surface/5 flex flex-col h-full card-lift"
            >
              <Icon name={path.icon} className="text-primary text-4xl mb-6" />
              <h3 className="font-headline-md text-headline-md text-secondary mb-4">
                {path.title}
              </h3>
              <p className="text-on-surface-variant flex-grow mb-8">{path.text}</p>
              <a
                href="#"
                className="font-label-caps text-label-caps text-primary flex items-center gap-2 hover:gap-3 transition-all"
              >
                {path.linkLabel} <Icon name="arrow_forward" className="text-sm" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
