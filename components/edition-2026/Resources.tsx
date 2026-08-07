import Icon from "@/components/shared/Icon";
import { publicFileExists } from "@/lib/assets";

/*
 * Awareness campaign session on YouTube. Paste the real video URL here.
 * Leave it empty ("") to hide the video card until you have the link.
 */
const YOUTUBE_URL = "https://youtu.be/CFrkYp10hvs?si=Br4UBMA-s0UELy3d";

interface Material {
  title: string;
  description: string;
  /** Path under /public — drop the file into /public/materials/2026/. */
  file: string;
  format: string;
}

/*
 * Drop the 2026 files into /public/materials/2026/ using these filenames, or
 * edit the list to match your own. Entries whose file is missing are hidden
 * automatically, so this section only shows what actually exists.
 */
const MATERIALS: Material[] = [
  {
    title: "Awareness Campaign Deck",
    description:
      "The presentation used during the 2026 awareness campaign and team outreach.",
    file: "/materials/2026/Awareness Campaign.pptx",
    format: "PPTX",
  },
  {
    title: "Hackathon Brief",
    description:
      "The challenge brief covering the theme, eligibility, and how to apply.",
    file: "/materials/2026/hackathon-brief.pdf",
    format: "PDF",
  },
];

/** Pull the 11-char video id from any common YouTube URL form. */
function youtubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|live\/|shorts\/))([A-Za-z0-9_-]{11})/,
  );
  return match ? match[1] : null;
}

export default function Resources() {
  const videoId = YOUTUBE_URL ? youtubeId(YOUTUBE_URL) : null;
  const availableMaterials = MATERIALS.filter((m) => publicFileExists(m.file));

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-md">Resources</h2>
          <p className="text-on-surface-variant font-body-md mt-2">
            Watch the awareness session and download the materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Awareness campaign video */}
          <div className="lg:col-span-7">
            {videoId ? (
              <div className="relative aspect-video rounded-xl overflow-hidden editorial-border">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                  title="MTN Tɛkyerɛma Pa Hackathon 2026 — awareness campaign"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video rounded-xl editorial-border bg-surface-container flex flex-col items-center justify-center text-center gap-3 p-8">
                <Icon
                  name="smart_display"
                  className="text-primary text-5xl opacity-70"
                />
                <p className="font-body-md text-on-surface-variant max-w-sm">
                  The awareness campaign session video will appear here once the
                  YouTube link is added.
                </p>
              </div>
            )}
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mt-4">
              Awareness Campaign · Live session
            </p>
          </div>

          {/* Downloadable materials */}
          <div className="lg:col-span-5">
            <h3 className="font-headline-md text-[22px] mb-6">Materials</h3>
            {availableMaterials.length > 0 ? (
              <ul className="flex flex-col gap-4">
                {availableMaterials.map((material) => (
                  <li key={material.file}>
                    <a
                      href={material.file}
                      download
                      className="group flex items-start gap-4 p-5 bg-surface-container rounded-xl editorial-border card-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <span
                        className="w-11 h-11 shrink-0 rounded-lg bg-primary/15 text-primary flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <Icon name="description" className="text-2xl" />
                      </span>
                      <span className="flex-grow">
                        <span className="block font-body-md font-bold text-on-surface">
                          {material.title}
                        </span>
                        <span className="block font-body-md text-sm text-on-surface-variant mb-2">
                          {material.description}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-label-caps text-label-caps text-primary uppercase tracking-widest">
                          Download {material.format}
                          <Icon name="download" className="text-base" />
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-body-md text-on-surface-variant border-l-2 border-primary pl-5 py-2">
                Materials for the 2026 edition will be available for download
                here shortly.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
