export default function HomeFooter() {
  return (
    <footer className="bg-surface-container-low border-t border-primary/5">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-gutter py-12 max-w-container-max mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
          <div className="font-headline-md text-headline-md text-primary">
            Tɛkyerɛma Pa
          </div>
          <p className="font-body-md text-on-tertiary-fixed-variant text-center md:text-left">
            © 2026 Tɛkyerɛma Pa. Built for language and culture.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {["Privacy", "Accessibility", "Contact"].map((label) => (
            <a
              key={label}
              href="#"
              className="font-body-md text-on-tertiary-fixed-variant hover:text-secondary transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
