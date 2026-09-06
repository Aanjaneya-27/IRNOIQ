// src/components/Navbar.jsx
import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: "Machinery", href: "#catalog" },
  { name: "Showcase", href: "#showcase" },
  { name: "Engineering", href: "#features" },
  { name: "Manifesto", href: "#about" },
];

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 sm:py-5 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-6xl px-5 sm:px-6 py-3 rounded-2xl bg-iron-surface/85 border border-iron-border backdrop-blur-md shadow-2xl transition-all">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-iron-accent group-hover:scale-125 transition-transform" />
          <span className="font-black tracking-wider text-xl text-white">
            IRON<span className="text-iron-accent">IQ</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] uppercase text-iron-muted border border-iron-border px-1.5 py-0.5 rounded">
            SPEC-01
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-iron-muted">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions: Cart + Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl bg-white/5 border border-iron-border hover:border-iron-accent hover:bg-white/10 transition-all text-white cursor-pointer"
          >
            <ShoppingBag size={15} className="text-iron-accent" />
            <span className="hidden sm:inline font-mono">Cart</span>
            <span className="flex items-center justify-center w-5 h-5 text-[11px] font-mono bg-iron-accent text-white rounded-full">
              {cartCount}
            </span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-iron-border bg-white/5 text-white md:hidden"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 bg-iron-surface border border-iron-border rounded-2xl p-6 shadow-2xl md:hidden space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-sm uppercase tracking-wider">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-iron-muted hover:text-white py-1 border-b border-iron-border/50"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 text-xs font-mono text-iron-muted">
            STATUS: <span className="text-emerald-400">DISPATCH READY</span>
          </div>
        </div>
      )}
    </header>
  );
}