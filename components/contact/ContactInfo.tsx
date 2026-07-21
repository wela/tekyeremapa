import Icon from "@/components/shared/Icon";

export default function ContactInfo() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
        <div className="bg-surface-container-lowest border border-on-surface/15 rounded-xl p-8 card-lift">
          <div className="space-y-6">
            <div className="hairline-rule pb-4">
              <span className="font-label-caps text-label-caps text-primary block mb-2">
                EMAIL
              </span>
              <span className="font-headline-md text-headline-md text-secondary lowercase break-all">
                hello@tekyeremapa.org
              </span>
            </div>
            <div className="hairline-rule pb-4">
              <span className="font-label-caps text-label-caps text-primary block mb-2">
                LAB
              </span>
              <span className="font-body-lg text-body-lg text-secondary">
                CS Innovation Hub
              </span>
            </div>
            <div className="hairline-rule pb-4">
              <span className="font-label-caps text-label-caps text-primary block mb-2">
                ADDRESS
              </span>
              <span className="font-body-lg text-body-lg text-secondary leading-tight">
                University of Ghana, <br />
                Legon Boundary Rd, Accra
              </span>
            </div>
            <div className="pb-2">
              <span className="font-label-caps text-label-caps text-primary block mb-2">
                SOCIAL
              </span>
              <div className="flex gap-4">
                {["public", "share", "alternate_email"].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    <Icon name={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden h-full min-h-[400px]">
          <div
            role="img"
            aria-label="A serene open-air university corridor in Ghana with warm terracotta surfaces and soft morning sunlight"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWMHpofwoxDQN_7VmyIfNRin3wTIOSK8_N7EN6yv09HOxtcx16OMigbFxzC-iIVPqgXDo1WNO5uqE6tUnpsWOyinS1T2sjB8-hmbYNvMxQ5Ywjnu3wP00P2b_eh-JWV3hZXvDzE03AbYC6cVG2OV5G70cEct2gRYrGDoQGAacUPcTHlNXEn08l2k-jX-PyKAu3YnX-QUXm02qKUXupjx2CeA_-3NjJC2SUGUEIeqQ_MO1JERlCE7OGBcOQ9UV2e_-E9XW_i8ay3NRi')",
            }}
          />
          <div className="absolute inset-0 bg-secondary/10" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-surface/90 backdrop-blur-md p-4 rounded-lg border border-white/20">
              <p className="font-stats-mono text-stats-mono text-primary uppercase">
                Current Status
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-body-md text-secondary font-semibold">
                  Admissions Open for 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
