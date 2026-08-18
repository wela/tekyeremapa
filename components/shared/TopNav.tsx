"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "@/components/shared/Icon";

const LINKS = [
  { key: "home", label: "Home", href: "/" },
  { key: "editions", label: "Editions", href: "/editions" },
  { key: "about", label: "About", href: "/about" },
  // { key: "partner", label: "Partner", href: "/contact#partner" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

const ACTIVE_CLASS =
  "text-primary font-bold border-b-2 border-primary transition-colors duration-200 font-body-md text-body-md";
const INACTIVE_CLASS =
  "text-on-surface-variant hover:text-primary-container transition-colors duration-200 font-body-md text-body-md";

function activeKeyFor(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/editions")) return "editions";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
  return "";
}

export default function TopNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeKey = activeKeyFor(pathname);

  const renderLink = (
    link: (typeof LINKS)[number],
    extraClass = "",
    onClick?: () => void,
  ) => (
    <Link
      key={link.key}
      href={link.href}
      onClick={onClick}
      className={`${extraClass}${link.key === activeKey ? ACTIVE_CLASS : INACTIVE_CLASS}`}
    >
      {link.label}
    </Link>
  );

  return (
    <header className="topnav fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-sm border-b border-outline-variant">
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 md:h-24">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt=""
            width={240}
            height={240}
            className="h-16 md:h-20 w-auto object-contain"
          />
          <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
            Tɛkyerɛma Pa
          </span>
          <span className="sr-only">, HCI Lab, University of Ghana, home</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => renderLink(link))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/editions/2026"
            className="hidden md:inline-block bg-primary text-on-primary px-6 py-2 rounded-full font-bold transition-all hover:opacity-80"
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
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-on-surface/10 px-6 py-6 flex flex-col gap-5">
          {LINKS.map((link) =>
            renderLink(link, "w-fit ", () => setMenuOpen(false)),
          )}
        </div>
      )}
    </header>
  );
}
