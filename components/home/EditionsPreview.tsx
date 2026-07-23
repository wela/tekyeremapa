import Link from "next/link";
import { editions } from "@/lib/editions";

export default function EditionsPreview() {
  return (
    <section className="bg-[#E8EDF2] py-20 md:py-24">
      <div className="max-w-container-max mx-auto px-6 md:px-gutter">
        <h2 className="font-headline-md text-headline-md text-primary mb-12">
          Editions
        </h2>
        <div className="flex flex-col gap-4">
          {editions.map((edition) => {
            const row = (
              <div className="bg-white p-6 rounded-xl hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="font-headline-md text-[32px] text-primary md:w-32">
                  {edition.year}
                </div>
                <div className="flex-1 flex flex-wrap gap-2">
                  {edition.sponsors.map((sponsor) => (
                    <span
                      key={sponsor}
                      className="px-3 py-1 rounded-full bg-[#E8EDF2] font-body-md text-on-surface-variant"
                    >
                      {sponsor}
                    </span>
                  ))}
                </div>
                {edition.status === "open" ? (
                  <div className="bg-secondary/10 text-secondary font-eyebrow px-4 py-1 rounded-full uppercase text-[10px]">
                    Open
                  </div>
                ) : (
                  <div className="bg-primary/5 text-on-tertiary-fixed-variant font-eyebrow px-4 py-1 rounded-full uppercase text-[10px]">
                    Complete
                  </div>
                )}
              </div>
            );

            return edition.href ? (
              <Link key={edition.year} href={edition.href}>
                {row}
              </Link>
            ) : (
              <div key={edition.year}>{row}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
