import Link from "next/link";
import Icon from "@/components/shared/Icon";

const NAVIGATION = [
  { label: "Editions", href: "/editions", current: true },
  { label: "About", href: "/about" },
  { label: "Partner", href: "/contact#partner" },
  { label: "Contact", href: "/contact" },
];

const LINK_CLASS =
  "text-on-surface-variant hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm transition-colors duration-200 font-body-md text-body-md";

export default function EditionsFooter() {
  return (
    <footer className="footer-dark w-full py-section-gap bg-surface-container">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-4 mb-8 md:mb-0">
          <Link href="/" className="font-display-lg text-headline-md text-primary">
            Tɛkyerɛma Pa
          </Link>
          <p className="mt-4 text-on-surface-variant font-body-md text-body-md max-w-xs">
            Empowering the next generation of Ghanaian linguists through
            collaborative technology and innovative hackathons.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-label-caps text-label-caps text-on-surface uppercase mb-6">
            Navigation
          </h4>
          <ul className="space-y-3">
            {NAVIGATION.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={
                    item.current
                      ? "text-primary underline underline-offset-4 font-body-md text-body-md"
                      : LINK_CLASS
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-label-caps text-label-caps text-on-surface uppercase mb-6">
            Legal
          </h4>
          <ul className="space-y-3">
            {["Privacy Policy", "Accessibility Statement"].map((label) => (
              <li key={label}>
                <a href="#" className={LINK_CLASS}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 md:col-span-4 flex flex-col justify-between">
          <div>
            <h4
              id="editions-newsletter"
              className="font-label-caps text-label-caps text-on-surface uppercase mb-6"
            >
              Newsletter
            </h4>
            <form aria-labelledby="editions-newsletter">
              <div className="flex items-center border-b border-on-surface/30 pb-2 focus-within:border-secondary transition-colors">
                <label htmlFor="editions-email" className="sr-only">
                  Your email address
                </label>
                <input
                  id="editions-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Your email address"
                  className="bg-transparent border-none focus:outline-none w-full font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant"
                />
                <button
                  type="submit"
                  className="text-primary p-1 rounded-full hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                >
                  <span className="sr-only">Subscribe</span>
                  <Icon name="arrow_forward" />
                </button>
              </div>
            </form>
          </div>
          <p className="mt-12 text-on-surface-variant font-label-caps text-[14px] opacity-60">
            © 2026 Tɛkyerɛma Pa Hackathon. Empowering voices through technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
