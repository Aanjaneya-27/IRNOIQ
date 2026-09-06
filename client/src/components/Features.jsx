import { Cpu, ShieldAlert, Wrench, Layers } from 'lucide-react';

const BENCHMARKS = [
  {
    icon: Cpu,
    tag: "DRIVE SYSTEM",
    title: "Brushless Smart Motors",
    desc: "Integrated micro-controllers dynamically monitor current draw, optimizing torque under extreme load without thermal throttle."
  },
  {
    icon: ShieldAlert,
    tag: "HOUSING TECH",
    title: "Magnesium Alloy Chassis",
    desc: "Cast in lightweight structural magnesium, designed to survive repeated 3-meter concrete drop impacts and oil exposure."
  },
  {
    icon: Wrench,
    tag: "TOLERANCE",
    title: "Sub-Micron Calibration",
    desc: "Every torque wrench and digital caliper leaves our facility laser-calibrated to ISO 6789 and DIN EN specifications."
  },
  {
    icon: Layers,
    tag: "BATTERY CELL",
    title: "High-Drain Lithium Core",
    desc: "21700 industrial cells with active copper heat spreaders, delivering uninterrupted runtime in temperatures from -20°C to 60°C."
  }
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-24 max-w-6xl mx-auto border-t border-iron-border">
      
      {/* Section Header */}
      <div className="max-w-2xl mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-iron-accent">
          ARCHITECTURE // HARDWARE STANDARDS
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
          Engineered Beyond Consumer Grade.
        </h2>
        <p className="text-iron-muted text-sm mt-3 leading-relaxed">
          Standard store tools fail under continuous duty cycle. IRONIQ equipment is rated for non-stop industrial fabrication shifts.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BENCHMARKS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-iron-surface/50 border border-iron-border hover:border-iron-border-hover transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-white/5 text-iron-accent border border-iron-border group-hover:scale-110 transition-transform">
                  <Icon size={22} />
                </div>
                <span className="font-mono text-[10px] text-iron-muted uppercase tracking-widest px-2.5 py-1 rounded bg-black/40 border border-iron-border/60">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-iron-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-iron-muted text-sm mt-2.5 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}