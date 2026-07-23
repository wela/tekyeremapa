import ImageWithFallback from "@/components/shared/ImageWithFallback";
import { mentorTracks, type Mentor } from "@/lib/edition-2025";
import { publicImage } from "@/lib/assets";

const TITLES = new Set(["dr.", "dr", "prof.", "prof", "mr.", "mrs.", "ms."]);

/** "Dr. Katrin Tomanek" -> "KT". Used until real headshots are supplied. */
function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => !TITLES.has(part.toLowerCase()))
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <li className="bg-surface-container-lowest p-6 rounded-xl hairline-border card-lift flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden bg-secondary/10 flex items-center justify-center hairline-border">
          <ImageWithFallback
            src={publicImage(mentor.image)}
            alt={`Portrait of ${mentor.name}`}
            width={160}
            height={160}
            className="w-full h-full object-cover"
            fallback={
              <span
                aria-hidden="true"
                className="font-stats-mono text-secondary text-xl"
              >
                {initials(mentor.name)}
              </span>
            }
          />
        </div>
        <div>
          <h4 className="font-body-md font-bold text-on-surface">
            {mentor.name}
          </h4>
          <p className="font-body-md text-sm text-on-surface-variant">
            {mentor.role}
          </p>
        </div>
      </div>
      <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
        {mentor.bio}
      </p>
    </li>
  );
}

export default function MentorsColumns() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
      <h2 className="font-headline-md text-headline-md mb-2">Mentors</h2>
      <p className="font-body-md text-on-surface-variant mb-12 max-w-2xl">
        Teams were supported across five tracks, from speech technology and
        inclusive design to clinical practice, Ghanaian linguistics, and taking
        a solution to market.
      </p>

      <div className="space-y-16">
        {mentorTracks.map((track) => (
          <div key={track.title}>
            <div className="border-b border-secondary/20 pb-3 mb-8">
              <h3 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                {track.title}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant mt-2">
                {track.focus}
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {track.mentors.map((mentor) => (
                <MentorCard key={mentor.name} mentor={mentor} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
