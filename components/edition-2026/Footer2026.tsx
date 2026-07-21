import Link from "next/link";

export default function Footer2026() {
  return (
    <footer className="bg-surface-container border-t border-on-surface/15 w-full py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-desktop max-w-container-max mx-auto">
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
            {["About", "Partner"].map((label) => (
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
        <div className="md:col-span-2">
          <h5 className="font-label-caps text-on-surface mb-6 uppercase tracking-widest">
            Connect
          </h5>
          <ul className="space-y-4">
            {["Contact", "Privacy Policy", "Accessibility"].map((label) => (
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
          <h5 className="font-label-caps text-on-surface mb-6 uppercase tracking-widest">
            Newsletter
          </h5>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-surface border border-on-surface/15 focus:border-primary focus:outline-none rounded-lg flex-grow font-body-md px-3 py-2"
            />
            <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-caps">
              Join
            </button>
          </div>
        </div>
        <div className="md:col-span-12 mt-12 pt-12 border-t border-on-surface/5">
          <p className="text-on-surface-variant font-body-md opacity-80">
            © 2026 Tɛkyerɛma Pa Hackathon. Empowering voices through technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
