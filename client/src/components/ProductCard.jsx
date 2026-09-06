import { Plus, Star, Eye } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onInspect }) {
  const primarySpecKey = Object.keys(product.specs)[0];
  const primarySpecVal = product.specs[primarySpecKey];
  const secondarySpecKey = Object.keys(product.specs)[1];
  const secondarySpecVal = product.specs[secondarySpecKey];

  return (
    <div className="product-card group relative bg-iron-surface/70 border border-iron-border hover:border-iron-border-hover rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40">
      
      <div className="flex items-center justify-between text-xs font-mono text-iron-muted mb-3">
        <span className="tracking-wider uppercase">{product.sku}</span>
        <div className="flex items-center gap-1 text-zinc-300">
          <Star size={13} className="fill-iron-accent text-iron-accent" />
          <span>{product.rating}</span>
        </div>
      </div>

      <div 
        onClick={onInspect}
        className="relative w-full h-52 bg-iron-bg/60 rounded-xl overflow-hidden mb-4 flex items-center justify-center p-4 border border-iron-border/40 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-iron-surface/90 border border-white/10 text-xs font-mono text-white">
            <Eye size={14} /> Quick Spec
          </span>
        </div>
        <span className="absolute bottom-3 left-3 text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-black/70 backdrop-blur border border-white/10 text-zinc-300">
          {product.category}
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 
            onClick={onInspect}
            className="font-semibold text-base text-white tracking-tight group-hover:text-iron-accent transition-colors line-clamp-2 cursor-pointer"
          >
            {product.name}
          </h3>

          <div className="flex flex-wrap gap-2 my-4">
            <div className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-iron-border font-mono text-[11px] text-iron-muted">
              <span className="text-zinc-400 capitalize">{primarySpecKey}:</span> {primarySpecVal}
            </div>
            {secondarySpecVal && (
              <div className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-iron-border font-mono text-[11px] text-iron-muted">
                <span className="text-zinc-400 capitalize">{secondarySpecKey}:</span> {secondarySpecVal}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-iron-border/60 mt-auto">
          <div>
            <span className="text-[10px] uppercase font-mono text-iron-muted block">Direct Price</span>
            <span className="text-lg font-bold font-mono text-white">₹{product.price.toLocaleString('en-IN')}</span>
          </div>
          
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-iron-accent border border-iron-border hover:border-iron-accent text-white text-xs font-semibold tracking-wider transition-all duration-200"
          >
            <Plus size={14} />
            <span>ADD</span>
          </button>
        </div>
      </div>

    </div>
  );
}