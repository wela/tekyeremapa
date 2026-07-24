import Link from "next/link";
import Icon from "@/components/shared/Icon";
import Waveform from "@/components/home/Waveform";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071022] text-white">
      {/* Deep navy ground with a soft lift behind the wordmark. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_35%,#12305c_0%,#0a1c3d_45%,#050d1c_100%)]"
      />

      {/* Waveform sits behind the title, centred on the headline. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[38%] -translate-y-1/2"
      >
        <Waveform className="w-full h-[220px] md:h-[300px] opacity-70" />
      </div>

      <div className="relative max-w-container-max mx-auto px-6 md:px-gutter py-24 md:py-32 text-center">
        <h1 className="font-display-lg text-[clamp(2.75rem,9vw,6rem)] leading-[1.02] tracking-tight mb-5">
          <span className="block text-white">Tɛkyerɛma Pa</span>
          <span className="block text-[#2f7bf6]">Hackathon</span>
        </h1>

        <div
          aria-hidden="true"
          className="mx-auto w-16 h-[3px] rounded-full bg-[#c9a227] mb-6"
        />

        <p className="font-eyebrow text-eyebrow text-[#5b9bf0] uppercase tracking-[0.35em] mb-5">
          Good Tongue Hackathon
        </p>

        <p className="font-body-lg text-[clamp(1.1rem,2.2vw,1.5rem)] text-white/90 mb-12">
          Empowering communication through technology
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/editions/2025"
            className="group inline-flex items-center justify-center gap-3 bg-[#1d4ed8] hover:bg-[#2563eb] text-white px-8 py-4 rounded-lg font-body-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
          >
            Explore 2025 Edition
            <Icon
              name="arrow_forward"
              className="text-lg transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/editions/2026"
            className="group inline-flex items-center justify-center gap-3 border border-white/40 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-body-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
          >
            Discover 2026 Edition
            <Icon
              name="arrow_forward"
              className="text-lg transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <a
          href="#mission"
          aria-label="Scroll to page content"
          className="mt-16 inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
        >
          <Icon name="expand_more" className="text-2xl" />
        </a>
      </div>
    </section>
  );
}
