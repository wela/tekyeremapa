import Link from "next/link";

export default function Footer2026() {
  return (
    <footer className="footer-dark bg-surface-container w-full py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-4">
          <Link
            href="/"
            className="font-display-lg text-headline-md text-primary mb-6 inline-block"
          >
            Tɛkyerɛma Pa
          </Link>
          <p className="text-on-surface-variant font-body-md pr-12">
            An annual hackathon dedicated to bridging the digital divide in
            Ghana through sustainable, inclusive technology solutions.
          </p>
        </div>
        <div className="md:col-span-2">
          <h5 className="font-label-caps text-on-surface mb-6 uppercase tracking-widest">
            Explore
          </h5>
          <ul className="space-y-4">
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
              <Link
                href="/contact#partner"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Partner
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h5 className="font-label-caps text-on-surface mb-6 uppercase tracking-widest">
            Connect
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                href="/contact"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
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
        <div className="md:col-span-4">
          <h5
            id="edition-2026-newsletter"
            className="font-label-caps text-on-surface mb-6 uppercase tracking-widest"
          >
            Newsletter
          </h5>
          <form className="flex gap-2" aria-labelledby="edition-2026-newsletter">
            <label htmlFor="edition-2026-email" className="sr-only">
              Your email address
            </label>
            <input
              id="edition-2026-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              className="bg-surface text-on-surface placeholder:text-on-surface-variant border border-on-surface/25 focus:outline-none focus-visible:border-secondary focus-visible:ring-2 focus-visible:ring-secondary/50 rounded-lg flex-grow font-body-md px-3 py-2 transition-colors"
            />
            <button
              type="submit"
              className="bg-secondary text-on-secondary px-4 py-2 rounded-lg font-label-caps hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-opacity"
            >
              Join
            </button>
          </form>
        </div>
        <div className="md:col-span-12 mt-12 pt-12 border-t border-on-surface/15">
          <p className="text-on-surface-variant font-body-md opacity-80">
            © 2026 Tɛkyerɛma Pa Hackathon. Empowering voices through technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
