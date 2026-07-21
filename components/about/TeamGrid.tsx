import Image from "next/image";

const MEMBERS = [
  {
    name: "Akwasi Antwi",
    role: "Lead Developer",
    text: "Specializing in Akan NLP and automated speech recognition systems for local dialects.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgjkgIB4AO_aZHIEkmUl7dDixNFxO0Bk-2qo2MmsqjY7lRgz4pl7GsdVWhlpRY0JeW1EWZSjDuqQ7qOEBHJ2womVHtVLjS-5Wz6-NFchpDPktuFpEYUlwC3BTKmVvYjayMt3UKEUCoPkv5ZF_PLQVGScwViT30rtNCUs3pGLXDmNbP_GIoE_OAg18uNeZh56cJYEof6Mq629-9ktkMLW1ic0BSqPr5pyIjZvz4epC58zl2hd_alnMCr5zlzHDDLy-7QQdagrmYDnDE",
    alt: "Headshot of a young computer scientist in a smart-casual white shirt in a modern lab",
  },
  {
    name: "Naa Lamley",
    role: "HCI Researcher",
    text: "Focusing on user-centric interface design for non-literate populations in rural Ghana.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVW2RQuTGeF5Kxb1qq0iJWlyz0dfihCz3fJL1pUrOjQVOL_nRp-HKNbRzVeiT8EIyADbMr5mFd1HLa38EdH6kreqR9c0RLXav-jRvrGRACXC_cidW7wQvSIrpImQWpf_lw3Phfr6EjHBHHA_2U0AAezAy8FlPDWif4VMzPe1xSmRtJShEw0DJDzeb6qtURv4mv6ROIWQLLPpOuBqWgPJFzdwwnF-TPhBICo0JOpUgNUUGABD5OwXlhMrC1sjLlbsQTUq82nks7jTa8",
    alt: "Headshot of a UX researcher with a warm smile wearing stylish glasses",
  },
  {
    name: "Kofi Mensah",
    role: "Data Strategist",
    text: "Expert in ethical data collection and the creation of large-scale linguistically diverse datasets.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCx2ggvFAWBsRFJbdOhROVYsOSlWP9nAaNnQ6dlbaR1xWgQ-nsr3b4MPfOZlYV4xcRPqNecTH-xvZh-mw6BR29rweRe_nTA9yO8P_YMd3T0fq-ph1cc2ws_ThdTU73a3ahLFjWiAekXCVXLp0GlwvdwKevvWwRYoh-Q4WomxsFsecvyxx3xepzlXUQcJh26ZjhSQLkcLp1io1xht-VMvY9ZmQPbV7vRpeV5a4vyZ-tYkyjkkqH6wMOYw64JnFTh-bTaIZ5AuZqI_aoL",
    alt: "Portrait of a data scientist looking thoughtful in a brightly lit academic setting",
  },
  {
    name: "Esi Boateng",
    role: "Linguistics Expert",
    text: "Bridging the gap between structural linguistics and computational language modeling.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKVbiJs59ruuonDC3mWqLNLhINPlOkVkj9-hlJhdGxSa4FjXn-FJAb57lcKN1FK9bMXs4GLKfa3Ca3x8ufXhoRZ5Mc-zf4KBdzr5Q6SrE1WMXR0pMKrNsGredQ_YWDom7znhPXw_GJoEGYOHbU_EtPq0zMoDQwcoC61ZYqG0caoxE8SJECRioHBcLMwaqU2B9CA8WWv3Xblp8LAtpCG75kjwmGs5e4h7Vj93MhVsehzJmyxctLBqcaDxDcS1wTKgsRLod-YnIN8BgP",
    alt: "Headshot of a linguist wearing a kente-patterned accessory in a sun-drenched university corridor",
  },
];

export default function TeamGrid() {
  return (
    <section className="bg-[#FAF8F5] py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-headline-md text-headline-md mb-12">The lab</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {MEMBERS.map((member) => (
            <div
              key={member.name}
              className="bg-white p-4 rounded-[14px] hairline-border card-lift"
            >
              <div className="relative aspect-square mb-4 rounded-[8px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-headline-md text-xl mb-1">{member.name}</h3>
              <p className="font-label-caps text-primary text-xs mb-3 uppercase">
                {member.role}
              </p>
              <p className="font-body-md text-on-surface-variant text-sm">
                {member.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
