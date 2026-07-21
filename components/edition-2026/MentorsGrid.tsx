import Image from "next/image";
import Icon from "@/components/shared/Icon";

const MENTORS = [
  {
    name: "Dr. Afua Mensah",
    role: "Lead AI Researcher, MTN",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2XGZSbJVIzz2QZ8QgGqolY9k0Gn2rYu6_zSD_ECvPdhk-KyM3DRhyDqq7HoUd9uTAkBu3ROirY_Chp05koijBL65RTbRousc9fT1w5lGZb8x6QTEDta-4tBHphBc9d3bkLuQbOgJfHqnbdbk7YuNzY1Wy5FDS1umdOmnPigMdL5FsF3G8ai4lAotwQZuhb41MXy8gW0uYiYkx1bciAVm2EbNx2qPUQ95doyIDqUGymsNJZI4dS-XGu1LfOA8Hz8Eub1t4YKrtmspF",
    alt: "Headshot of a female technology executive wearing a business suit with a kente-patterned scarf",
  },
  {
    name: "Kwame Boateng",
    role: "Founder, BuildTech Ghana",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfKSIBQGhzQUIbenS_J0f6kAMmYBI1wclFyHGWLvMKzoztB1y1LMMKuBje5tGIAyN1DwOMkfx-v6fv63V_2zzYEYl_rsU_iJheYf-68kFYT_TDvLTZX8N9ERMYpvKwXDGtDp-_1BKu_qePHrkDEKZHZFIIWcRf1loMs00rlQc7G78W2hOv4S3pdeTDijvDF0lZYNgMYtuM6aKTzHzjJErva40NPd5QMjn0mtB5gn47sYaxOMVZNSyBGbpCL5tZsJzvsiqQBg98zqQ_",
    alt: "Headshot of a male software architect in a black t-shirt with a friendly smile",
  },
  {
    name: "Sarah Appiah",
    role: "UX Director, Fintech Global",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiup_yx2bwL5e2lCRj9d0Gx0Y-fVXHGYeWVhSSIRHjXQvMQ6qKayf5jBDvSaw8JOs49dCG7qwoxRxixQz6qm6uNnZb7pF-EtdnaKuMBWtjpycPxSwyTEScxSc7XPbNJCxOCKq1wp0kAyVfcs3uG29Xaysz72Qds7c7yP5KMOljApZfTrkObXsApY0C2TyyotP3M13g_kDBIOsb5XcQozjiz8mTxctsie2--qtQyZAWQMYZFTwPMxtBXyOkLDBmnTJSkrLK4YDScPgj",
    alt: "Studio portrait of a senior product designer wearing stylish glasses",
  },
  {
    name: "James Owusu",
    role: "Venture Partner, Accra VC",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAXJEMakB-rzBUC1kGsDspTPQAhaALyrt9fbGpOj5CurmMEpiD9Tv9sRikvBW_OTx05_k7mHeq9NpqVcG0ADLjCPr4wzd1-dfrciGKefYswEur8KXubDtsiXgqrTHQ3oGotIDNwxIxEspa3z-lFij8kEvcRcmAxSyxh11axlEahfXoa26DBqFAnb7Tj56SYzR6msudUZBp2ut7bSGcE4t4EtlG-_SNzi6ni8aRvZATNfaNWcN6H0JMJHO4hpcRZlu1GhXUoU3PO3mX",
    alt: "Headshot of a young male entrepreneur in a sharp blazer",
  },
];

export default function MentorsGrid() {
  return (
    <section className="py-section-gap px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display-lg text-headline-md">Guided by Experts</h2>
          <div className="flex gap-2">
            <button
              aria-label="Previous mentors"
              className="p-3 border border-on-surface/10 rounded-full hover:bg-surface-container transition-colors"
            >
              <Icon name="arrow_back" />
            </button>
            <button
              aria-label="Next mentors"
              className="p-3 border border-on-surface/10 rounded-full hover:bg-surface-container transition-colors"
            >
              <Icon name="arrow_forward" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {MENTORS.map((mentor) => (
            <div key={mentor.name} className="text-center group">
              <div className="aspect-square rounded-full overflow-hidden mb-6 editorial-border p-1 group-hover:border-primary transition-colors duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={mentor.image}
                    alt={mentor.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <h4 className="font-headline-md text-[20px]">{mentor.name}</h4>
              <p className="font-label-caps text-on-surface-variant uppercase mt-1">
                {mentor.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
