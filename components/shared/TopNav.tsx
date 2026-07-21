"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "@/components/shared/Icon";

export type TopNavVariant =
  | "home"
  | "editions-index"
  | "edition-2025"
  | "edition-2026"
  | "contact";

interface TopNavProps {
  variant: TopNavVariant;
}

const LINKS = [
  { key: "home", label: "Home", href: "/" },
  { key: "editions", label: "Editions", href: "/editions" },
  { key: "about", label: "About", href: "#" },
  { key: "partner", label: "Partner", href: "/contact#partner" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

const CTA_STYLES: Record<TopNavVariant, string> = {
  home: "bg-primary text-white px-6 py-2 rounded-full font-body-md hover:opacity-90 transition-opacity",
  "editions-index":
    "bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-label-caps text-label-caps active:scale-95 transition-transform duration-150",
  "edition-2025":
    "bg-primary text-on-primary px-6 py-2 rounded-[14px] font-body-md font-semibold hover:opacity-90 active:scale-95 transition-all",
  "edition-2026":
    "bg-primary text-on-primary px-6 py-3 rounded-xl font-label-caps text-label-caps hover:opacity-90 active:scale-95 transition-all duration-150 shadow-sm",
  contact:
    "bg-primary text-on-primary px-6 py-2 rounded-xl font-label-caps text-label-caps hover:bg-primary-container transition-all active:scale-95",
};

export default function TopNav({ variant }: TopNavProps) {
  const isHome = variant === "home";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = LINKS.filter((link) => (isHome ? true : link.key !== "home"));
  const activeKey = isHome
    ? "home"
    : variant === "contact"
      ? "contact"
      : "editions";

  const activeClass = isHome
    ? "font-body-md text-secondary border-b-2 border-secondary pb-1"
    : "text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md";
  const inactiveClass = isHome
    ? "font-body-md text-on-surface-variant hover:text-primary transition-colors"
    : "text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200";

  const brand =
    variant === "edition-2026" ? (
      <Link
        href="/"
        className="font-display-lg text-headline-md text-on-surface tracking-tighter"
      >
        Tɛkyerɛma <span className="text-primary">Pa</span>
      </Link>
    ) : isHome ? (
      <Link href="/" className="text-headline-md font-headline-md text-primary">
        Tɛkyerɛma Pa
      </Link>
    ) : variant === "contact" ? (
      <Link
        href="/"
        className="font-display-lg text-headline-md text-primary tracking-tight"
      >
        Tɛkyerɛma Pa
      </Link>
    ) : (
      <Link href="/" className="font-display-lg text-headline-md text-primary">
        Tɛkyerɛma Pa
      </Link>
    );

  const renderLink = (
    link: (typeof LINKS)[number],
    className: string,
    onClick?: () => void,
  ) =>
    link.href === "#" ? (
      <a key={link.key} href="#" className={className} onClick={onClick}>
        {link.label}
      </a>
    ) : (
      <Link key={link.key} href={link.href} className={className} onClick={onClick}>
        {link.label}
      </Link>
    );

  const desktopLinks = (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) =>
        renderLink(link, link.key === activeKey ? activeClass : inactiveClass),
      )}
    </div>
  );

  const rightSide = (
    <div className="flex items-center gap-3">
      <Link
        href="/editions/2026"
        className={`hidden md:inline-block ${CTA_STYLES[variant]}`}
      >
        Enter 2026
      </Link>
      <button
        type="button"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        className="md:hidden p-2 -mr-2 text-on-surface"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <Icon name={menuOpen ? "close" : "menu"} />
      </button>
    </div>
  );

  const mobilePanel = menuOpen ? (
    <div className="md:hidden bg-surface border-t border-on-surface/10 px-6 py-6 flex flex-col gap-5">
      {links.map((link) =>
        renderLink(
          link,
          `w-fit ${link.key === activeKey ? activeClass : inactiveClass}`,
          () => setMenuOpen(false),
        ),
      )}
    </div>
  ) : null;

  if (isHome) {
    return (
      <header className="sticky top-0 z-50 bg-surface border-b border-primary/10">
        <nav className="flex justify-between items-center w-full px-6 md:px-gutter py-4 max-w-container-max mx-auto">
          {brand}
          {desktopLinks}
          {rightSide}
        </nav>
        {mobilePanel}
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 w-full bg-surface border-b border-on-surface/15 z-50 transition-shadow${scrolled ? " shadow-sm" : ""}`}
    >
      <nav className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {brand}
        {desktopLinks}
        {rightSide}
      </nav>
      {mobilePanel}
    </header>
  );
}
