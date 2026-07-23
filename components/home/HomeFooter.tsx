import Link from "next/link";

const EXPLORE = [
  { label: "Editions", href: "/editions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LEGAL = ["Privacy", "Accessibility"];

const LINK_CLASS =
  "font-body-md text-on-tertiary-fixed-variant hover:text-secondary focus-visible:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary rounded-sm transition-colors";

export default function HomeFooter() {
  return (
    <footer className="footer-dark bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-6 md:px-gutter py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-gutter">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-headline-md text-headline-md text-primary inline-block"
            >
              Tɛkyerɛma Pa
            </Link>
            <div className="accent-rule w-16 mt-5 mb-5" />
            <p className="font-body-md text-on-tertiary-fixed-variant max-w-sm leading-relaxed">
              A hackathon for Ghanaian language technology, run by the HCI Lab
              at the University of Ghana.
            </p>
          </div>

          <nav className="md:col-span-3" aria-labelledby="footer-explore">
            <h2
              id="footer-explore"
              className="font-label-caps text-label-caps text-primary uppercase mb-5"
            >
              Explore
            </h2>
            <ul className="flex flex-col gap-3">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={LINK_CLASS}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-4" aria-labelledby="footer-legal">
            <h2
              id="footer-legal"
              className="font-label-caps text-label-caps text-primary uppercase mb-5"
            >
              Legal
            </h2>
            <ul className="flex flex-col gap-3">
              {LEGAL.map((label) => (
                <li key={label}>
                  <a href="#" className={LINK_CLASS}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-on-surface/20 mt-14 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="font-body-md text-on-tertiary-fixed-variant">
            © 2026 Tɛkyerɛma Pa. Built for language and culture.
          </p>
          <p className="font-label-caps text-label-caps text-on-tertiary-fixed-variant uppercase opacity-70">
            University of Ghana · HCI Lab
          </p>
        </div>
      </div>
    </footer>
  );
}
