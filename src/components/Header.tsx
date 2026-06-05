'use client';

import { useState, useEffect } from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomLink } from './CustomLink';
import { useSearchStore } from '@/store/useSearchStore';
import { useCartStore } from '@/store/useCartStore';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const openSearch = useSearchStore(state => state.openSearch);
  const { openCart, items } = useCartStore();
  
  // Calculate total items
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  // Prevent hydration mismatch for persisted store by only rendering count after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <CustomLink href="/" className="text-xl md:text-2xl font-heading font-bold tracking-[0.2em] text-white uppercase w-1/4">
          Nexora
        </CustomLink>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-10 w-2/4">
          {['Men', 'Women', 'Collections', 'New Arrivals', 'Journal'].map((item) => (
            <CustomLink
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-[10px] font-bold tracking-[0.15em] text-secondary/70 hover:text-white uppercase transition-colors"
            >
              {item}
            </CustomLink>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center justify-end space-x-8 w-1/4">
          <button 
            onClick={openSearch}
            className="flex items-center space-x-2 text-secondary/70 hover:text-white transition-colors group"
          >
            <Search className="w-4 h-4" />
            <span className="hidden xl:block text-[10px] font-bold tracking-widest uppercase">Search</span>
          </button>
          <button className="flex items-center space-x-2 text-secondary/70 hover:text-white transition-colors group">
            <User className="w-4 h-4" />
            <span className="hidden xl:block text-[10px] font-bold tracking-widest uppercase">Account</span>
          </button>
          <button 
            onClick={openCart}
            className="flex items-center space-x-2 text-secondary/70 hover:text-white transition-colors group relative"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden xl:flex items-center text-[10px] font-bold tracking-widest uppercase">
              Cart
              {mounted && (
                <span className="ml-1 inline-block min-w-[14px]">
                  (<AnimatePresence mode="popLayout">
                    <motion.span
                      key={totalItems}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="inline-block"
                    >
                      {totalItems}
                    </motion.span>
                  </AnimatePresence>)
                </span>
              )}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
