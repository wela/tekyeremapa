import type { Metadata } from "next";
import TopNav from "@/components/shared/TopNav";
import Reveal from "@/components/shared/Reveal";
import Hero2025 from "@/components/edition-2025/Hero2025";
import StatsBar from "@/components/edition-2025/StatsBar";
import AboutHackathon from "@/components/edition-2025/AboutHackathon";
import Timeline from "@/components/edition-2025/Timeline";
import FinalistTeams from "@/components/edition-2025/FinalistTeams";
import MentorsColumns from "@/components/edition-2025/MentorsColumns";
import Materials from "@/components/edition-2025/Materials";
import Faq from "@/components/edition-2025/Faq";
import SponsorsBand from "@/components/edition-2025/SponsorsBand";
import Gallery from "@/components/edition-2025/Gallery";
import Footer2025 from "@/components/edition-2025/Footer2025";
import { getGalleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "2025 Edition | Tɛkyerɛma Pa",
  description:
    "Tɛkyerɛma Pa (Good Tongue) Hackathon 2025, ASR and Text-to-Speech solutions for individuals with speech impairment in Ghanaian languages. A University of Ghana and UCL collaboration, part of AT2030.",
};

// The gallery is read from the filesystem at render time, which Next.js does
// not track as a cache dependency. Force a fresh render so newly added photos
// always show (and the page is never cached with an empty gallery).
export const dynamic = "force-dynamic";

export default function Edition2025Page() {
  const galleryImages = getGalleryImages("2025");

  return (
    <div className="selection:bg-primary-fixed selection:text-on-primary-fixed">
      <TopNav />
      <main className="pt-20 md:pt-24">
        <Reveal>
          <Hero2025 />
        </Reveal>
        <Reveal>
          <StatsBar />
        </Reveal>
        <Reveal>
          <AboutHackathon />
        </Reveal>
        <Reveal>
          <Timeline />
        </Reveal>
        <Reveal>
          <FinalistTeams />
        </Reveal>
        <Reveal>
          <MentorsColumns />
        </Reveal>
        <Reveal>
          <Materials />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <SponsorsBand />
        </Reveal>
        <Reveal>
          <Gallery images={galleryImages} />
        </Reveal>
      </main>
      <Footer2025 />
    </div>
  );
}
