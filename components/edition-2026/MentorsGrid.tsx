import Image from "next/image";

interface Mentor {
  name: string;
  image: string;
  bio: string;
  imagePosition?: string;
}

interface MentorCategory {
  category: string;
  focus: string;
  mentors: Mentor[];
}

const MENTOR_CATEGORIES: MentorCategory[] = [
  {
    category: "Business, Engineering & Impact",
    focus:
      "Software engineering, scalability, market viability, startup development, and impact assessment",
    mentors: [
      {
        name: "Mr. Benjamin Arhin-Acquaah",
        image: "/mentors/2026/Benjamin Arhin-Acquaah.jpg",
        imagePosition: "center 35%",
        bio: "Benjamin Arhin-Acquaah is a software engineer with experience building products across startups, fintech, banking, and technology. He holds a degree in Computer Science from KNUST and has worked with organisations including CalBank, Goldman Sachs, and WeWire. He is also a founding engineer at Kook Technologies and currently builds technology products within the financial services industry. Benjamin is passionate about engineering, entrepreneurship, and community engagement, with an interest in building products, understanding the business behind them, and creating solutions that have real-world impact.",
      },
    ],
  },
  {
    category: "Computer Vision & Agentic AI",
    focus:
      "Object and obstacle detection, vision systems, and agentic automation",
    mentors: [
      {
        name: "Prof. Justice Kwame Appati",
        image: "/mentors/2026/Justice Appati.jpeg",
        bio: "Prof. Justice Kwame Appati is an Associate Professor of Computer Science and an Applied Mathematician whose research spans Artificial Intelligence, Data Science, Machine Learning, Digital Health, Mathematical Modelling, High-Performance Computing, and intelligent decision-support systems. He has led interdisciplinary research, secured competitive grants, supervised postgraduate research, and developed AI-driven solutions for healthcare, education, and digital transformation. His expertise combines rigorous mathematical modelling with practical AI deployment, making him well suited for international research collaborations, consultancy, and capacity-building initiatives.",
      },

      // Publish when both a bio and portrait are available.
      // {
      //   name: "Mr. Labaran Adamu Mohammed",
      //   image: "",
      //   bio: "",
      // },
    ],
  },
  {
    category: "Accessibility & Personalization",
    focus:
      "Inclusive design, assistive technologies, accessibility testing, and personalization",
    mentors: [
      {
        name: "Prof. Augustina Naami",
        image: "/mentors/2026/Prof Naami.png",
        imagePosition: "center 25%",
        bio: "Prof. Naami is an expert in disability and social work, with research spanning disability, mental health, intersecting vulnerabilities, social policy, and climate change. She brings both theoretical insight and practical experience from Ghana and the United States. Her leadership in innovative research includes the use of photovoice methodology and the assessment of emerging technologies for their inclusivity for persons with disabilities. Currently, she serves as an Associate Professor of Disability in Social Work, the first of its kind in Ghana, a pioneering role that provides her with significant leverage to shape and advance disability research and practice in the country.",
      },
      {
        name: "Mr. Timothy Owusu",
        image: "/mentors/2026/Timothy Owusu.jpeg",
        bio: "Mr. Timothy Owusu is the Founder and CEO of myCompany365, iKolilu, and LangXChange AI Labs. He developed the first online registration system in Ghana in 2003. He is a seasoned full-stack developer and product strategist with more than 15 years of experience in software engineering, data systems, and digital transformation across education, government, and enterprise sectors. With deep expertise in AI, database management, and scalable systems architecture, Timothy leads the vision and execution of innovative technology solutions that drive operational efficiency and measurable impact. He is passionate about leveraging technology to solve complex problems and improve outcomes across Africa.",
      },
    ],
  },

  // These categories and mentors are ready to activate when their bios and
  // portraits are supplied. Keeping them here preserves the complete roster.
  {
    category: "AI & Language Technologies",
    focus: "ASR, TTS, NLP, machine learning, LLMs, and conversational AI",
    mentors: [
      { name: "Ms. Akosua Wiafe-Akenten", 
        image: "/mentors/2026/Akosua Nyarkoa W.jpeg", 
        bio: "Akosua is an Artificial Intelligence Engineer with professional experience in Data Analytics and Governance, Risk and Compliance (GRC) consultancy. Her technical and research experience focuses on the application of Artificial Intelligence to language technologies, particularly through Natural Language Processing (NLP) and machine learning techniques. Her research has explored areas including Large Language Models (LLMs), Automatic Speech Recognition (ASR), Machine Translation, and Chatbot development. She is particularly interested in leveraging AI-driven technologies to address real-world challenges, especially in inclusive and low-resource contexts." },
      { name: "Mr. Evans Kwasi", 
        image: "/mentors/2026/Evans k.jpeg", 
        bio: "Evans Kwasi is an AI/ML researcher and software developer with experience in building machine models and AI technologies for low-resource African languages. As a researcher at the University of Ghana’s DCS HCI Lab, he has worked on TTS, ASR and LLM projects." },
    ],
  },
  // {
  //   category: "Fintech & Digital Services",
  //   focus: "MoMo APIs, digital payments, security, and financial inclusion",
  //   mentors: [
  //     { name: "Mr. Joshua Kwabla", image: "", bio: "" },
  //   ],
  // },
  // {
  //   category: "UX/UI",
  //   focus: "User-centred design, prototyping, interaction design, and usability testing",
  //   mentors: [
  //     { name: "Dr. Sarah Dsane", image: "", bio: "" },
  //     { name: "Mr. Praise Olutuase", image: "", bio: "" },
  //   ],
  // },
];

export default function MentorsGrid() {
  return (
    <section
      id="mentors"
      aria-labelledby="mentors-title"
      className="py-section-gap px-margin-mobile md:px-margin-desktop"
    >
      <div className="mx-auto max-w-container-max">
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="font-stats-mono text-label-caps uppercase tracking-[0.2em] text-primary">
              Guided by experience
            </span>
            <h2
              id="mentors-title"
              className="mt-2 font-display-lg text-headline-md"
            >
              Meet the Mentors
            </h2>
          </div>
          <p className="font-body-md text-on-surface-variant md:col-span-5">
            Learn from researchers, engineers, and founders bringing deep
            expertise to the 2026 mentorship programme.
          </p>
        </div>

        <div className="space-y-16">
          {MENTOR_CATEGORIES.map((group, groupIndex) => (
            <section
              key={group.category}
              aria-labelledby={"mentor-category-" + groupIndex}
              className="grid grid-cols-1 gap-8 border-t border-on-surface/15 pt-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <p className="font-stats-mono text-label-caps text-primary">
                  0{groupIndex + 1}
                </p>
                <h3
                  id={"mentor-category-" + groupIndex}
                  className="mt-3 max-w-sm font-headline-md text-[26px] leading-snug"
                >
                  {group.category}
                </h3>
                <p className="mt-3 max-w-sm font-body-md text-sm text-on-surface-variant">
                  {group.focus}
                </p>
              </div>

              <div className="space-y-5 lg:col-span-8">
                {group.mentors.map((mentor) => (
                  <article
                    key={mentor.name}
                    className="grid overflow-hidden rounded-2xl bg-surface-container-low editorial-border sm:grid-cols-[180px_1fr] lg:grid-cols-[210px_1fr]"
                  >
                    <div className="relative min-h-64 bg-surface-container sm:min-h-full">
                      <Image
                        src={mentor.image}
                        alt={"Portrait of " + mentor.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 210px"
                        className="object-cover"
                        style={{ objectPosition: mentor.imagePosition }}
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <p className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-primary">
                        Mentor
                      </p>
                      <h4 className="mt-2 font-headline-md text-[25px] leading-snug text-on-surface">
                        {mentor.name}
                      </h4>
                      <p className="mt-4 font-body-md text-[16px] leading-relaxed text-on-surface-variant">
                        {mentor.bio}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
