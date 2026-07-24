import ImageWithFallback from "@/components/shared/ImageWithFallback";
import {
  finalistTeams,
  type FinalistTeam,
  type TeamMember,
} from "@/lib/edition-2025";
import { publicImage } from "@/lib/assets";

const TITLES = new Set(["dr.", "dr", "prof.", "prof", "mr.", "mrs.", "ms."]);

/** "Ama Boateng" -> "AB". Used until an individual photo is supplied. */
function initials(name: string) {
  return (
    name
      .split(" ")
      .filter((part) => !TITLES.has(part.toLowerCase()))
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("") || "?"
  );
}

function MemberAvatar({ member }: { member: TeamMember }) {
  return (
    <li className="flex flex-col items-center text-center w-20">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-secondary/10 flex items-center justify-center hairline-border">
        <ImageWithFallback
          src={publicImage(member.image)}
          alt={`Portrait of ${member.name}`}
          width={64}
          height={64}
          className="w-full h-full object-cover"
          fallback={
            <span
              aria-hidden="true"
              className="font-stats-mono text-secondary text-sm"
            >
              {initials(member.name)}
            </span>
          }
        />
      </div>
      <p className="font-body-md text-sm font-semibold text-on-surface mt-2 leading-tight">
        {member.name}
      </p>
      {member.role && (
        <p className="font-body-md text-[14px] text-on-surface-variant leading-tight">
          {member.role}
        </p>
      )}
    </li>
  );
}

function TeamCard({ team }: { team: FinalistTeam }) {
  return (
    <li className="bg-surface-container-lowest rounded-xl hairline-border hover-lift flex flex-col overflow-hidden">
      {team.groupPhoto && (
        <div className="relative aspect-[16/9] bg-secondary/10">
          <ImageWithFallback
            src={publicImage(team.groupPhoto)}
            alt={team.groupPhotoAlt ?? `${team.name} at the 2025 grand finale`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            fallback={
              <span className="absolute inset-0 flex items-center justify-center font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest opacity-50">
                Finale photo to come
              </span>
            }
          />
          {team.placement && (
            <span className="absolute top-0 right-0 bg-secondary text-on-secondary px-4 py-1 font-label-caps text-[13px] uppercase tracking-widest">
              {team.placement} place
            </span>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        {!team.groupPhoto && team.placement && (
          <span className="self-start bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-caps text-[13px] uppercase tracking-widest mb-3">
            {team.placement} place
          </span>
        )}
        <h3 className="font-headline-md text-2xl mb-1">{team.name}</h3>
        <p className="font-label-caps text-label-caps text-secondary uppercase tracking-wide mb-4">
          {team.idea}
        </p>
        {team.description && (
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed flex-grow">
            {team.description}
          </p>
        )}

        {team.members.length > 0 && (
          <div className="pt-5 mt-5 border-t border-on-surface/10">
            <span className="font-label-caps text-[13px] text-on-surface-variant uppercase block mb-4">
              Team
            </span>
            <ul className="flex flex-wrap gap-x-4 gap-y-5">
              {team.members.map((member) => (
                <MemberAvatar key={member.name} member={member} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
}

export default function FinalistTeams() {
  return (
    <section
      id="finalists"
      className="bg-surface-container-low py-section-gap scroll-mt-24"
    >
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="font-headline-md text-headline-md mb-2">
          Finalist Teams
        </h2>
        <p className="text-on-surface-variant font-body-md mb-12 max-w-2xl">
          The five teams selected from the ideation sprint, who presented their
          solutions at the grand finale on 30 May 2025.
        </p>

        {finalistTeams.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {finalistTeams.map((team) => (
              <TeamCard key={team.name} team={team} />
            ))}
          </ul>
        ) : (
          <p className="font-body-md text-on-surface-variant border-l-2 border-secondary pl-6 py-2">
            Details of the five finalist teams and their solutions are being
            compiled and will be published here shortly.
          </p>
        )}
      </div>
    </section>
  );
}
