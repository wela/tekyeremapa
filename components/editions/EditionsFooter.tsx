import Link from "next/link";
import Icon from "@/components/shared/Icon";

export default function EditionsFooter() {
  return (
    <footer className="w-full py-section-gap bg-surface-container border-t border-on-surface/15">
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
            <li>
              <Link
                href="/editions"
                className="text-primary underline font-body-md text-body-md"
              >
                Editions
              </Link>
            </li>
            {["About", "Partner", "Contact"].map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md"
                >
                  {label}
                </a>
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
                <a
                  href="#"
                  className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 md:col-span-4 flex flex-col justify-between">
          <div>
            <h4 className="font-label-caps text-label-caps text-on-surface uppercase mb-6">
              Newsletter
            </h4>
            <div className="flex border-b border-on-surface/20 pb-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-none focus:ring-0 focus:outline-none w-full font-body-md text-body-md placeholder:text-on-surface/40"
              />
              <button className="text-primary p-1" aria-label="Subscribe">
                <Icon name="arrow_forward" />
              </button>
            </div>
          </div>
          <div className="mt-12 text-on-surface-variant font-label-caps text-[11px] opacity-60">
            © 2026 Tɛkyerɛma Pa Hackathon. Empowering voices through technology.
          </div>
        </div>
      </div>
    </footer>
  );
}
