import Icon from "@/components/shared/Icon";

export default function ImpactTracks() {
  return (
    <section className="py-section-gap px-margin-desktop bg-surface-container">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-md">Impact Tracks</h2>
          <p className="text-on-surface-variant font-body-md mt-2">
            Where will you make your mark?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 p-10 bg-surface rounded-xl hover-lift editorial-border flex flex-col justify-between min-h-[400px]">
            <div>
              <Icon name="payments" className="text-primary text-5xl mb-6" />
              <h3 className="font-display-lg text-headline-md mb-4">
                Fintech For All
              </h3>
              <p className="text-body-lg text-on-surface-variant max-w-lg">
                Designing financial tools for the unbanked, leveraging USSD,
                voice recognition, and offline blockchain solutions to ensure no
                one is left behind.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["USSD", "Micro-Insurance", "Offline Payments"].map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/10 text-primary font-stats-mono text-label-caps px-3 py-1 rounded-full uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 p-8 bg-surface rounded-xl hover-lift editorial-border">
            <Icon name="health_metrics" className="text-primary text-4xl mb-6" />
            <h3 className="font-headline-md text-[24px] mb-3">Rural Health</h3>
            <p className="text-body-md text-on-surface-variant">
              Connecting remote clinics to urban specialists via low-bandwidth
              telemedicine platforms.
            </p>
          </div>
          <div className="md:col-span-4 p-8 bg-surface rounded-xl hover-lift editorial-border">
            <Icon name="agriculture" className="text-primary text-4xl mb-6" />
            <h3 className="font-headline-md text-[24px] mb-3">Agri-Logistics</h3>
            <p className="text-body-md text-on-surface-variant">
              Optimizing the supply chain for smallholder farmers using IoT and
              predictive analytics.
            </p>
          </div>
          <div className="md:col-span-8 p-10 bg-primary text-on-primary rounded-xl hover-lift flex items-center gap-8 group">
            <div className="max-w-md">
              <h3 className="font-display-lg text-headline-md mb-4 text-on-primary">
                The Open Track
              </h3>
              <p className="opacity-90">
                Have a solution that doesn&rsquo;t fit a box? Our wild-card
                track welcomes any radical innovation targeting digital
                inclusion in West Africa.
              </p>
            </div>
            <Icon
              name="lightbulb"
              className="text-[120px] opacity-20 transition-transform group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
