"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // threshold must stay 0: a section taller than the viewport (the 122-photo
    // gallery is ~10,000px) can never reach a fractional threshold, so anything
    // above 0 would leave it stuck at opacity 0 forever.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
