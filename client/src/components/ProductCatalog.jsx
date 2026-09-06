import { useState, useMemo, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';

const CATEGORIES = ["All", "Power Tools", "Precision", "Machining"];

export default function ProductCatalog({ onAddToCart, onInspectProduct }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const gridRef = useRef(null);

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.sku.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === "price-low") list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") list.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.querySelectorAll('.product-card'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out' }
    );
  }, [activeCategory, sortBy]);

  return (
    <section id="catalog" className="px-6 py-20 max-w-6xl mx-auto border-t border-iron-border">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-iron-accent">
            SERIES 01 // CATALOG
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
            Industrial Equipment
          </h2>
        </div>

        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-iron-muted" />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or SKU..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-iron-surface border border-iron-border text-xs font-mono text-white placeholder:text-iron-muted focus:outline-none focus:border-iron-accent transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-iron-surface border border-iron-border">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-iron-accent text-white shadow-md shadow-iron-accent/20"
                  : "text-iron-muted hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <SlidersHorizontal size={14} className="text-iron-muted" />
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-iron-surface border border-iron-border rounded-xl px-3 py-1.5 text-xs font-mono text-iron-muted hover:text-white focus:outline-none focus:border-iron-accent transition-colors"
          >
            <option value="default">Sort: Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-iron-border rounded-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-iron-muted">No equipment found matching criteria</p>
        </div>
      ) : (
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onInspect={() => onInspectProduct(product)}
            />
          ))}
        </div>
      )}
    </section>
  );
}