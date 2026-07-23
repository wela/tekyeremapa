import TopNav from "@/components/shared/TopNav";
import Hero from "@/components/home/Hero";
import MissionGrid from "@/components/home/MissionGrid";
import WhyItMatters from "@/components/home/WhyItMatters";
import ImpactStats from "@/components/home/ImpactStats";
import SelectionFunnel from "@/components/home/SelectionFunnel";
import PullQuote from "@/components/home/PullQuote";
import WhatToExpect from "@/components/home/WhatToExpect";
import EditionsPreview from "@/components/home/EditionsPreview";
import JoinCommunity from "@/components/home/JoinCommunity";
import HomeFooter from "@/components/home/HomeFooter";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main className="mt-[72px]">
        <Hero />
        <MissionGrid />
        <WhyItMatters />
        <ImpactStats />
        <SelectionFunnel />
        <PullQuote />
        <EditionsPreview />
        <JoinCommunity />
      </main>
      <HomeFooter />
    </>
  );
}
