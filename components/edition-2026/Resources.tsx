import Icon from "@/components/shared/Icon";
import HorizontalCarousel from "@/components/shared/HorizontalCarousel";
import { publicFileExists } from "@/lib/assets";

interface VideoResource {
  title: string;
  label: string;
  url: string;
}

/*
 * Add YouTube videos here. Entries with an empty or invalid URL are hidden.
 */
const YOUTUBE_VIDEOS: VideoResource[] = [
  {
    title: "MTN Tɛkyerɛma Pa Hackathon 2026 — awareness campaign",
    label: "Awareness Campaign · Live session",
    url: "https://youtu.be/CFrkYp10hvs?si=Br4UBMA-s0UELy3d",
  },
  {
    title: "MTN Tɛkyerɛma Pa Hackathon 2026 Teams Outreach",
    label: "Teams Outreach· Live session",
    url: "https://youtu.be/ZN3BaVbOwQk?si=6UeNwDUC8O5HNCuy",
  },
];

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
    title: "Teams Outreach Deck",
    description:
      "The presentation used during the 2026 teams outreach sessions.",
    file: "/materials/2026/Teams Outreach.pptx",
    format: "PPTX",
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
  const availableVideos = YOUTUBE_VIDEOS.flatMap((video) => {
    const id = youtubeId(video.url);
    return id ? [{ ...video, id }] : [];
  });
  const availableMaterials = MATERIALS.filter((m) => publicFileExists(m.file));

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-md">Resources</h2>
          <p className="text-on-surface-variant font-body-md mt-2">
            Watch the awareness sessions and download the materials.
          </p>
        </div>

        <div className="space-y-14">
          {/* YouTube videos */}
          {availableVideos.length > 0 ? (
            <HorizontalCarousel
              title="Videos"
              ariaLabel="Resource videos"
              variant="video"
            >
              {availableVideos.map((video) => (
                <article key={video.url}>
                  <div className="relative aspect-video overflow-hidden rounded-xl editorial-border bg-black">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-4 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                    {video.label}
                  </p>
                </article>
              ))}
            </HorizontalCarousel>
          ) : (
            <div>
              <h3 className="mb-6 font-headline-md text-[22px]">Videos</h3>
              <div className="aspect-video rounded-xl editorial-border bg-surface-container flex flex-col items-center justify-center text-center gap-3 p-8">
                <Icon
                  name="smart_display"
                  className="text-primary text-5xl opacity-70"
                />
                <p className="font-body-md text-on-surface-variant max-w-sm">
                  Awareness campaign videos will appear here once their YouTube
                  links are added.
                </p>
              </div>
            </div>
          )}

          {/* Downloadable materials */}
          {availableMaterials.length > 0 ? (
            <HorizontalCarousel
              title="Materials"
              ariaLabel="Downloadable materials"
              variant="file"
            >
              {availableMaterials.map((material) => (
                <a
                  key={material.file}
                  href={material.file}
                  download
                  className="group flex h-full items-start gap-4 rounded-xl bg-surface-container p-5 editorial-border card-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary"
                    aria-hidden="true"
                  >
                    <Icon name="description" className="text-2xl" />
                  </span>
                  <span className="flex-grow">
                    <span className="block font-body-md font-bold text-on-surface">
                      {material.title}
                    </span>
                    <span className="mb-2 block font-body-md text-sm text-on-surface-variant">
                      {material.description}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-label-caps text-label-caps uppercase tracking-widest text-primary">
                      Download {material.format}
                      <Icon name="download" className="text-base" />
                    </span>
                  </span>
                </a>
              ))}
            </HorizontalCarousel>
          ) : (
            <div>
              <h3 className="mb-6 font-headline-md text-[22px]">Materials</h3>
              <p className="border-l-2 border-primary py-2 pl-5 font-body-md text-on-surface-variant">
                Materials for the 2026 edition will be available for download
                here shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
