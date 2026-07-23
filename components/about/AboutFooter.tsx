import Link from "next/link";

const QUICK_LINKS = [
  { label: "Editions", href: "/editions" },
  { label: "Contact Us", href: "/contact" },
  { label: "Accessibility", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const LINK_CLASS =
  "w-fit text-on-surface-variant hover:text-primary hover:underline focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary underline-offset-4 rounded-sm transition-colors duration-200";

export default function AboutFooter() {
  return (
    <footer className="footer-dark w-full py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-gutter">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="w-fit font-headline-md text-headline-md text-primary tracking-tight"
            >
              Tɛkyerɛma Pa
            </Link>
            <p className="font-body-md text-on-surface-variant max-w-xs">
              Designing for change and inclusion through linguistic AI.
            </p>
          </div>

          <nav className="flex flex-col gap-4" aria-labelledby="about-links">
            <h2
              id="about-links"
              className="font-label-caps text-label-caps text-on-surface font-bold uppercase"
            >
              Quick Links
            </h2>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link href={item.href} className={LINK_CLASS}>
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className={LINK_CLASS}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="font-label-caps text-label-caps text-on-surface font-bold uppercase">
              Contact
            </h2>
            <address className="not-italic font-body-md text-on-surface-variant">
              HCI Lab, University of Ghana
              <br />
              Legon, Accra, Ghana
            </address>
          </div>
        </div>

        <div className="border-t border-on-surface/20 mt-14 pt-8">
          <p className="font-label-caps text-label-caps text-on-surface-variant uppercase opacity-70">
            © 2026 HCI Lab, University of Ghana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
