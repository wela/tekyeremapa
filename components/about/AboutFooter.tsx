import Link from "next/link";

export default function AboutFooter() {
  return (
    <footer className="w-full py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container border-t border-outline-variant">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="flex flex-col gap-4">
          <div className="font-headline-md text-headline-md text-primary tracking-tight">
            Tɛkyerɛma Pa
          </div>
          <p className="font-body-md text-on-surface-variant">
            Designing for change and inclusion through linguistic AI.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-on-surface font-bold uppercase">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary underline transition-all duration-200"
            >
              Accessibility
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary underline transition-all duration-200"
            >
              Privacy Policy
            </a>
            <Link
              href="/contact"
              className="text-on-surface-variant hover:text-primary underline transition-all duration-200"
            >
              Contact Us
            </Link>
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary underline transition-all duration-200"
            >
              Resources
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-on-surface font-bold uppercase">
            Contact
          </h4>
          <p className="text-on-surface-variant">
            HCI Lab, University of Ghana
            <br />
            Legon, Accra, Ghana
          </p>
          <div className="text-on-surface-variant mt-4 text-sm italic">
            © 2024 HCI Lab, University of Ghana. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
