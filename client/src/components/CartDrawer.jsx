import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldAlert } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}) {
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(drawerRef.current, { x: 0, duration: 0.4, ease: 'power3.out' });
    } else {
      document.body.style.overflow = 'unset';
      gsap.to(backdropRef.current, { opacity: 0, duration: 0.25 });
      gsap.to(drawerRef.current, { x: '100%', duration: 0.35, ease: 'power3.in' });
    }
  }, [isOpen]);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 15000 || subtotal === 0 ? 0 : 499;
  const total = subtotal + shipping;

  return (
    <div className={`fixed inset-0 z-50 transition-visibility duration-300 ${isOpen ? 'visible' : 'invisible pointer-events-none'}`}>
      
      <div 
        ref={backdropRef}
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 transition-opacity"
      />

      <div 
        ref={drawerRef}
        className="absolute top-0 right-0 w-full max-w-md h-full bg-iron-surface border-l border-iron-border flex flex-col translate-x-full shadow-2xl"
      >
        
        <div className="flex items-center justify-between px-6 py-5 border-b border-iron-border">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-iron-accent" />
            <h2 className="text-base font-bold uppercase tracking-wider text-white">Workshop Cart</h2>
            <span className="font-mono text-xs text-iron-muted">({items.length} items)</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/5 text-iron-muted hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-iron-muted">
              <ShieldAlert size={36} className="text-iron-muted/40 mb-3" />
              <p className="font-mono text-xs uppercase tracking-widest">Cart is empty</p>
              <p className="text-xs text-iron-muted/70 mt-1 max-w-[200px]">Add tools from the catalog to configure your order.</p>
            </div>
          ) : (
            items.map((item) => (
              <div 
                key={item.id}
                className="flex gap-4 p-3 rounded-xl bg-iron-bg border border-iron-border/70"
              >
                {/* Image */}
                <div className="w-20 h-20 bg-iron-surface rounded-lg p-2 shrink-0 flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-semibold text-white line-clamp-1">{item.name}</h4>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-iron-muted hover:text-red-400 transition-colors p-0.5"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                    <span className="font-mono text-[11px] text-iron-accent block mt-0.5">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-iron-border rounded-lg bg-iron-surface">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-1 text-iron-muted hover:text-white"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-mono text-xs px-2 text-white">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-1 text-iron-muted hover:text-white"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="font-mono text-xs text-iron-muted ml-auto">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-iron-border bg-iron-bg/40 space-y-3">
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-iron-muted">
                <span>Subtotal</span>
                <span className="text-white">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-iron-muted">
                <span>Industrial Freight</span>
                <span>{shipping === 0 ? <span className="text-green-400">FREE</span> : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between text-sm font-bold pt-2 border-t border-iron-border/60 text-white">
                <span>Total Amount</span>
                <span className="text-iron-accent font-mono">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button className="w-full py-3.5 rounded-xl bg-iron-accent hover:bg-[#e04f0f] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-iron-accent/20">
              <span>Proceed to Dispatch</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}