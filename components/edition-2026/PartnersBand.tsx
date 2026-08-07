import Image from "next/image";
import ImageWithFallback from "@/components/shared/ImageWithFallback";
import { publicImage } from "@/lib/assets";

const PARTNERS = [
  { name: "MTN Ghana", logo: "/brand/mtn-logo.svg" },
  { name: "University of Ghana", logo: "/partners/university-of-ghana.png" },
  { name: "HCI Lab", logo: "/partners/hcilab.jpeg" },
];

export default function PartnersBand() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <p className="font-label-caps text-center text-on-surface-variant mb-12 tracking-[0.3em] uppercase">
          Premier Partners &amp; Supporters
        </p>
        <ul className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {PARTNERS.map((partner) =>
            partner.logo === "/brand/mtn-logo.svg" ? (
              <li key={partner.name}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={80}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </li>
            ) : (
              <li key={partner.name}>
                <ImageWithFallback
                  src={publicImage(partner.logo)}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  fallback={
                    <span className="font-body-lg text-body-lg text-on-surface-variant">
                      {partner.name}
                    </span>
                  }
                />
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
