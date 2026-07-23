import Link from "next/link";
import BrandShield from "@/components/shared/BrandShield";
import ImageWithFallback from "@/components/shared/ImageWithFallback";
import { publicImage } from "@/lib/assets";

const CHIPS = ["Innovation focus", "Community driven", "Social impact"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1a3a] text-white">
      {/* Depth: diagonal brand gradient + a soft blue glow behind the mark. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(125deg,#0a1a3a_0%,#12305c_52%,#1b4a86_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 w-[38rem] h-[38rem] rounded-full bg-[#1e6bb8]/25 blur-3xl"
      />

      <div className="relative max-w-container-max mx-auto px-6 md:px-gutter py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="font-eyebrow text-eyebrow text-[#a4bcdf] uppercase tracking-[0.2em] mb-5">
              University of Ghana · HCI Lab
            </p>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
              Tɛkyerɛma Pa Hackathon
            </h1>
            <p className="font-headline-md text-headline-md text-white/90 mb-6">
              Empowering communication through technology
            </p>
            <div className="h-1 w-24 rounded-full bg-[linear-gradient(90deg,#f6d179,#e0ac45)] mb-8" />
            <p className="font-body-lg text-body-lg text-white/70 max-w-xl mb-10 leading-relaxed">
              We build high-impact digital tools for Ghanaian languages, so that
              language is never a barrier to progress, healthcare, or education
              in our communities.
            </p>

            <ul className="flex flex-wrap gap-3 mb-12">
              {CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="px-4 py-1.5 border border-white/15 rounded-full font-stats-mono text-stats-mono text-white/80 bg-white/5 backdrop-blur-sm"
                >
                  {chip}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/editions/2026"
                className="bg-white text-[#0a1a3a] px-8 py-4 rounded-full font-body-md font-semibold text-center hover:bg-white/90 transition-colors"
              >
                Apply for 2026
              </Link>
              <Link
                href="/editions"
                className="border border-white/40 text-white px-8 py-4 rounded-full font-body-md text-center hover:bg-white/10 transition-colors"
              >
                View Past Projects
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-48 md:w-full md:max-w-[20rem] drop-shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
              <ImageWithFallback
                src={publicImage("/brand/logo.png")}
                alt="Tɛkyerɛma Pa Hackathon logo"
                width={320}
                height={384}
                className="w-full h-auto"
                fallback={<BrandShield className="w-full h-auto" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
