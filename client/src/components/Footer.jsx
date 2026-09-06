import { ArrowUpRight, Terminal, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-iron-border bg-iron-bg px-6 pt-20 pb-12">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="p-8 rounded-3xl bg-iron-surface border border-iron-border flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-md">
            <div className="flex items-center gap-2 text-iron-accent mb-2">
              <Mail size={16} />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">Technical Bulletins</span>
            </div>
            <h3 className="text-xl font-bold text-white">Join the Workshop Dispatch</h3>
            <p className="text-iron-muted text-xs mt-1">Get early access to limited tool batches, CAD schematics, and firmware updates.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="engineer@domain.com"
              className="px-4 py-3 rounded-xl bg-iron-bg border border-iron-border text-white text-xs font-mono placeholder:text-iron-muted focus:outline-none focus:border-iron-accent w-full md:w-64"
            />
            <button 
              type="submit"
              className="px-5 py-3 rounded-xl bg-iron-accent hover:bg-[#e04f0f] text-white font-semibold text-xs tracking-wider uppercase transition-all shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-iron-accent" />
              <span className="font-black tracking-wider text-xl text-white">
                IRON<span className="text-iron-accent">IQ</span>
              </span>
            </div>
            <p className="text-iron-muted text-xs leading-relaxed max-w-sm">
              Industrial grade hardware, brushless cordless machinery, and precision metrology equipment. Built to tight tolerances for aerospace, automotive, and heavy workshop fabrication.
            </p>
            <div className="flex items-center gap-2 font-mono text-[11px] text-iron-muted pt-2">
              <Terminal size={14} className="text-iron-accent" />
              <span>FACILITY // LAT 20.2961° N, LON 85.8245° E</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-white font-semibold">Machinery</p>
            <ul className="space-y-2 text-xs text-iron-muted">
              <li><a href="#catalog" className="hover:text-white transition-colors">20V Brushless Drills</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Angle Grinders</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Rotary Hammers</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Compound Miter Saws</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Dust Extraction Systems</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-white font-semibold">Precision</p>
            <ul className="space-y-2 text-xs text-iron-muted">
              <li><a href="#catalog" className="hover:text-white transition-colors">Micron Digital Calipers</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Torque Limiting Wrenches</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Dial Indicators</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Granite Surface Plates</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Calibration Certificates</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-white font-semibold">Support</p>
            <ul className="space-y-2 text-xs text-iron-muted">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">CAD Schematics <ArrowUpRight size={12} /></a></li>
              <li><a href="#" className="hover:text-white transition-colors">Spare Parts Catalog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty Claim</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Material Safety Data</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Dispatch</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-iron-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-iron-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEMS OPERATIONAL
            </span>
            <span>•</span>
            <span>BUILD v2.4.0</span>
          </div>

          <div>
            © {new Date().getFullYear()} IRONIQ PRECISION TOOLING CO. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
}