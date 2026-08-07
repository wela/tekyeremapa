import Icon from "@/components/shared/Icon";
import ImageWithFallback from "@/components/shared/ImageWithFallback";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { publicImage } from "@/lib/assets";

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
              <a
                href="mailto:hcidcsug@gmail.com"
                className="font-headline-md text-headline-md text-secondary lowercase break-all hover:text-primary transition-colors"
              >
                Contact email: dcshcilab@ug.edu.gh
              </a>
            </div>
            <div className="hairline-rule pb-4">
              <span className="font-label-caps text-label-caps text-primary block mb-2">
                LAB
              </span>
              <span className="font-body-lg text-body-lg text-secondary">
                HCI Lab, Department of Computer Science
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
          <ImageWithFallback
            src={publicImage("/contact/contact.jpg")}
            alt="The HCI Lab at the University of Ghana"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            fallback={<ImagePlaceholder label="Contact photo" />}
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
