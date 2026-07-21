import Link from "next/link";

export default function WhyItMatters() {
  return (
    <section className="bg-surface py-20 md:py-24 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="font-headline-md text-headline-md text-primary mb-6">
          Why this matters
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
          Most digital tools are built for English or French, leaving millions
          of local language speakers disconnected. Our goal is to fill this gap
          by empowering developers to build tools that speak the language of
          the people.
        </p>
        <Link
          href="/about"
          className="font-body-md text-secondary border border-secondary px-8 py-3 rounded-full hover:bg-secondary/5 transition-colors"
        >
          Learn more about us
        </Link>
      </div>
    </section>
  );
}
