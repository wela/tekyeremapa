import Link from "next/link";
import Icon from "@/components/shared/Icon";
import type { Edition } from "@/lib/editions";

export default function EditionRow({ edition }: { edition: Edition }) {
  const content = (
    <>
      <div className="md:col-span-2">
        <span
          className={`year-text inline-block font-display-lg text-display-lg-mobile md:text-display-lg transition-transform duration-500 ${
            edition.status === "open"
              ? "text-secondary"
              : "text-on-surface-variant"
          }`}
        >
          {edition.year}
        </span>
      </div>
      <div className="md:col-span-7">
        <div className="flex flex-wrap gap-2 max-w-xl">
          {edition.sponsors.map((sponsor) => (
            <span
              key={sponsor}
              className="px-3 py-1 border border-on-surface/15 rounded-full font-body-md text-body-md text-on-surface-variant bg-surface-container-low"
            >
              {sponsor}
            </span>
          ))}
        </div>
      </div>
      <div className="md:col-span-3 flex md:justify-end items-center mt-4 md:mt-0">
        {edition.status === "open" ? (
          <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-stats-mono text-stats-mono uppercase">Open</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 bg-on-surface-variant/10 text-on-surface-variant px-4 py-1.5 rounded-full">
            <Icon name="check_circle" className="text-[16px]" />
            <span className="font-stats-mono text-stats-mono uppercase">
              Complete
            </span>
          </div>
        )}
      </div>
    </>
  );

  const rowClass =
    "editorial-row group grid grid-cols-1 md:grid-cols-12 gap-gutter items-center py-10 px-6 edition-row-border hover:bg-surface-container-low transition-all duration-300";

  if (edition.href) {
    return (
      <Link href={edition.href} className={`${rowClass} cursor-pointer`}>
        {content}
      </Link>
    );
  }

  return <div className={rowClass}>{content}</div>;
}
