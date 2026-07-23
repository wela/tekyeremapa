import ImageWithFallback from "@/components/shared/ImageWithFallback";
import Icon from "@/components/shared/Icon";
import { sponsors } from "@/lib/edition-2025";
import { publicImage } from "@/lib/assets";

export default function SponsorsBand() {
  return (
    <section className="bg-surface py-20 border-t border-on-surface/10">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="text-center font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase mb-12">
          Sponsors
        </h2>
        <ul className="flex flex-wrap justify-center items-start gap-x-12 gap-y-10">
          {sponsors.map((sponsor) => (
            <li
              key={sponsor.name}
              className="flex flex-col items-center gap-4 w-44 md:w-52"
            >
              <div className="h-20 md:h-24 flex items-center justify-center">
                <ImageWithFallback
                  src={publicImage(sponsor.logo)}
                  alt={`${sponsor.name} logo`}
                  width={280}
                  height={112}
                  className="max-h-20 md:max-h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  fallback={
                    <span className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
                      <Icon
                        name="apartment"
                        className="text-2xl text-on-surface-variant opacity-50"
                      />
                    </span>
                  }
                />
              </div>
              <span className="font-body-md text-body-md font-medium text-on-surface text-center leading-snug">
                {sponsor.name}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-center font-body-md text-sm text-on-surface-variant mt-12 max-w-2xl mx-auto">
          The Centre for Digital Language Inclusion is led by the Global
          Disability Innovation Hub in partnership with UCL and the University
          of Ghana, funded by UK Aid&rsquo;s AT2030 programme, alongside support
          from google.org.
        </p>
      </div>
    </section>
  );
}
