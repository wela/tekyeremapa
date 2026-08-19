export type EditionStatus = "open" | "complete" | "ongoing";

export interface Edition {
  year: number;
  sponsors: string[];
  status: EditionStatus;
  href?: string;
}

// Every edition, newest first. Shared by the Home preview and the /editions archive.
export const editions: Edition[] = [
  {
    year: 2026,
    sponsors: ["MTN"],
    status: "ongoing",
    href: "/editions/2026",
  },
  {
    year: 2025,
    sponsors: [
      "HCI Lab",
      "Google",
      "University of Ghana",
      "Global Disability Innovation Hub",
      "AT2030",
      "UK Aid",
      "CDLI Lab",
      "Project Euphonia",
    ],
    status: "complete",
    href: "/editions/2025",
  },
];
