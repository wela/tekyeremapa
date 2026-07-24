const BAR_COUNT = 180;
const VIEW_W = 1200;
const VIEW_H = 220;
const MID = VIEW_H / 2;

/**
 * Deterministic audio-waveform backdrop. Heights come from a fixed sine
 * combination rather than Math.random so the server and client render the same
 * markup (random values would cause a hydration mismatch).
 *
 * Shape: the waveform peaks just outside the headline on each side and tapers
 * down toward the outer edges, leaving the centre clear for the title.
 */
function barHeight(i: number) {
  const t = i / BAR_COUNT;
  const wave =
    Math.abs(Math.sin(i * 0.21) * 0.55) +
    Math.abs(Math.cos(i * 0.07) * 0.3) +
    Math.abs(Math.sin(i * 0.53) * 0.25);
  // d = distance from centre (0 at middle, 0.5 at the outer edges).
  const d = Math.abs(t - 0.5);
  // Peak sits at d = 0.25, just outside the text, then decays outward.
  const envelope = Math.exp(-((d - 0.25) ** 2) / (2 * 0.13 ** 2));
  return Math.max(1.5, wave * envelope * MID * 1.6);
}

export default function Waveform({ className }: { className?: string }) {
  const step = VIEW_W / BAR_COUNT;

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        {/*
         * Fully transparent across the middle so the headline sits in clear
         * space, brightest just outside it, then easing off toward the edges.
         */}
        <linearGradient id="wave-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5b9bf0" stopOpacity="0.3" />
          <stop offset="0.08" stopColor="#63b3ff" stopOpacity="0.5" />
          <stop offset="0.18" stopColor="#9ed4ff" stopOpacity="0.85" />
          <stop offset="0.25" stopColor="#dbeeff" stopOpacity="1" />
          <stop offset="0.3" stopColor="#dbeeff" stopOpacity="0" />
          <stop offset="0.7" stopColor="#dbeeff" stopOpacity="0" />
          <stop offset="0.75" stopColor="#dbeeff" stopOpacity="1" />
          <stop offset="0.82" stopColor="#9ed4ff" stopOpacity="0.85" />
          <stop offset="0.92" stopColor="#63b3ff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#5b9bf0" stopOpacity="0.3" />
        </linearGradient>
        <filter id="wave-glow" x="-20%" y="-60%" width="140%" height="220%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#wave-glow)">
        {/* Baseline: the bright hairline that runs out to both edges. */}
        <rect
          x="0"
          y={MID - 0.75}
          width={VIEW_W}
          height="1.5"
          fill="url(#wave-fade)"
        />
        {Array.from({ length: BAR_COUNT }, (_, i) => {
          const h = barHeight(i);
          return (
            <rect
              key={i}
              x={i * step}
              y={MID - h / 2}
              width={Math.max(1, step * 0.4)}
              height={h}
              rx={0.75}
              fill="url(#wave-fade)"
            />
          );
        })}
      </g>
    </svg>
  );
}
