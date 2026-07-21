import Icon from "@/components/shared/Icon";

const BADGES = [
  { icon: "campaign", label: "Theme: Speech Impairment" },
  { icon: "calendar_today", label: "August 12 - 18, 2025" },
  { icon: "account_balance", label: "Host: UG HCI Lab" },
];

export default function Hero2025() {
  return (
    <section className="px-margin-desktop max-w-container-max mx-auto pt-16 pb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div className="md:col-span-8">
        <span className="font-stats-mono text-stats-mono text-primary uppercase tracking-widest block mb-4">
          Edition Archive
        </span>
        <h1 className="font-display-lg text-display-lg mb-6 leading-none">
          2025: Breaking the Silence
        </h1>
        <div className="flex flex-wrap gap-4 mb-8">
          {BADGES.map((badge) => (
            <div
              key={badge.label}
              className="bg-surface-container-high px-4 py-2 rounded-full flex items-center gap-2"
            >
              <Icon name={badge.icon} className="text-primary" />
              <span className="font-label-caps text-label-caps uppercase">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
        <div className="max-w-2xl border-l-2 border-primary pl-8 py-2">
          <p className="font-body-lg text-body-lg text-on-surface-variant italic mb-4">
            &ldquo;For too long, innovation has bypassed the millions of voices
            silenced by non-standard speech patterns, stuttering, and
            dysarthria.&rdquo;
          </p>
          <p className="font-body-md text-body-md text-on-surface">
            The 2025 hackathon addressed the critical exclusion of individuals
            with speech-motor impairments from mainstream voice assistants and
            communication tools. By focusing on indigenous Ghanaian languages
            and localized speech therapy challenges, we aimed to democratize
            the power of &lsquo;speaking&rsquo; in a digital-first world.
          </p>
        </div>
      </div>
      <div className="md:col-span-4 flex flex-col justify-end">
        <div className="p-6 bg-surface-container rounded-xl hairline-border">
          <span className="font-label-caps text-label-caps text-on-surface-variant block mb-4">
            LEAD SPONSOR
          </span>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hairline-border">
              <Icon name="token" className="text-primary text-3xl" />
            </div>
            <div>
              <p className="font-body-md font-bold text-on-surface">
                AfroTech Systems
              </p>
              <p className="font-label-caps text-label-caps text-on-surface-variant">
                Global Accessibility Partner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
