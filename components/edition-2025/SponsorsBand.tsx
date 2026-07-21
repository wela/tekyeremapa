import Icon from "@/components/shared/Icon";

const SPONSORS = [
  { icon: "cloud_queue", name: "Nimbus" },
  { icon: "diversity_3", name: "UnityBank" },
  { icon: "language", name: "GlobalLink" },
  { icon: "lightbulb", name: "InnoVentures" },
];

export default function SponsorsBand() {
  return (
    <section className="bg-surface py-20 border-t border-on-surface/10">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-12">
          <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">
            POWERED BY
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
          {SPONSORS.map((sponsor) => (
            <div key={sponsor.name} className="flex items-center gap-2">
              <Icon name={sponsor.icon} className="text-4xl" />
              <span className="font-display-lg text-2xl font-bold">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
