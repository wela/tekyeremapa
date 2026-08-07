import type { Metadata } from "next";
import TopNav from "@/components/shared/TopNav";
import Reveal from "@/components/shared/Reveal";
import Hero2026 from "@/components/edition-2026/Hero2026";
import StatsBand from "@/components/edition-2026/StatsBand";
import Roadmap from "@/components/edition-2026/Roadmap";
import Prizes from "@/components/edition-2026/Prizes";
import ImpactTracks from "@/components/edition-2026/ImpactTracks";
import Resources from "@/components/edition-2026/Resources";
import MentorsGrid from "@/components/edition-2026/MentorsGrid";
import RetroGallery from "@/components/edition-2026/RetroGallery";
import PartnersBand from "@/components/edition-2026/PartnersBand";
import Footer2026 from "@/components/edition-2026/Footer2026";

export const metadata: Metadata = {
  title: "MTN Tɛkyerɛma Pa Hackathon | Edition 2026",
  description:
    "MTN Tɛkyerɛma Pa Hackathon 2026: Inclusive Digital Solutions, hosted by the University of Ghana and sponsored by MTN Ghana. Now open for entries.",
};

export default function Edition2026Page() {
  return (
    <div
      data-theme="gold"
      className="overflow-x-hidden selection:bg-primary/30"
    >
      <TopNav />
      <main className="pt-20 md:pt-24">
        <Reveal>
          <Hero2026 />
        </Reveal>
        <Reveal>
          <StatsBand />
        </Reveal>
        <Reveal>
          <Roadmap />
        </Reveal>
        <Reveal>
          <Prizes />
        </Reveal>
        <Reveal>
          <ImpactTracks />
        </Reveal>
        <Reveal>
          <Resources />
        </Reveal>
        {/* <Reveal>
          <MentorsGrid />
        </Reveal> */}
        <Reveal>
          <RetroGallery />
        </Reveal>
        <Reveal>
          <PartnersBand />
        </Reveal>
      </main>
      <Footer2026 />
    </div>
  );
}
