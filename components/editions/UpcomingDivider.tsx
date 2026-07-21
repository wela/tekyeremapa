export default function UpcomingDivider() {
  return (
    <div className="mt-section-gap border-t border-on-surface/15 flex justify-between items-start pt-12">
      <div className="max-w-xs">
        <p className="font-stats-mono text-label-caps uppercase text-primary mb-2">
          Upcoming
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Stay tuned for the 2027 edition roadmap, launching in late Q4 2026.
        </p>
      </div>
      <div className="hidden md:block w-32 h-32 opacity-10 grayscale">
        <div
          role="img"
          aria-label="Stylized minimalist illustration of the Adinkra symbol Nkyinkyim, representing initiative, dynamism and versatility"
          className="w-full h-full bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_oNfaDt0juTDP4oBeQon3jgoNJyoKi9gIqtSyj2wStr1ZlUDyoXPg1wMibyKWxoWmVW0SXdn9FU3fwmrXOHMwS256LvwMGM3WyP8bSjKe9NlioSvjP2E6cz4-eACK1xtJwBVnF8V0fbKawEZwNEwNRgqjZKvEFOw-PW0aRf4CyNbyOzqfARf5lFlicTZnxz61xXpvepKO-ZbNS725kSJH7tCQu7awPAroJyYKdIUh8EKDvLIY8sZndTkSiEhOTtZW1qRkOD9I8pVS')",
          }}
        />
      </div>
    </div>
  );
}
