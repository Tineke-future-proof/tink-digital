// A handful of charcoal-style doodles in the page margins.
// All shapes are original, drawn on a 100 x 100 grid. A shared "charcoal" filter
// (see CharcoalDefs) gives them a rough, grainy, hand-drawn texture.

type Mark = { d: string; fill?: boolean } | { text: string; size?: number };

const marks: Record<string, Mark[]> = {
  eye: [
    { d: "M8 52 C 30 24, 70 24, 92 52 C 70 78, 30 78, 8 52" },
    { d: "M50 40 C 60 40, 62 60, 50 62 C 38 62, 40 40, 50 40" },
    { d: "M47 47 C 53 46, 55 55, 49 56 C 44 55, 44 48, 47 47", fill: true },
    { d: "M28 30 L22 18 M50 25 L50 10 M72 30 L78 18" },
  ],
  sun: [
    { d: "M50 34 C 62 34, 66 50, 60 60 C 52 70, 36 66, 34 54 C 32 42, 40 34, 50 34" },
    { d: "M50 22 L50 10 M50 78 L50 92 M22 50 L8 50 M78 50 L92 50 M30 30 L20 20 M70 70 L80 80 M70 30 L80 20 M30 70 L20 80" },
  ],
  cloud: [
    { d: "M22 54 C 8 54, 8 34, 24 34 C 26 18, 48 16, 52 30 C 60 18, 82 22, 78 38 C 94 38, 94 56, 78 56 L 22 54" },
    { d: "M30 66 L28 76 M46 66 L44 76 M62 66 L60 76 M38 84 L36 94 M54 84 L52 94" },
  ],
  heart: [{ d: "M50 84 C 22 62, 8 42, 24 28 C 36 18, 48 28, 50 38 C 54 26, 68 18, 78 28 C 94 44, 78 64, 50 84" }],
  crown: [{ d: "M14 72 L18 28 L36 50 L50 20 L64 50 L82 28 L86 72 L14 72 M12 84 L88 82" }],
  star: [
    { d: "M50 8 L61 38 L94 40 L68 59 L78 92 L50 72 L22 92 L32 59 L6 40 L39 38 L50 8" },
    { d: "M42 52 L43 53 M58 52 L59 53 M42 62 C 46 68, 54 68, 58 62" },
  ],
  splat: [{ d: "M50 10 L50 90 M14 30 L86 70 M14 70 L86 30" }],
  spiral: [
    {
      d: "M52 50 C 52 45, 59 46, 58 52 C 57 59, 46 60, 44 51 C 42 40, 60 36, 66 48 C 73 62, 56 75, 42 68 C 26 61, 28 35, 48 30 C 70 24, 86 44, 80 63 C 74 82, 48 90, 30 79",
    },
  ],
  grid: [{ d: "M32 10 L30 90 M52 8 L52 92 M72 10 L74 90 M10 32 L90 30 M8 52 L92 50 M10 72 L90 70" }],
  zigzag: [{ d: "M4 62 L16 38 L28 64 L40 36 L52 64 L64 36 L76 64 L96 38" }],
  bubble: [
    { d: "M20 66 C 2 56, 4 20, 40 14 C 78 8, 98 24, 96 44 C 94 64, 66 72, 44 68 L 24 88 L 30 66" },
    { d: "M30 36 L72 34 M30 48 L60 47" },
  ],
  flower: [
    { d: "M50 42 C 56 42, 58 52, 50 54 C 42 54, 44 42, 50 42" },
    {
      d: "M50 42 C 40 20, 62 18, 52 42 M58 48 C 82 40, 82 62, 58 52 M54 56 C 66 78, 44 82, 48 56 M44 54 C 24 70, 16 48, 42 48 M42 44 C 22 30, 40 18, 48 42",
    },
  ],
  moon: [{ d: "M62 12 C 30 18, 22 72, 64 88 C 34 90, 12 62, 20 36 C 26 20, 44 12, 62 12" }],
  checkCircle: [
    { d: "M50 10 C 76 10, 92 32, 88 56 C 84 80, 56 92, 34 84 C 12 76, 6 48, 18 28 C 26 16, 40 10, 54 12" },
    { d: "M30 52 L44 66 C 52 52, 60 40, 74 30" },
  ],
  bolt: [{ d: "M58 6 L28 54 L50 54 L40 94 L76 40 L54 40 L64 6 L58 6" }],
  smiley: [
    { d: "M50 10 C 78 10, 92 34, 88 56 C 84 80, 58 92, 36 86 C 12 78, 6 48, 18 28 C 26 16, 38 10, 50 10" },
    { d: "M36 40 L37 44 M62 40 L63 44 M32 58 C 40 72, 62 72, 70 58" },
  ],
  cross: [{ d: "M20 18 L82 82 M80 20 L22 80" }],
  drop: [{ d: "M50 10 C 40 36, 22 52, 28 68 C 34 88, 66 88, 72 68 C 78 52, 60 36, 50 10" }],
  scribble: [
    {
      d: "M30 40 C 50 20, 80 30, 70 50 C 60 70, 24 66, 30 46 C 36 28, 70 30, 72 52 C 74 72, 40 78, 32 60 C 26 44, 56 34, 66 48 C 74 62, 50 74, 40 62",
    },
  ],
  dashes: [{ d: "M20 20 L28 22 M44 20 L52 21 M68 20 L76 22 M20 46 L28 47 M44 46 L52 48 M68 46 L76 47 M20 72 L28 73 M44 72 L52 74 M68 72 L76 73" }],
  arrowUp: [{ d: "M50 92 C 44 62, 56 40, 50 12 M30 32 L50 10 L70 32" }],
  plus: [{ d: "M50 14 L50 86 M14 50 L86 50" }],
  diamond: [{ d: "M50 8 L86 50 L50 92 L14 50 L50 8" }],
  leaf: [{ d: "M16 86 C 16 40, 48 12, 88 12 C 88 52, 60 86, 16 86 M16 86 L72 30" }],
  dot: [{ d: "M50 30 C 64 30, 70 46, 64 58 C 56 72, 34 68, 32 52 C 30 38, 40 30, 50 30", fill: true }],
  hatch: [{ d: "M20 14 L18 86 M34 12 L32 88 M48 14 L46 86 M62 12 L60 88 M76 14 L74 86" }],
  scribbleLoop: [
    {
      d: "M18 50 C 30 20, 70 18, 78 40 C 86 62, 52 80, 32 68 C 14 56, 30 28, 56 30 C 80 32, 84 60, 62 70 C 44 78, 30 62, 40 48 C 50 36, 70 44, 64 58",
    },
  ],
  xox: [{ text: "xox", size: 68 }],
  wow: [{ text: "wow", size: 66 }],
  ok: [{ text: "ok!", size: 70 }],
};

type MarkName = keyof typeof marks;

// Six marks per page, alternating sides and spread down the page.
const placements: { name: MarkName; side: "left" | "right"; top: string }[] = [
  { name: "eye", side: "left", top: "6%" },
  { name: "scribbleLoop", side: "right", top: "22%" },
  { name: "heart", side: "left", top: "39%" },
  { name: "spiral", side: "right", top: "55%" },
  { name: "crown", side: "left", top: "71%" },
  { name: "star", side: "right", top: "86%" },
];

// Small deterministic "random" so the layout is the same on every render.
function rand(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function Mark({ name, seed }: { name: MarkName; seed: number }) {
  const size = 46 + Math.round(rand(seed) * 24);
  const rotate = Math.round((rand(seed + 1) - 0.5) * 36);
  const shift = Math.round(rand(seed + 2) * 12);
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="overflow-visible"
      style={{ transform: `translateX(${shift}px) rotate(${rotate}deg)` }}
    >
      <g filter="url(#charcoal)">
        {marks[name].map((m, i) =>
          "text" in m ? (
            <text
              key={i}
              x="50"
              y="62"
              textAnchor="middle"
              fontFamily="var(--font-hand)"
              fontWeight="700"
              fontSize={m.size ?? 62}
              fill="currentColor"
              stroke="none"
            >
              {m.text}
            </text>
          ) : (
            <path
              key={i}
              d={m.d}
              fill={m.fill ? "currentColor" : "none"}
              strokeWidth={4.6}
              vectorEffect="non-scaling-stroke"
              className={name === "scribbleLoop" ? "scribble-loop" : undefined}
            />
          ),
        )}
      </g>
    </svg>
  );
}

export default function MarginDoodles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden text-charcoal/85 xl:block">
      {placements.map((p, i) => (
        <div
          key={p.name}
          className="absolute"
          style={{
            top: p.top,
            [p.side]: "max(0.75rem, calc((100vw - 72rem) / 2 - 3rem))",
          }}
        >
          <Mark name={p.name} seed={i * 7 + 3} />
        </div>
      ))}
    </div>
  );
}

export function CharcoalDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <defs>
        <filter id="charcoal" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="11" result="wobble" />
          <feDisplacementMap in="SourceGraphic" in2="wobble" scale="4" xChannelSelector="R" yChannelSelector="G" result="rough" />
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="4" result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  2.4 0 0 0 -0.45" result="grainAlpha" />
          <feComposite in="rough" in2="grainAlpha" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}
