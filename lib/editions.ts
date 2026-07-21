export type EditionStatus = "open" | "complete";

export interface HomeEdition {
  year: number;
  description: string;
  status: EditionStatus;
  href?: string;
}

export interface EditionRowData {
  year: number;
  title: string;
  description: string;
  status: EditionStatus;
  href?: string;
}

// Copy for the Home page "Editions" preview section.
export const homeEditions: HomeEdition[] = [
  {
    year: 2026,
    description:
      "Theme: Future of Multimodal Communication. Focus on voice and gesture recognition.",
    status: "open",
    href: "/editions/2026",
  },
  {
    year: 2025,
    description:
      "Theme: Inclusive Innovation. Prioritizing tools for persons with speech disabilities.",
    status: "complete",
    href: "/editions/2025",
  },
  {
    year: 2024,
    description:
      "Theme: The Roots Project. Building the foundation for local language datasets.",
    status: "complete",
  },
];

// Copy for the /editions archive index.
export const editionRows: EditionRowData[] = [
  {
    year: 2026,
    title: "The Digital Ancestry Project",
    description:
      "Focusing on high-fidelity archival of tonal variations in Twi and Fante dialects using generative AI and neural audio synthesis.",
    status: "open",
    href: "/editions/2026",
  },
  {
    year: 2025,
    title: "Syntactic Harmony",
    description:
      "A cross-disciplinary hackathon dedicated to mapping the shared grammars of the Kwa language family through graph databases.",
    status: "complete",
    href: "/editions/2025",
  },
  {
    year: 2024,
    title: "The Mother Tongue API",
    description:
      "Standardizing digital interfaces for indigenous languages, resulting in 14 open-source libraries for local web developers.",
    status: "complete",
  },
  {
    year: 2023,
    title: "Resonance & Roots",
    description:
      "The inaugural summit exploring the intersection of oral traditions and machine learning in sub-Saharan Africa.",
    status: "complete",
  },
];
