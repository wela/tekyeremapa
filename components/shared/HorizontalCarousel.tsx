"use client";

import { Children, type ReactNode, useRef } from "react";
import Icon from "@/components/shared/Icon";

interface HorizontalCarouselProps {
  title: string;
  ariaLabel: string;
  variant: "video" | "file";
  children: ReactNode;
}

export default function HorizontalCarousel({
  title,
  ariaLabel,
  variant,
  children,
}: HorizontalCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const items = Children.toArray(children);
  const itemWidth =
    variant === "video"
      ? "auto-cols-[92%] md:auto-cols-[72%] lg:auto-cols-[60%]"
      : items.length === 1
        ? "auto-cols-[100%]"
        : items.length === 2
          ? "auto-cols-[88%] sm:auto-cols-[48.5%]"
          : "auto-cols-[88%] sm:auto-cols-[58%] lg:auto-cols-[31.5%]";

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * track.clientWidth * 0.85,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="font-headline-md text-[22px]">{title}</h3>
        {items.length > 1 && (
          <div className="flex gap-2" aria-label={`${ariaLabel} controls`}>
            <button
              type="button"
              onClick={() => move(-1)}
              className="flex size-11 items-center justify-center rounded-full border border-outline-variant bg-surface text-on-surface transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Previous ${ariaLabel.toLowerCase()}`}
            >
              <Icon name="arrow_back" className="text-xl" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="flex size-11 items-center justify-center rounded-full border border-outline-variant bg-surface text-on-surface transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Next ${ariaLabel.toLowerCase()}`}
            >
              <Icon name="arrow_forward" className="text-xl" />
            </button>
          </div>
        )}
      </div>

      <ul
        ref={trackRef}
        aria-label={ariaLabel}
        className={`grid grid-flow-col ${itemWidth} gap-6 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        {items.map((item, index) => (
          <li key={index} className="min-w-0 snap-start">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
