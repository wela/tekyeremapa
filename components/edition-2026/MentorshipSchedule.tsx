import Icon from "@/components/shared/Icon";

const MEETING_URL =
  "https://teams.microsoft.com/meet/328612147684371?p=VMuk2xbTTW26WQq6vE";

interface MentorshipDay {
  day: string;
  date: string;
  category: string;
  sessions: {
    period: "Morning" | "Evening";
    mentor?: string;
  }[];
}

const MENTORSHIP_DAYS: MentorshipDay[] = [
  {
    day: "Monday",
    date: "24 August",
    category: "Business, Engineering & Impact",
    sessions: [
      { period: "Morning", mentor: "Mr. Benjamin Arhin-Acquuah" },
      { period: "Evening", mentor: "Mr. Benjamin Arhin-Acquuah" },
    ],
  },
  {
    day: "Tuesday",
    date: "25 August",
    category: "Computer Vision & Agentic AI",
    sessions: [
      { period: "Morning", mentor: "Prof. Justice Kwame Appati" },
      { period: "Evening", mentor: "Mr. Labaran Adamu Mohammed" },
    ],
  },
  {
    day: "Wednesday",
    date: "26 August",
    category: "Accessibility & Personalization",
    sessions: [
      { period: "Morning", mentor: "Prof. Augustina Naami" },
      { period: "Evening", mentor: "Mr. Timothy Owusu" },
    ],
  },
  {
    day: "Thursday",
    date: "27 August",
    category: "Fintech & Digital Services",
    sessions: [
      { period: "Morning", mentor: "Mr. Joshua Kwabla" },
      { period: "Evening" },
    ],
  },
  {
    day: "Friday",
    date: "28 August",
    category: "AI & Language Technologies",
    sessions: [
      { period: "Morning", mentor: "Ms. Akosua Wiafe-Akenten" },
      { period: "Evening", mentor: "Mr. Evans Kwasi" },
    ],
  },
  {
    day: "Saturday",
    date: "29 August",
    category: "UX/UI",
    sessions: [
      { period: "Morning", mentor: "Dr. Sarah Dsane" },
      { period: "Evening", mentor: "Mr. Praise Olutuase" },
    ],
  },
];

export default function MentorshipSchedule() {
  return (
    <section
      id="mentorship-schedule"
      aria-labelledby="mentorship-schedule-title"
      className="bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop"
    >
      <div className="mx-auto max-w-container-max">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="font-stats-mono text-label-caps uppercase tracking-[0.2em] text-primary">
              Online Bootcamp
            </span>
            <h2
              id="mentorship-schedule-title"
              className="mt-2 font-headline-md text-headline-md"
            >
              Mentorship Schedule
            </h2>
          </div>
          <p className="font-body-md text-on-surface-variant md:col-span-5">
            Meet the experts guiding each impact area from 24–29 August 2026.
            We encourage all to join both sessions on Microsoft Teams.
          </p>
        </div>

        <ol className="border-t border-on-surface/15">
          {MENTORSHIP_DAYS.map((item) => (
            <li
              key={item.day}
              className="grid grid-cols-1 gap-5 border-b border-on-surface/15 py-7 lg:grid-cols-12 lg:gap-gutter"
            >
              <div className="lg:col-span-3">
                <p className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-primary">
                  {item.day}
                </p>
                <p className="mt-1 font-stats-mono text-stats-mono text-on-surface-variant">
                  {item.date} 2026
                </p>
                <h3 className="mt-3 max-w-xs font-body-lg text-body-lg font-bold leading-snug text-on-surface">
                  {item.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-9">
                {item.sessions.map((session) => (
                  <article
                    key={session.period}
                    className="flex h-full flex-col rounded-xl bg-surface p-5 editorial-border"
                  >
                    <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                      {session.period} session
                    </p>
                    <p className="mt-2 flex-grow font-body-md font-bold text-on-surface">
                      {session.mentor ?? "Mentor details coming soon"}
                    </p>
                    <a
                      href={MEETING_URL}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Join the ${session.period.toLowerCase()} mentorship session for ${item.category} on Microsoft Teams`}
                      className="mt-5 text-xs inline-flex w-fit items-center gap-2 rounded-full bg-primary px-2 py-1.5 font-label-caps text-label-caps uppercase tracking-wider text-on-primary transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Join on Teams
                      <Icon name="open_in_new" className="text-xs" />
                    </a>
                  </article>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
