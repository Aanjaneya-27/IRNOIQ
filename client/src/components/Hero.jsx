// src/components/Hero.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text & badge entry animation
      gsap.from('.hero-anim', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
      });

      // Subtle pulse/glow on badge
      gsap.to('.hero-glow', {
        opacity: 0.7,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: 'sine.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center px-6 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-iron-accent/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl text-center flex flex-col items-center z-10">
        
        {/* Status Chip */}
        <div className="hero-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-iron-surface border border-iron-border mb-8">
          <span className="hero-glow w-2 h-2 rounded-full bg-iron-accent" />
          <span className="font-mono text-xs uppercase tracking-widest text-iron-muted">
            Engineered for Extreme Tolerance
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-anim text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] text-white uppercase">
          Precision Tools. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-iron-accent">
            Industrial Power.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="hero-anim mt-6 text-base sm:text-lg text-iron-muted max-w-xl font-normal leading-relaxed">
          High-torque cordless machinery, CNC calibrated fasteners, and heavy-grade workshop infrastructure built to last a lifetime.
        </p>

        {/* CTA Buttons */}
        <div className="hero-anim mt-10 flex flex-wrap items-center justify-center gap-4">
          <a 
            href="#catalog"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-iron-accent hover:bg-[#e04f0f] text-white font-semibold text-sm tracking-wide transition-all shadow-lg shadow-iron-accent/20"
          >
            Explore Catalog
            <ArrowRight size={16} />
          </a>
          <button className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-iron-surface hover:bg-iron-border border border-iron-border text-white text-sm font-medium transition-all">
            Technical Specs
          </button>
        </div>

        {/* Quick Specs Strip */}
        <div className="hero-anim mt-16 pt-8 border-t border-iron-border/60 grid grid-cols-2 md:grid-cols-3 gap-8 text-left w-full max-w-2xl">
          <div className="flex items-start gap-3">
            <Zap size={20} className="text-iron-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-mono uppercase text-iron-muted">Brushless Motor</p>
              <p className="text-sm font-semibold text-white mt-0.5">Up to 240 Nm Torque</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck size={20} className="text-iron-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-mono uppercase text-iron-muted">Warranty</p>
              <p className="text-sm font-semibold text-white mt-0.5">5-Year Iron Guarantee</p>
            </div>
          </div>
          <div className="hidden md:flex items-start gap-3">
            <span className="font-mono text-iron-accent font-bold text-lg mt-[-2px]">±</span>
            <div>
              <p className="text-xs font-mono uppercase text-iron-muted">Calibration</p>
              <p className="text-sm font-semibold text-white mt-0.5">ISO 6789 Certified</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}