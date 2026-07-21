import Link from "next/link";
import Icon from "@/components/shared/Icon";

export default function Footer2025() {
  return (
    <footer className="bg-surface-container w-full py-section-gap border-t border-on-surface/15">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-4">
          <div className="font-display-lg text-headline-md text-primary mb-6">
            Tɛkyerɛma Pa
          </div>
          <p className="font-body-md text-on-surface-variant max-w-xs mb-8">
            Empowering voices through technology and community-driven
            accessibility.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Share"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white hairline-border text-on-surface-variant hover:text-primary transition-colors"
            >
              <Icon name="share" />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white hairline-border text-on-surface-variant hover:text-primary transition-colors"
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
              <a
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
              >
                <Icon name="arrow_back" className="text-sm" /> Previous: 2024
                (Dyslexia)
              </a>
            </li>
            <li>
              <Link
                href="/editions/2025"
                className="text-primary underline flex items-center gap-2"
              >
                <Icon name="radio_button_checked" className="text-sm" /> Current:
                2025
              </Link>
            </li>
            <li>
              <Link
                href="/editions/2026"
                className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
              >
                Next: 2026 (Mobility)
                <Icon name="arrow_forward" className="text-sm" />
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
        <div className="md:col-span-12 border-t border-on-surface/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-caps text-label-caps text-on-surface-variant opacity-80">
            © 2026 Tɛkyerɛma Pa Hackathon. Empowering voices through technology.
          </p>
          <div className="flex gap-8">
            <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">
              DESIGNED BY ACADEMIA UI
            </span>
            <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">
              BUILT WITH IMPACT
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
