import { CheckCircle2, ArrowRight } from 'lucide-react';

const STATS = [
  { value: "0.01mm", label: "Max Deviation Tolerance" },
  { value: "10,000+", label: "Operating Hours Tested" },
  { value: "5-Year", label: "Ironclad Warranty" },
  { value: "100%", label: "Recyclable Aluminum Shells" },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto border-t border-iron-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-iron-accent">
            THE MANIFESTO // ABOUT IRONIQ
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            We build for the people who take pride in what they fabricate.
          </h2>
          <p className="text-iron-muted text-sm sm:text-base leading-relaxed">
            Founded by aerospace machinists and tool-and-die veterans, IRONIQ was born out of frustration with disposable plastic power tools. We stripped away decorative plastics, discarded cheap nylon gearboxes, and rebuilt workshop equipment from cold-rolled steel, high-grade titanium, and smart firmware.
          </p>

          <div className="space-y-3 pt-2">
            {[
              "Direct-to-workshop pricing without distributor markups",
              "Open schematics & guaranteed spare parts availability for 10 years",
              "ISO-certified test reports included inside every precision package"
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-iron-accent shrink-0" />
                <span className="text-zinc-300 text-sm">{point}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a 
              href="#catalog"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-iron-accent hover:text-white transition-colors"
            >
              <span>Inspect the machinery specs</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Right Metric Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {STATS.map((stat, i) => (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-iron-surface/70 border border-iron-border flex flex-col justify-between h-40 hover:border-iron-border-hover transition-colors"
            >
              <span className="font-mono text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-iron-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}