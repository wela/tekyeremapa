import type { Metadata } from "next";
import TopNav from "@/components/shared/TopNav";
import EditionsHeader from "@/components/editions/EditionsHeader";
import EditionRow from "@/components/editions/EditionRow";
import UpcomingDivider from "@/components/editions/UpcomingDivider";
import EditionsFooter from "@/components/editions/EditionsFooter";
import { editionRows } from "@/lib/editions";

export const metadata: Metadata = {
  title: "Editions | Tɛkyerɛma Pa Hackathon",
  description:
    "Documenting the evolution of Ghanaian linguistics through technology — the archive of every Tɛkyerɛma Pa hackathon edition.",
};

export default function EditionsIndexPage() {
  return (
    <>
      <TopNav />
      <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <EditionsHeader />
        <section>
          <div className="hidden md:grid grid-cols-12 gap-gutter py-4 px-6 border-b border-on-surface/15 opacity-50">
            <div className="col-span-2 font-label-caps text-label-caps uppercase">
              Year
            </div>
            <div className="col-span-7 font-label-caps text-label-caps uppercase">
              Edition Theme
            </div>
            <div className="col-span-3 text-right font-label-caps text-label-caps uppercase">
              Status
            </div>
          </div>
          {editionRows.map((edition) => (
            <EditionRow key={edition.year} edition={edition} />
          ))}
        </section>
        <UpcomingDivider />
      </main>
      <EditionsFooter />
    </>
  );
}
