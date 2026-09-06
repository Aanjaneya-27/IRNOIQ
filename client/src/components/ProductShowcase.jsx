// src/components/ProductShowcase.jsx
import { useState } from 'react';
import { Crosshair, ArrowRight, CheckCircle2 } from 'lucide-react';

const HOTSPOTS = [
  {
    id: "motor",
    title: "Brushless Magnetic Stator",
    metric: "2,400 RPM",
    tag: "DRIVE CORE",
    pos: "top-[40%] left-[45%]",
    desc: "Direct-drive brushless motor wound with aerospace copper coils. Generates 85 Nm of continuous torque with zero carbon brush friction or thermal degrade.",
    specs: ["Thermal cut-off at 110°C", "Dual-bearing balancing", "10,000 hrs rated lifespan"]
  },
  {
    id: "chuck",
    title: "Tungsten Keyless Chuck",
    metric: "13mm (1/2\")",
    tag: "TOLERANCE",
    pos: "top-[25%] left-[20%]",
    desc: "Single-sleeve all-metal ratcheting chuck with carbide jaws. Prevents bit slipping under heavy masonry hammering and hammer drill vibration.",
    specs: ["0.02mm runout tolerance", "Hardened steel casing", "Quick-lock mechanism"]
  },
  {
    id: "gearbox",
    title: "Planetary Dual-Speed Gearbox",
    metric: "21 Clutch Steps",
    tag: "TRANSMISSION",
    pos: "top-[30%] left-[62%]",
    desc: "Full heat-treated alloy steel gear set. Shift seamlessly between high-torque fabrication driving (Speed 1) and high-speed core drilling (Speed 2).",
    specs: ["Heavy grease bath sealing", "Hammer/Drill/Drive selector", "Anti-kickback clutch"]
  },
  {
    id: "battery",
    title: "21700 High-Drain Battery Pack",
    metric: "20V // 5.0Ah",
    tag: "POWER CELL",
    pos: "top-[78%] left-[75%]",
    desc: "Individually monitored Samsung 21700 cells with copper heat sinking. Retains full power output even down to 5% charge state.",
    specs: ["45-min fast charging", "Shock-dampened frame", "Integrated LED fuel gauge"]
  }
];

export default function ProductShowcase({ onAddToCart }) {
  const [activeHotspot, setActiveHotspot] = useState(HOTSPOTS[0]);

  const flagshipProduct = {
    id: "prod-flagship",
    name: "IRONIQ APEX-20 Heavy Cordless Impact Drill",
    sku: "APX-DRL-85NM",
    price: 12999,
    category: "Power Tools",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
    specs: {
      torque: "85 Nm",
      motor: "Brushless",
      weight: "1.65 kg",
      voltage: "20V Max"
    }
  };

  return (
    <section id="showcase" className="px-6 py-24 max-w-6xl mx-auto border-t border-iron-border">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-iron-accent">
            FLAGSHIP ARCHITECTURE // DECONSTRUCTED
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
            APEX-20 Precision Drill
          </h2>
        </div>
        <p className="text-iron-muted text-sm max-w-md font-mono">
          Click the technical inspection pins to view the precision-engineered subsystem mechanics.
        </p>
      </div>

      {/* Main Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Visual Area with Pins */}
        <div className="lg:col-span-7 relative bg-iron-surface/70 border border-iron-border rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[450px]">
          
          {/* Top Status */}
          <div className="flex items-center justify-between text-xs font-mono text-iron-muted z-10">
            <span className="flex items-center gap-1.5 text-white">
              <Crosshair size={14} className="text-iron-accent" />
              CAD VIEW // 1:1 SCALE INSPECTION
            </span>
            <span>MODEL: APX-20-PRO</span>
          </div>

          {/* Centered Product Image */}
          <div className="relative my-8 flex items-center justify-center">
            <img 
              src={flagshipProduct.image} 
              alt="APEX-20 Drill"
              className="w-full max-w-md object-contain rounded-2xl drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter brightness-95 contrast-105"
            />

            {/* Hotspot Pins Over the Image */}
            {HOTSPOTS.map((hotspot) => {
              const isActive = activeHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspot(hotspot)}
                  className={`absolute ${hotspot.pos} -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer`}
                >
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <span 
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isActive ? "bg-iron-accent" : "bg-white/40"
                      }`} 
                    />
                    <span 
                      className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-[10px] font-mono font-bold transition-transform ${
                        isActive ? "bg-iron-accent text-white scale-125" : "bg-zinc-800 text-zinc-300 border border-white/20 hover:scale-110"
                      }`}
                    >
                      +
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Subsystem Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-iron-border/60 z-10">
            {HOTSPOTS.map((h) => (
              <button
                key={h.id}
                onClick={() => setActiveHotspot(h)}
                className={`px-3 py-2 rounded-xl text-left font-mono text-xs transition-all ${
                  activeHotspot.id === h.id
                    ? "bg-iron-accent/20 border border-iron-accent text-white"
                    : "bg-iron-bg/60 border border-iron-border/60 text-iron-muted hover:text-white"
                }`}
              >
                <span className="text-[10px] uppercase text-iron-muted block">{h.tag}</span>
                <span className="truncate block font-semibold">{h.metric}</span>
              </button>
            ))}
          </div>

        </div>

        {/* Right Inspection Specs Card */}
        <div className="lg:col-span-5 bg-iron-surface border border-iron-border rounded-3xl p-8 flex flex-col justify-between">
          <div className="space-y-6">
            
            <div className="flex items-center justify-between border-b border-iron-border pb-4">
              <span className="font-mono text-xs text-iron-accent uppercase tracking-wider font-semibold">
                ACTIVE COMPONENT // {activeHotspot.tag}
              </span>
              <span className="font-mono text-xs text-white bg-white/5 px-2 py-1 rounded border border-iron-border">
                {activeHotspot.metric}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {activeHotspot.title}
              </h3>
              <p className="text-iron-muted text-sm mt-3 leading-relaxed">
                {activeHotspot.desc}
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-2.5 pt-2">
              {activeHotspot.specs.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                  <CheckCircle2 size={15} className="text-iron-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Buy Flagship CTA Box */}
          <div className="pt-8 mt-8 border-t border-iron-border space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono text-iron-muted block">Direct Price</span>
                <span className="text-2xl font-mono font-bold text-white">₹{flagshipProduct.price.toLocaleString('en-IN')}</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                READY FOR DISPATCH
              </span>
            </div>

            <button
              onClick={() => onAddToCart(flagshipProduct)}
              className="w-full py-3.5 rounded-xl bg-iron-accent hover:bg-[#e04f0f] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-iron-accent/20 cursor-pointer"
            >
              <span>Add Flagship Machine To Order</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}