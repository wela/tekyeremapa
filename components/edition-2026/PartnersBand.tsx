const PARTNERS = ["MTN Ghana", "UG Legon", "TechHub", "Ghana.Gov", "Impact-X"];

export default function PartnersBand() {
  return (
    <section className="py-section-gap px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <p className="font-label-caps text-center text-on-surface-variant mb-12 tracking-[0.3em] uppercase">
          Premier Partners &amp; Supporters
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16 opacity-60 hover:opacity-100 transition-opacity">
          {PARTNERS.map((partner) => (
            <div key={partner} className="font-display-lg text-headline-md grayscale">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
