/**
 * Brand mark — a navy shield holding a gold microphone, approximating the
 * Tɛkyerɛma Pa logo. Recreated as inline SVG so the hero renders without a
 * binary asset; swap for the official file when available.
 */
export default function BrandShield({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      role="img"
      aria-label="Tɛkyerɛma Pa emblem: a shield containing a microphone"
      className={className}
    >
      <defs>
        <linearGradient id="shield-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#132a54" />
          <stop offset="1" stopColor="#0a1a3a" />
        </linearGradient>
        <linearGradient id="mic-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6d179" />
          <stop offset="1" stopColor="#e0ac45" />
        </linearGradient>
      </defs>

      {/* Shield body */}
      <path
        d="M40 16 H160 A24 24 0 0 1 184 40 V120 C184 172 150 206 100 224 C50 206 16 172 16 120 V40 A24 24 0 0 1 40 16 Z"
        fill="url(#shield-fill)"
        stroke="url(#mic-gold)"
        strokeWidth="3"
        strokeOpacity="0.6"
      />

      {/* Microphone, drawn as gold line-work */}
      <g
        fill="none"
        stroke="url(#mic-gold)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="84" y="60" width="32" height="62" rx="16" />
        <path d="M68 108 a32 32 0 0 0 64 0" />
        <line x1="100" y1="140" x2="100" y2="162" />
        <line x1="80" y1="162" x2="120" y2="162" />
      </g>
    </svg>
  );
}
