// src/components/Marquee.jsx
export default function Marquee() {
  const items = [
    "ISO 6789 CALIBRATION",
    "•",
    "BRUSHLESS CORE v3",
    "•",
    "TITANIUM GRADE 5",
    "•",
    "DIN EN 60745 CERTIFIED",
    "•",
    "10-YEAR SPARE PARTS AVAILABILITY",
    "•",
    "AEROSPACE GRADE TOLERANCE",
    "•",
  ];

  return (
    <div className="w-full border-y border-iron-border bg-iron-surface/40 overflow-hidden py-3 select-none flex">
      <div className="flex shrink-0 animate-marquee items-center gap-6 whitespace-nowrap text-xs font-mono text-iron-muted uppercase tracking-widest">
        {[...items, ...items].map((text, i) => (
          <span key={i} className={text === "•" ? "text-iron-accent" : ""}>
            {text}
          </span>
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee items-center gap-6 whitespace-nowrap text-xs font-mono text-iron-muted uppercase tracking-widest" aria-hidden="true">
        {[...items, ...items].map((text, i) => (
          <span key={i} className={text === "•" ? "text-iron-accent" : ""}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}