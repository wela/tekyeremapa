import Image from "next/image";
import ImageWithFallback from "@/components/shared/ImageWithFallback";
import { publicImage } from "@/lib/assets";

const MTN_LOGO = "/brand/mtn-logo.svg";

const PARTNERS = [
  { name: "MTN Ghana", logo: MTN_LOGO },
  { name: "University of Ghana", logo: "/partners/university-of-ghana.png" },
  { name: "HCI Lab", logo: "/partners/hcilab.jpeg" },
];

// White cards keep the mismatched logo backgrounds (MTN's yellow tile, UG's
// transparent PNG, HCI Lab's white JPEG) looking consistent and intentional.
const CARD =
  "flex items-center justify-center h-28 md:h-32 px-8 bg-white rounded-xl hairline-border";
const LOGO = "max-h-16 md:max-h-20 w-auto object-contain";

export default function PartnersBand() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <p className="font-label-caps text-center text-on-surface-variant mb-12 tracking-[0.3em] uppercase">
          Premier Partners &amp; Supporters
        </p>
        <ul className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8">
          {PARTNERS.map((partner) => (
            <li key={partner.name} className={CARD}>
              {partner.logo === MTN_LOGO ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={112}
                  height={112}
                  className={LOGO}
                />
              ) : (
                <ImageWithFallback
                  src={publicImage(partner.logo)}
                  alt={partner.name}
                  width={280}
                  height={112}
                  className={LOGO}
                  fallback={
                    <span className="font-body-lg text-body-lg text-on-surface">
                      {partner.name}
                    </span>
                  }
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
