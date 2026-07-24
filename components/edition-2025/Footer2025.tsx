import Link from "next/link";
import Icon from "@/components/shared/Icon";

export default function Footer2025() {
  return (
    <footer className="footer-dark bg-surface-container w-full py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-4">
          <Link
            href="/"
            className="inline-block font-display-lg text-headline-md text-primary mb-6"
          >
            Tɛkyerɛma Pa
          </Link>
          <p className="font-body-md text-on-surface-variant max-w-xs mb-8">
            Empowering voices through technology and community-driven
            accessibility.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Share"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hairline-border text-on-surface-variant hover:bg-white/20 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              <Icon name="share" />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hairline-border text-on-surface-variant hover:bg-white/20 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              <Icon name="mail" />
            </a>
          </div>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-label-caps text-label-caps text-primary mb-6 uppercase">
            Edition Context
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/editions/2025"
                aria-current="page"
                className="text-primary underline underline-offset-4 flex items-center gap-2"
              >
                <Icon name="radio_button_checked" className="text-sm" /> Current:
                2025
              </Link>
            </li>
            <li>
              <Link
                href="/editions/2026"
                className="text-on-surface-variant hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm transition-colors flex items-center gap-2"
              >
                Next: 2026
                <Icon name="arrow_forward" className="text-sm" />
              </Link>
            </li>
            <li>
              <Link
                href="/editions"
                className="text-on-surface-variant hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm transition-colors flex items-center gap-2"
              >
                <Icon name="grid_view" className="text-sm" /> All editions
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-label-caps text-label-caps text-primary mb-6 uppercase">
            Resources
          </h4>
          <ul className="space-y-4 font-body-md">
            <li>
              <Link
                href="/editions"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                All Editions
              </Link>
            </li>
            {["White Papers", "Privacy Policy", "Accessibility Statement"].map(
              (label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="md:col-span-12 border-t border-on-surface/15 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-caps text-label-caps text-on-surface-variant opacity-80">
            © 2026 Tɛkyerɛma Pa Hackathon. Empowering voices through technology.
          </p>
          <span className="font-label-caps text-[13px] text-on-surface-variant uppercase opacity-70">
            University of Ghana · HCI Lab
          </span>
        </div>
      </div>
    </footer>
  );
}
