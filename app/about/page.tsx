import type { Metadata } from "next";
import TopNav from "@/components/shared/TopNav";
import AboutHero from "@/components/about/AboutHero";
import LeadProfile from "@/components/about/LeadProfile";
import TeamGrid from "@/components/about/TeamGrid";
import CandidStrip from "@/components/about/CandidStrip";
import LabContributions from "@/components/about/LabContributions";
import ClosingSection from "@/components/about/ClosingSection";
import AboutFooter from "@/components/about/AboutFooter";

export const metadata: Metadata = {
  title: "About | Tɛkyerɛma Pa Hackathon",
  description:
    "Meet the HCI Lab at the University of Ghana — the multidisciplinary team of researchers, developers, and designers behind the Tɛkyerɛma Pa hackathon.",
};

export default function AboutPage() {
  return (
    <div
      data-theme="editions"
      className="min-h-screen bg-background text-on-background font-body-md text-body-md"
    >
      <div data-theme="about">
        <TopNav variant="about" />
        <main className="mt-[72px]">
          <AboutHero />
          <LeadProfile />
          <TeamGrid />
          <CandidStrip />
          <LabContributions />
          <ClosingSection />
        </main>
        <AboutFooter />
      </div>
    </div>
  );
}
