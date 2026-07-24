import type { Metadata } from "next";
import {
  EB_Garamond,
  Fraunces,
  JetBrains_Mono,
  Libre_Caslon_Text,
  Outfit,
  Space_Mono,
} from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-eb-garamond",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
});

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-caslon",
});

const spaceMono = Space_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Tɛkyerɛma Pa | Empowering Communication",
  description:
    "Tɛkyerɛma Pa is an annual hackathon at the University of Ghana HCI Lab building high-impact digital tools for Ghanaian languages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${jetbrainsMono.variable} ${outfit.variable} ${libreCaslon.variable} ${spaceMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      {/* Browser extensions can mutate the document root before React hydrates. */}
      <body>
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- app-router root layout applies to every page */}
        <link
          rel="stylesheet"
          precedence="default"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        {children}
      </body>
    </html>
  );
}
