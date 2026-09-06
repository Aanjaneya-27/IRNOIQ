import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import ProductCatalog from './components/ProductCatalog';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <SmoothScroll>
      <Navbar cartCount={totalItemCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        {/* 1. Hero Landing */}
        <Hero />

        {/* 2. Infinite Technical Ticker */}
        <Marquee />

        {/* 3. Flagship Interactive Hotspot Showcase */}
        <ProductShowcase onAddToCart={handleAddToCart} />

        {/* 4. Engineering Standards & Tech Highlights */}
        <Features />

        {/* 5. Filterable Product Grid + Search */}
        <ProductCatalog 
          onAddToCart={handleAddToCart} 
          onInspectProduct={(prod) => setSelectedProduct(prod)}
        />

        {/* 6. Brand Story & Metrics */}
        <AboutSection />
      </main>

      <Footer />
      
      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Quick View Spec Sheet Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </SmoothScroll>
  );
}