import type { Metadata } from "next";
import TopNav from "@/components/shared/TopNav";
import Reveal from "@/components/shared/Reveal";
import Hero2025 from "@/components/edition-2025/Hero2025";
import StatsBar from "@/components/edition-2025/StatsBar";
import Timeline from "@/components/edition-2025/Timeline";
import SolutionsGrid from "@/components/edition-2025/SolutionsGrid";
import MentorsColumns from "@/components/edition-2025/MentorsColumns";
import SponsorsBand from "@/components/edition-2025/SponsorsBand";
import Gallery from "@/components/edition-2025/Gallery";
import Footer2025 from "@/components/edition-2025/Footer2025";

export const metadata: Metadata = {
  title: "2025 Edition | Tɛkyerɛma Pa",
  description:
    "2025: Breaking the Silence — the Tɛkyerɛma Pa hackathon edition dedicated to speech-impairment inclusion, hosted at the UG HCI Lab.",
};

export default function Edition2025Page() {
  return (
    <div className="selection:bg-primary-fixed selection:text-on-primary-fixed">
      <TopNav variant="edition-2025" />
      <main className="pt-20">
        <Reveal>
          <Hero2025 />
        </Reveal>
        <Reveal>
          <StatsBar />
        </Reveal>
        <Reveal>
          <Timeline />
        </Reveal>
        <Reveal>
          <SolutionsGrid />
        </Reveal>
        <Reveal>
          <MentorsColumns />
        </Reveal>
        <Reveal>
          <SponsorsBand />
        </Reveal>
        <Reveal>
          <Gallery />
        </Reveal>
      </main>
      <Footer2025 />
    </div>
  );
}
