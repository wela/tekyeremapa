import Image from "next/image";
import Icon from "@/components/shared/Icon";

const FACTS = [
  { label: "Host", value: "University of Ghana" },
  { label: "Sponsor", value: "MTN Ghana" },
  { label: "Timeline", value: "Oct 12 — 15, 2026" },
];

export default function Hero2026() {
  return (
    <section className="relative py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-on-surface/5">
      <div className="max-w-container-max mx-auto grid md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-7 z-10">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-stats-mono text-label-caps uppercase text-primary">
              Now Open for Entries
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 text-on-surface leading-[1.1]">
            Edition <span className="text-primary italic">2026</span>: Inclusive
            Digital Solutions
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">
            Join us for the most ambitious Tɛkyerɛma Pa hackathon yet. We are
            bringing together Ghana&rsquo;s brightest minds to build scalable,
            inclusive technology that bridges the gap for underserved
            communities.
          </p>
          <div className="flex flex-wrap gap-8 items-center border-l-2 border-primary pl-6 mb-8">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <p className="font-label-caps text-on-surface-variant mb-1 uppercase tracking-widest">
                  {fact.label}
                </p>
                <p className="font-headline-md text-body-lg font-bold">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="aspect-square bg-surface-container rounded-xl overflow-hidden editorial-border p-4 relative group">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXh1ek54qtqUc1WIr_g659WYwMwIyBKWqcMfw9XW9CKNlAv2rK3GGJTOpZbZrLDPIfwgyDylDZ4xKuRaWF4Kd-o5oFO1t3AvUmSMVZGNB59fHItv02RHhnMLm8t7WBhPQKYL0gBwmUWmYxVKJh-Dxph13N9ckR1HewTvXC-zntuerQGAvGR7FOBI6buoBpjNbzD72Tjnw9b5TxGSVW2PkanMMuFir5agWLziNvtSCFPJDiNxsnO0lwtDnCdTlMXMNvHSIV0Vp-ydQI"
                alt="A modern university auditorium in Accra filled with young developers collaborating around laptops"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl editorial-border hidden lg:block">
            <div className="flex items-center gap-4">
              <Icon name="workspace_premium" className="text-primary text-4xl" />
              <div>
                <p className="font-stats-mono text-primary font-bold">
                  GHS 100,000
                </p>
                <p className="text-label-caps text-on-surface-variant uppercase">
                  Prize Pool
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
