// Original hand-drawn pencil doodles. Rendered as SVG with a shared pencil filter
// (see PencilDefs) so strokes look wobbly and grainy, like graphite on paper.

type Shape = { viewBox: string; paths: string[]; stretch?: boolean };

const shapes = {
  squiggle: {
    viewBox: "0 0 120 50",
    paths: ["M4 30 C 18 4, 34 4, 30 24 S 12 46, 28 40 S 58 8, 64 28 S 80 48, 96 22 S 112 10, 116 26"],
  },
  circle: {
    stretch: true,
    viewBox: "0 0 200 80",
    paths: ["M24 44 C 20 16, 150 6, 186 30 C 204 46, 160 74, 90 74 C 30 74, 6 56, 18 36 C 28 20, 80 10, 130 12"],
  },
  underline: {
    stretch: true,
    viewBox: "0 0 200 24",
    paths: ["M3 12 C 50 4, 100 16, 150 8 C 170 5, 186 8, 197 6", "M18 19 C 70 13, 120 21, 182 14"],
  },
  arrow: {
    viewBox: "0 0 120 80",
    paths: ["M6 70 C 20 30, 60 10, 108 22", "M92 10 L109 22 L94 36"],
  },
  arrowDown: {
    viewBox: "0 0 70 110",
    paths: ["M40 4 C 10 30, 60 50, 30 100", "M16 86 L30 102 L44 84"],
  },
  star: {
    viewBox: "0 0 100 100",
    paths: ["M50 6 L60 38 L95 39 L67 59 L79 93 L50 72 L21 92 L33 59 L6 38 L40 37 L51 8"],
  },
  sparkle: {
    viewBox: "0 0 60 60",
    paths: ["M30 4 L31 56", "M5 30 L55 29", "M12 12 L48 47", "M47 12 L13 48"],
  },
  check: {
    viewBox: "0 0 40 40",
    paths: ["M5 22 L15 33 C 20 22, 26 12, 36 5"],
  },
  spiral: {
    viewBox: "0 0 100 100",
    paths: ["M52 50 C 52 46, 58 46, 58 51 C 58 58, 46 60, 44 51 C 41 40, 60 36, 66 48 C 73 62, 56 74, 42 68 C 26 61, 28 36, 48 30 C 70 24, 84 44, 80 62 C 76 82, 50 90, 32 80"],
  },
  bubble: {
    viewBox: "0 0 140 100",
    paths: ["M24 70 C 2 60, 4 18, 40 10 C 80 2, 130 12, 134 40 C 138 66, 96 78, 60 74 L 34 94 L 40 72"],
  },
  hatch: {
    viewBox: "0 0 80 80",
    paths: ["M6 30 L30 6", "M6 46 L46 6", "M6 62 L62 6", "M10 74 L74 10", "M26 74 L74 26", "M42 74 L74 42", "M58 74 L74 58"],
  },
  loops: {
    viewBox: "0 0 160 40",
    paths: ["M4 26 C 12 6, 26 6, 22 22 C 18 36, 40 34, 42 20 C 44 6, 60 6, 58 22 C 56 36, 78 34, 80 20 C 82 6, 98 6, 96 22 C 94 36, 116 34, 118 20 C 120 6, 136 6, 134 22 C 132 34, 150 32, 156 24"],
  },
} satisfies Record<string, Shape>;

export type DoodleName = keyof typeof shapes;

export default function Doodle({
  name,
  className = "",
  strokeWidth = 2.6,
  animate = true,
}: {
  name: DoodleName;
  className?: string;
  strokeWidth?: number;
  animate?: boolean;
}) {
  const s: Shape = shapes[name];
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox={s.viewBox}
      preserveAspectRatio={s.stretch ? "none" : undefined}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none select-none overflow-visible ${className}`}
    >
      <g filter="url(#pencil)">
        {s.paths.map((d, i) => (
          <path
            key={i}
            d={d}
            vectorEffect="non-scaling-stroke"
            className={animate ? "doodle-draw" : undefined}
            style={animate ? { animationDelay: `${0.25 + i * 0.25}s` } : undefined}
          />
        ))}
      </g>
    </svg>
  );
}

// Margin note in handwriting.
export function Note({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p aria-hidden className={`font-hand pointer-events-none text-2xl leading-tight ${className}`}>
      {children}
    </p>
  );
}

// Shared pencil texture: a slight wobble plus graphite grain. Render once per page.
export function PencilDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <defs>
        <filter id="pencil" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="3" result="wobble" />
          <feDisplacementMap in="SourceGraphic" in2="wobble" scale="2.2" xChannelSelector="R" yChannelSelector="G" result="wobbly" />
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="1" seed="8" result="grain" />
          <feColorMatrix
            in="grain"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  2 0 0 0 -0.2"
            result="grainAlpha"
          />
          <feComposite in="wobbly" in2="grainAlpha" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}
