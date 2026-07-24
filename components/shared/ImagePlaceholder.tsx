import Icon from "@/components/shared/Icon";

/**
 * Fills a `relative` image container while the real photo is missing. Pair it
 * with ImageWithFallback's `fallback` prop so a slot shows a tidy placeholder
 * until a file is dropped into /public.
 */
export default function ImagePlaceholder({
  icon = "image",
  label,
}: {
  icon?: string;
  label?: string;
}) {
  return (
    <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface-container text-on-surface-variant">
      <Icon name={icon} className="text-3xl opacity-40" />
      {label && (
        <span className="font-label-caps text-[13px] uppercase tracking-widest opacity-50">
          {label}
        </span>
      )}
    </span>
  );
}
