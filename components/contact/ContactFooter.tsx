import Link from "next/link";
import Icon from "@/components/shared/Icon";

export default function ContactFooter() {
  return (
    <footer className="footer-dark w-full py-section-gap bg-surface-container">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-4">
          <Link
            href="/"
            className="inline-block font-display-lg text-headline-md text-primary mb-6"
          >
            Tɛkyerɛma Pa
          </Link>
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
          <h4
            id="contact-newsletter"
            className="font-label-caps text-label-caps text-secondary mb-6"
          >
            NEWSLETTER
          </h4>
          <form className="flex gap-2" aria-labelledby="contact-newsletter">
            <label htmlFor="contact-email" className="sr-only">
              Your email address
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email"
              className="bg-surface text-on-surface placeholder:text-on-surface-variant border border-on-surface/25 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary transition-colors"
            />
            <button
              type="submit"
              className="bg-secondary text-on-secondary p-2 rounded-lg hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity"
            >
              <span className="sr-only">Subscribe</span>
              <Icon name="send" className="text-sm" />
            </button>
          </form>
        </div>
        <div className="md:col-span-12 border-t border-on-surface/15 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
