import Link from "next/link";
import Icon from "@/components/shared/Icon";
import type { EditionRowData } from "@/lib/editions";

export default function EditionRow({ edition }: { edition: EditionRowData }) {
  const content = (
    <>
      <div className="col-span-2">
        <span
          className={`year-text inline-block font-display-lg text-display-lg-mobile md:text-display-lg transition-transform duration-500 ${
            edition.status === "open" ? "text-primary" : "text-on-surface-variant"
          }`}
        >
          {edition.year}
        </span>
      </div>
      <div className="col-span-7">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
          {edition.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          {edition.description}
        </p>
      </div>
      <div className="col-span-3 flex md:justify-end items-center mt-4 md:mt-0">
        {edition.status === "open" ? (
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
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
