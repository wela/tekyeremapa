/**
 * Content for the 2025 edition (/editions/2025).
 *
 * Sourced from the hackathon flyers and the organisers' copy. Anything not yet
 * supplied is marked TODO rather than invented, see `finalistTeams` and
 * `materials`.
 */

export const edition2025 = {
  title: "Tɛkyerɛma Pa (Good Tongue) Hackathon 2025",
  tagline: "Bridging the communication gap for speech impairment",
  finale: {
    date: "May 30, 2025",
    time: "10:00am – 1:30pm",
    venue: "The Great Hall, University of Ghana, Legon",
  },
  duration: "April 7 – May 30, 2025",
  contactEmail: "speechdata@ug.edu.gh",
  labName: "HCI Lab",
  labEmail: "hcidcsug@gmail.com",
  website: "https://www.tekyeremapahackathon.com/",
  dataset: "Akan",
} as const;

export const aboutParagraphs = [
  "This project is part of AT2030, a programme funded by UK Aid and led by the Global Disability Innovation Hub. It seeks to bridge the communication gap for individuals with speech impairment through the development of technological solutions that leverage automatic speech recognition (ASR) or Text-to-Speech (TTS).",
  "The Tɛkyerɛma Pa (good tongue) Hackathon 2025 invited all university students and technology advocates to participate in creating innovative solutions that make a significant impact on individuals with speech impairments in Ghana and beyond.",
  "Participants were given the opportunity to bridge the communication gap for individuals with speech disabilities by developing technological solutions leveraging ASR or TTS tailored for Ghanaian languages. By focusing on these areas, the hackathon aimed to create accessible tools that empower individuals to communicate more effectively in their native language, breaking down barriers to inclusion.",
  "The Tɛkyerɛma Pa hackathon is a collaboration between University College London and the University of Ghana, delivered at UG, Accra, Ghana in May 2025. A curated dataset of a selected Ghanaian language, Akan, was made available to participants to support their projects.",
] as const;

export interface Prize {
  place: string;
  amount: string;
}

export const prizes: Prize[] = [
  { place: "1st", amount: "$2,500" },
  { place: "2nd", amount: "$1,500" },
  { place: "3rd", amount: "$1,000" },
];

export interface Milestone {
  date: string;
  title: string;
  text: string;
}

export const milestones: Milestone[] = [
  {
    date: "April 7–15, 2025",
    title: "Awareness campaign and team outreach",
    text: "This phase focused on promoting the hackathon, answering questions, and helping selected teams refine their pitched ideas.",
  },
  {
    date: "April 21–30, 2025",
    title: "Online bootcamp and dataset introduction",
    text: "The bootcamp introduced participants to the dataset, tools, and key skills needed for the hackathon. Teams were then screened on May 1st, and successful candidates moved on to the next stage.",
  },
  {
    date: "May 1–23, 2025",
    title: "Ideation sprint with mentor reviews",
    text: "Teams brainstormed solutions, developed initial concepts, and received feedback from mentors. The top five finalists were selected at the end of this phase.",
  },
  {
    date: "May 26–29, 2025",
    title: "In-person mentoring sessions",
    text: "Finalists arrived at the University of Ghana from May 25th. In-person mentoring sessions ran from May 26th to May 29th, ahead of the grand finale.",
  },
  {
    date: "May 30, 2025",
    title: "Hackathon event (Grand Finale)",
    text: "The top five finalists showcased their solutions and competed for the winning spots. Winners were announced and awards presented at The Great Hall, University of Ghana.",
  },
  {
    date: "June 1 onwards, 2025",
    title: "Post-event feedback and follow-up",
    text: "Reflection with teams, mentors, and partners on outcomes and next steps for the solutions built during the edition.",
  },
];

export interface Mentor {
  name: string;
  role: string;
  bio: string;
  /**
   * Headshot path under /public/mentors/2025/. A path is pre-filled for every
   * mentor; drop a file with that exact name to replace the initials avatar.
   */
  image?: string;
}

export interface MentorTrack {
  title: string;
  focus: string;
  mentors: Mentor[];
}

export const mentorTracks: MentorTrack[] = [
  {
    title: "Technical",
    focus: "AI, ASR, NLP, app development",
    mentors: [
      {
        name: "Dr. Katrin Tomanek",
        role: "AI Research Engineer",
        bio: "Specialising in Natural Language Processing, Machine Translation, and Speech Recognition. PhD in Computer Science from TU Dortmund, Germany. Former Google Research lead for ASR in Project Euphonia, now AI Tech Lead at GDI Hub's Centre for Digital Language Inclusion, working to ensure digital language technology serves everyone, regardless of speech patterns.",
        image: "/mentors/2025/katrin-tomanek.jpg",
      },
      {
        name: "Dr. Emmanuel Ahene",
        role: "AI and Cybersecurity Researcher",
        bio: "A Computer Science lecturer and Co-Founder of Cyberpass Consult, with expertise in cybersecurity and machine learning. He leads research in Secure AI, focusing on healthcare, education, and cyber-attack detection. He has published over 20 articles, supervised numerous students, and received the 2023 KNUST Vice Chancellor's Award for Innovation. As PI of the SignTalk project, he is developing a secure AI model to support doctor-patient communication for the hearing-impaired.",
        image: "/mentors/2025/emmanuel-ahene.jpg",
      },
      {
        name: "Mark Atta Mensah",
        role: "AI Researcher",
        bio: "A Lecturer and AI researcher at the University of Ghana, specialising in ASR, NLP, and Generative AI for low-resource languages. An experienced hackathon coach (Hack4Dev 2025) and EU consultant (STATS4AFRICA Residency, 2024), he mentors teams on developing inclusive, innovative, and scalable AI solutions for real-world social impact.",
        image: "/mentors/2025/mark-atta-mensah.jpg",
      },
    ],
  },
  {
    title: "Accessibility",
    focus: "UX/UI, inclusive design, user testing",
    mentors: [
      {
        name: "Dr. Tigmanshu Bhatnagar",
        role: "UX/UI, Inclusive Designer",
        bio: "A lecturer in Computer Science at UCL and a research fellow at the Global Disability Innovation Hub. With over a decade of experience, he designs assistive technologies to improve the lives of people with disabilities. He co-led India's Attvaran start-up accelerator, supporting 20 assistive tech ventures, and co-invented a patented soft pneumatic exoskeleton. His PhD project Tacilia won the Innovation of the Year 2023 award.",
        image: "/mentors/2025/tigmanshu-bhatnagar.jpg",
      },
      {
        name: "Preetham Nagaraj",
        role: "UX/UI Designer",
        bio: "Currently pursuing a PhD at UCL under the supervision of Prof. Catherine Holloway. He holds a double master's degree, an MSc in Computer Science from the University of Illinois at Chicago and an MSc in Human-Computer Interaction from UCL. Before starting his PhD, Preetham worked as a UX designer for over a decade across the US, the UK, and India, in fields such as robotics, biotechnology, and advertising.",
        image: "/mentors/2025/preetham-nagaraj.jpg",
      },
    ],
  },
  {
    title: "Speech and Language Therapy",
    focus: "Expertise in speech therapy and user needs",
    mentors: [
      {
        name: "Gifty Ayoka",
        role: "Speech and Language Therapist",
        bio: "A Speech and Language Therapist and Assistant Lecturer at the University of Health and Allied Sciences (UHAS). She is dedicated to improving communication for children and adults, with a focus on inclusion, disability rights, and accessibility. Gifty co-authored a study on automated speech recognition in Ghana and is part of a research team collecting voice data from individuals with speech impairments to support inclusive AI technologies in local languages.",
        image: "/mentors/2025/gifty-ayoka.jpg",
      },
      {
        name: "Dr. Richard Cave",
        role: "Speech and Language Therapist",
        bio: "Co-Director of the Centre for Digital Language Inclusion at UCL's Global Disability Innovation Hub. He specialises in speech recognition for 'non-standard' speech and has clinical experience with individuals affected by speech changes. He also advised the Royal College of Speech and Language Therapists and consulted for Google Research on related technologies from 2019 to 2024.",
        image: "/mentors/2025/richard-cave.jpg",
      },
    ],
  },
  {
    title: "Cultural",
    focus: "Ghanaian linguistic and contextual adaptation",
    mentors: [
      {
        name: "Dr. George Akanlig-Pare",
        role: "Professor of Linguistics",
        bio: "An Associate Professor of Linguistics at the University of Ghana, where he teaches Phonetics, Phonology, Morpho-syntax, Sign Language Linguistics, Sociophonetics, and Forensic Linguistics. A recipient of the 2011 Best Teacher Award (Humanities), he chairs the department's Graduate Studies. He has supervised 11 PhD and 40 Master's theses, and has published extensively in peer-reviewed journals.",
        image: "/mentors/2025/george-akanlig-pare.jpg",
      },
    ],
  },
  {
    title: "Business",
    focus: "Scaling solutions, impact assessment, and market viability",
    mentors: [
      {
        name: "Dr. Nana Assyne",
        role: "Software Engineer and Software Startup Engineer",
        bio: "A technology enthusiast with a background in Software Engineering and Software Startup Engineering, deeply interested in innovative problem-solving, collaborative development, and building scalable tech solutions. Nana focuses on scaling solutions, impact assessment, and market viability, ensuring that every project he contributes to is both sustainable and user-centered.",
        image: "/mentors/2025/nana-assyne.jpg",
      },
      {
        name: "Bhanu Prasad",
        role: "Entrepreneur",
        bio: "Head of Innovation and Entrepreneurship Ecosystems at Digital Impact Square (a TCS Foundation Social Incubator). As an impact innovation coach, he guides startups from concept to scale, encouraging rapid iteration and failing forward as a means of progress. Bhanu has degrees in Management from Harvard and Social Policy from Oxford, and is a British Government Chevening Fellow.",
        image: "/mentors/2025/bhanu-prasad.jpg",
      },
      {
        name: "Sameer Rawal",
        role: "Innovation Coach",
        bio: "An impact innovation coach and start-up mentor at Digital Impact Square (a TCS Foundation incubation program). He brings more than 20 years of experience in technology-led consulting and has worked with multiple social start-ups in the Assistive Technology space, helping them convert ideas into products. He is also a technology and innovation evangelist in the disabilities sector in India.",
        image: "/mentors/2025/sameer-rawal.jpg",
      },
      {
        name: "Bonny Dave",
        role: "Engineer and Entrepreneur",
        bio: "Co-founder of Trestle Labs, a first-generation engineer and entrepreneur who has spent the last 8 years using technology to break barriers. With Kibo, he has made education and employment more inclusive by bridging gaps in language, literacy, and print disabilities, transforming handwritten, printed, and multilingual content into accessible formats.",
        image: "/mentors/2025/bonny-dave.jpg",
      },
    ],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "Who is a speech impaired person?",
    answer:
      "A speech-impaired person is someone who experiences difficulty in producing spoken language or communicating verbally due to a condition or disorder affecting their speech. The conditions include stuttering/stammering, cleft palate, Down syndrome, cerebral palsy, and others.",
  },
  {
    question: "Why take part in the hackathon?",
    answer:
      "This hackathon presents a unique opportunity to develop real-world solutions to real-world problems, making a meaningful impact on the lives of millions of individuals with speech impairments.",
  },
  {
    question: "Who can participate in the hackathon?",
    answer:
      "We highly encourage diverse teams to apply. Each team can have up to five members, including at least one female and, preferably, one individual with speech impairment. If your team does not have a member with a speech impairment, it can have up to four members, and we will assign an individual with a speech impairment to your team.",
  },
  {
    question: "Whom should we contact in case of queries?",
    answer:
      "You can contact speechdata@ug.edu.gh or visit the HCI Lab, Department of Computer Science, University of Ghana, Legon.",
  },
  {
    question:
      "What if my team doesn't include a member with a speech impairment?",
    answer:
      "If your team doesn't have a member with a speech impairment, it can have up to four members. In that case, we will assign an individual with a speech impairment to your team.",
  },
  {
    question:
      "When are we expected to arrive at the University of Ghana in Accra?",
    answer:
      "If your team is among the top five finalists, you are expected to be at the University of Ghana from May 25th to May 31st, 2025. All activities before May 25th are conducted virtually.",
  },
  {
    question: "How will I know if my team has been selected?",
    answer:
      "Selection is conducted in stages. The first batch of successful applicants (teams) was notified by April 5th and the second batch by April 12th, 2025.",
  },
];

export interface Sponsor {
  name: string;
  /** Drop a logo in /public/partners and reference it here. */
  logo?: string;
}

/*
 * Drop each logo into /public/partners/ using the filename in `logo` (SVG or a
 * transparent PNG works best). The path's extension doesn't have to be exact,
 * publicImage() matches the basename against any image extension present. Until
 * a file exists, the sponsor's name shows as text automatically.
 */
export const sponsors: Sponsor[] = [
  { name: "HCI Lab", logo: "/partners/hcilab.jpeg" },
  { name: "University of Ghana", logo: "/partners/university-of-ghana.png" },
  {
    name: "Global Disability Innovation Hub",
    logo: "/partners/gdi-hub.svg",
  },
  { name: "AT2030", logo: "/partners/at2030.svg" },
  { name: "UK Aid", logo: "/partners/uk-aid.svg" },
  {
    name: "Centre for Digital Language Inclusion",
    logo: "/partners/cdli.svg",
  },
  { name: "Project Euphonia", logo: "/partners/project-euphonia.png" },
  { name: "Google", logo: "/partners/google.png" },
];

export interface Material {
  title: string;
  description: string;
  /** Path under /public. */
  file: string;
  format: string;
  /** Shown next to the download link; fill in once the file is in place. */
  size?: string;
}

/*
 * TODO: drop the two .pptx files into /public/materials/ using these exact
 * filenames. The second deck's real title was not supplied, rename `title`
 * and `file` together once you have it.
 */
export const materials: Material[] = [
  {
    title: "Teams Outreach Presentation",
    description:
      "The deck used during the awareness campaign and team outreach phase, covering the challenge, the dataset, and what teams were asked to build.",
    file:"/materials/teams outreach.pptx",
    format: "PPTX",
  }
];

export interface GalleryImage {
  src: string;
  alt: string;
  /** Optional short caption shown on hover / in the lightbox. */
  caption?: string;
}

// Gallery photos are auto-discovered from /public/gallery/2025/ at build time,
// see getGalleryImages() in lib/gallery.ts. Just drop files in that folder.

export interface TeamMember {
  name: string;
  /** e.g. "Team lead", "ML engineer", optional. */
  role?: string;
  /**
   * Individual headshot under /public/participants/2025/. Falls back to the
   * member's initials until a file with this name exists.
   */
  image?: string;
}

export interface FinalistTeam {
  /** Team name. */
  name: string;
  /** One-line summary of the solution. */
  idea: string;
  /** Longer description of what they built. */
  description?: string;
  /** Placement, e.g. "1st", omit for finalists that did not place. */
  placement?: string;
  /** Each participant, with their own individual photo. */
  members: TeamMember[];
  /**
   * Optional group photo from the grand finale day, under /public/teams/2025/.
   * Individual member photos are shown regardless; this is an extra banner.
   */
  groupPhoto?: string;
  groupPhotoAlt?: string;
}

/*
 * The five finalist teams. `idea` holds the project title (shown as the
 * subtitle) and `description` the full write-up. `members` is empty until member
 * names are supplied, drop individual photos in /public/participants/2025/ and
 * add { name, role?, image } entries. `groupPhoto` is an optional finale-day
 * team photo under /public/teams/2025/.
 */
export const finalistTeams: FinalistTeam[] = [
  {
    name: "Kasa Noma",
    idea: "ASR Assistant for Speech-Impaired Individuals",
    description:
      "Kasa Noma created an ASR assistant for speech-impaired individuals. It functions like a personal messaging assistant that can be integrated into social apps like Telegram, allowing users to speak and receive corrected text transcripts, enhanced audio, or translated speech that can be shared seamlessly.",
    placement: "1st",
    members: [],
    groupPhoto: "/teams/2025/kasa-noma-finale.jpg",
    groupPhotoAlt: "The Kasa Noma team at the 2025 grand finale",
  },
  {
    name: "WhisperWave",
    idea: "Interactive 3D Speech Therapy App",
    description:
      "WhisperWave built an interactive 3D speech therapy app for children with speech impairments. It uses a Twi-trained AI model, voice recognition, and a friendly avatar to guide kids through oral motor exercises, flashcards, and conversation practice, making therapy fun, local, and accessible.",
    placement: "2nd",
    members: [],
    groupPhoto: "/teams/2025/whisperwave-finale.jpg",
    groupPhotoAlt: "The WhisperWave team at the 2025 grand finale",
  },
  {
    name: "Twilight",
    idea: "ASR Assistant",
    description:
      "Twilight built an AI-powered ASR platform tailored for Twi-speaking users with speech impairment. It transcribes impaired speech into readable text, enabling real-time communication in clinical and everyday settings, with built-in therapy tools to support long-term speech improvement.",
    placement: "3rd",
    members: [],
    groupPhoto: "/teams/2025/twilight-finale.jpg",
    groupPhotoAlt: "The Twilight team at the 2025 grand finale",
  },
  {
    name: "Kasayie",
    idea: "ASR Mobile Application",
    description:
      "Kasayie is a mobile application with a minimalistic interface inspired by co-design. It uses a fine-tuned ASR model to transcribe impaired Twi speech into standard Twi text. With latency reduction in mind, its backend system ensures smooth transcription with minimal latency.",
    members: [],
    groupPhoto: "/teams/2025/kasayie-finale.jpg",
    groupPhotoAlt: "The Kasayie team at the 2025 grand finale",
  },
  {
    name: "Team Yada",
    idea: "ASR Mobile Application",
    description:
      "Yada built an AI-powered mobile app that helps individuals with speech impairments in Ghana communicate using local languages like Akan. It features speech-to-text, text-to-speech, and adaptive interfaces, enabling inclusive, culturally relevant, and accessible communication across daily life.",
    members: [],
    groupPhoto: "/teams/2025/yada-finale.jpg",
    groupPhotoAlt: "The Yada team at the 2025 grand finale",
  },
];
