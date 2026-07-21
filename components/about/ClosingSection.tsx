import Image from "next/image";
import Link from "next/link";

export default function ClosingSection() {
  return (
    <section className="bg-[#F2EDE6] py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline-md text-headline-md mb-8">
              Why Tɛkyerɛma Pa
            </h2>
            <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
              <p>
                Tɛkyerɛma Pa (meaning &ldquo;The Good Tongue&rdquo;) is not
                just a competition; it is a movement to reclaim our digital
                future. By opening up our proprietary data and models, the HCI
                Lab aims to empower the next generation of Ghanaian developers
                to build human-centered AI that understands
                us&mdash;literally.
              </p>
              <p>
                Our mission is to foster an ecosystem where language is no
                longer a barrier to digital participation. We provide the
                tools, the guidance, and the data; you provide the vision and
                the innovation to solve local problems with global standards.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/editions/2026"
                className="bg-primary text-white font-body-md font-bold px-8 py-4 rounded-[14px] hover:shadow-lg transition-all"
              >
                Enter 2026
              </Link>
              <Link
                href="/editions/2025"
                className="border border-on-surface text-on-surface font-body-md font-bold px-8 py-4 rounded-[14px] hover:bg-on-surface hover:text-white transition-all"
              >
                View 2025 Record
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-[14px] overflow-hidden aspect-[3/4]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4d-eZ_x85dG1cRBZyu196D7o6RjHO6-dIT5f9-Hq8Jejhec9K_QRjlJbtJdylH75_502oNqZTLt6d8SfW7X9pe3oIQ4Pf0PtE7_lYngI7wDRk0WUJQgqxX0Yh2_JVL6oX1AMz-rlztxzW6_nrnNg7FdN273Ld3flkDZs3_llB9xxza3SYWwTVbJie4oj8Pe4IIiNB1uwJILgxyUWb1EzRT19MZ9vAFS9fsKw6n6nytGg30jCE8X8gfKDxOCeHV6iR-HJ-fQfpF2cW"
                alt="Winners of the 2025 Tɛkyerɛma Pa hackathon holding a trophy, surrounded by screens showing their projects"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="pt-12">
              <div className="relative rounded-[14px] overflow-hidden aspect-[3/4]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSPsIdcp_yyMTaEudbTsBuWo5RZscVUxjNwnmPxkcx62SE-JKGZFt2FMmnrfcp5qy9xyWSHASi2evJjmgqbN3nbalIK9WmWUJ7QsAXFuHQPOeaSom2NxYcQWn18kHLYatcP0KBPxziY3Z4IQAC2kzENYVU_gnPRXVKEDIHWZQ_9PfxzKlp8pOLzH4vOwqS4CLEOZMQ7r90LxldNz0NpAqk6Ndh7VAdHaaYXDB15QUIO8N3kEuVPmyPPl34_1NKwrPUUL5NjjqopnvZ"
                  alt="A developer typing intensely at the 2025 hackathon with code reflected in their glasses"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
