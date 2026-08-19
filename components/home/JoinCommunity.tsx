import Link from "next/link";

const WAYS = [
  // {
  //   title: "Enter",
  //   text: "Join as a team of 3-5 to build the future of communications.",
  //   linkLabel: "APPLY FOR 2026 →",
  //   href: "/editions/2026",
  // },
  {
    title: "Mentor",
    text: "Share your expertise in language, design, or engineering.",
    linkLabel: "BECOME A MENTOR →",
    href: "#",
  },
  {
    title: "Fund",
    text: "Support our mission to bridge the digital divide in Ghana.",
    linkLabel: "SPONSOR US →",
    href: "#",
  },
];

export default function JoinCommunity() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="max-w-container-max mx-auto px-6 md:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {WAYS.map((way) => (
            <div key={way.title}>
              <h3 className="font-headline-md text-[28px] text-primary mb-4">
                {way.title}
              </h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                {way.text}
              </p>
              {way.href === "#" ? (
                <a href="#" className="font-eyebrow text-secondary link-underline">
                  {way.linkLabel}
                </a>
              ) : (
                <Link
                  href={way.href}
                  className="font-eyebrow text-secondary link-underline"
                >
                  {way.linkLabel}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
