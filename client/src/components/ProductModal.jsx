import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, Check, Shield, Star, Plus } from 'lucide-react';

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.25 });
      gsap.fromTo(modalRef.current, 
        { scale: 0.95, opacity: 0, y: 20 }, 
        { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      );
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        ref={backdropRef}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md opacity-0 transition-opacity"
      />

      <div 
        ref={modalRef}
        className="relative w-full max-w-3xl bg-iron-surface border border-iron-border rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-iron-border bg-iron-bg/60">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-iron-accent tracking-widest uppercase">
              SPEC SHEET // {product.sku}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-white/5 border border-iron-border text-zinc-300">
              {product.category}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-iron-muted hover:text-white hover:bg-white/5 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-iron-bg rounded-xl border border-iron-border/60 p-6 flex items-center justify-center relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-56 object-cover rounded-lg"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 border border-white/10 text-xs font-mono text-white">
                <Star size={12} className="fill-iron-accent text-iron-accent" />
                <span>{product.rating} Verified Rating</span>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {product.name}
                </h3>
                <p className="font-mono text-2xl font-bold text-iron-accent mt-2">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-iron-muted mt-2 leading-relaxed">
                  Industrial-grade mechanism calibrated for heavy duty cycles. Tested against excessive thermal overload and high continuous torque operations.
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-zinc-300 pt-2 border-t border-iron-border/60">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-iron-accent" />
                  <span>Individual Laser Calibration Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-iron-accent" />
                  <span>Heavy-Duty Shockproof Molded Case</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-iron-accent" />
                  <span>5-Year Comprehensive Machine Warranty</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="w-full py-3 rounded-xl bg-iron-accent hover:bg-[#e04f0f] text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
              >
                <Plus size={16} />
                <span>Add Equipment To Cart</span>
              </button>
            </div>

          </div>

          <div className="border-t border-iron-border pt-5">
            <h4 className="font-mono text-xs uppercase tracking-widest text-iron-muted mb-3">
              Full Engineering Specifications
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="p-3 rounded-xl bg-iron-bg border border-iron-border/60">
                  <span className="text-iron-muted text-[10px] uppercase block capitalize">{key}</span>
                  <span className="text-white font-semibold mt-0.5 block">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}