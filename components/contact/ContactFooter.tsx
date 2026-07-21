import Link from "next/link";
import Icon from "@/components/shared/Icon";

export default function ContactFooter() {
  return (
    <footer className="w-full py-section-gap bg-surface-container border-t border-on-surface/15">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-4">
          <div className="font-display-lg text-headline-md text-primary mb-6">
            Tɛkyerɛma Pa
          </div>
          <p className="text-on-surface-variant font-body-md mb-8">
            Empowering voices through technology and linguistic innovation in
            the digital age.
          </p>
        </div>
        <div className="md:col-span-2 md:col-start-6">
          <h4 className="font-label-caps text-label-caps text-secondary mb-6">
            EXPLORE
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/editions"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Editions
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="#partner"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Partner
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-label-caps text-label-caps text-secondary mb-6">
            LEGAL
          </h4>
          <ul className="space-y-3">
            {["Privacy Policy", "Accessibility"].map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3 md:col-start-10">
          <h4 className="font-label-caps text-label-caps text-secondary mb-6">
            NEWSLETTER
          </h4>
          <div className="flex gap-2">
            <input
              className="bg-surface border border-secondary/15 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Email"
              type="text"
            />
            <button
              className="bg-secondary text-white p-2 rounded-lg"
              aria-label="Subscribe"
            >
              <Icon name="send" className="text-sm" />
            </button>
          </div>
        </div>
        <div className="md:col-span-12 border-t border-on-surface/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-label-caps text-label-caps text-on-surface-variant opacity-80">
            © 2026 Tɛkyerɛma Pa Hackathon. Empowering voices through technology.
          </span>
          <div className="flex gap-6">
            <a
              href="#"
              aria-label="Website"
              className="opacity-80 hover:opacity-100 transition-opacity text-secondary"
            >
              <Icon name="language" />
            </a>
            <a
              href="#"
              aria-label="Developers"
              className="opacity-80 hover:opacity-100 transition-opacity text-secondary"
            >
              <Icon name="terminal" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
