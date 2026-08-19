import Icon from "@/components/shared/Icon";

// Cash prizes from the 2026 poster. Amounts are in Ghana Cedis (MTN Ghana).
const CASH_PRIZES = [
  { place: "2nd Prize", amount: "GH₵20,000", featured: false },
  { place: "1st Prize", amount: "GH₵70,000", featured: true },
  { place: "3rd Prize", amount: "GH₵10,000", featured: false },
];

const OTHER_PRIZES = [
  "Best Digital Experience Innovation",
  "Best Financial Inclusion Solution",
  "Best Female-Led Team",
  "Best Agentic AI Solution",
];

export default function Prizes() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-md">Prizes</h2>
          <p className="text-on-surface-variant font-body-md mt-2">
            Compete for cash rewards and category honours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-center">
          {CASH_PRIZES.map((prize) => (
            <div
              key={prize.place}
              className={`rounded-xl p-10 flex flex-col items-center text-center hover-lift ${
                prize.featured
                  ? "bg-primary text-on-primary p-18"
                  : "bg-surface editorial-border p-10"
              }`}
            >
              <Icon
                name="emoji_events"
                className={`text-5xl mb-4 ${
                  prize.featured ? "text-on-primary" : "text-primary"
                }`}
              />
              <p
                className={`font-label-caps text-label-caps uppercase tracking-widest mb-3 ${
                  prize.featured ? "text-on-primary/80" : "text-on-surface-variant"
                }`}
              >
                {prize.place}
              </p>
              <p
                className={`font-display-lg ${
                  prize.featured ? "text-[52px]" : "text-[40px]"
                } leading-none`}
              >
                {prize.amount}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-headline-md text-[24px] text-center mb-8">
            Other Prizes
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {OTHER_PRIZES.map((prize) => (
              <li
                key={prize}
                className="bg-surface editorial-border rounded-xl p-6 flex items-start gap-3"
              >
                <Icon name="star" className="text-primary text-2xl shrink-0" />
                <span className="font-body-md text-body-md text-on-surface">
                  {prize}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
