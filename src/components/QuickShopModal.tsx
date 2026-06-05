'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

const SIZES = ['S', 'M', 'L', 'XL'];
const COLORS = [
  { name: 'Black', hex: '#0a0a0a' },
  { name: 'Chalk', hex: '#F7F5F2' },
  { name: 'Olive', hex: '#4A5320' },
];

export const QuickShopModal = () => {
  const { quickShopData, closeQuickShop, addItem } = useCartStore();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);

  const handleConfirm = () => {
    if (!quickShopData) return;

    addItem({
      id: quickShopData.product.id,
      name: quickShopData.product.name,
      price: quickShopData.product.price,
      image: quickShopData.product.image,
      quantity: 1,
      size: selectedSize,
      color: selectedColor.name,
    }, quickShopData.rect);

    closeQuickShop();
  };

  return (
    <AnimatePresence>
      {quickShopData && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuickShop}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-primary border border-white/10 flex flex-col md:flex-row overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button 
              onClick={closeQuickShop}
              className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors bg-black/20 md:bg-transparent rounded-full p-2"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Side */}
            <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] bg-white/5 relative">
              <img 
                src={quickShopData.product.image} 
                alt={quickShopData.product.name}
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>

            {/* Right Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4 block">Quick Shop</span>
              <h2 className="text-2xl md:text-3xl font-heading font-light uppercase tracking-widest text-white mb-2">
                {quickShopData.product.name}
              </h2>
              <p className="text-lg font-light text-white/80 mb-12">
                ${quickShopData.product.price.toFixed(2)}
              </p>

              {/* Color Selection */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Color</span>
                  <span className="text-[10px] uppercase tracking-wider text-white">{selectedColor.name}</span>
                </div>
                <div className="flex gap-4">
                  {COLORS.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`relative w-8 h-8 rounded-full border-2 transition-all ${selectedColor.name === color.name ? 'border-white scale-110' : 'border-transparent hover:border-white/50'}`}
                    >
                      <span 
                        className="absolute inset-1 rounded-full border border-white/10"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-12">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Size</span>
                  <button className="text-[10px] uppercase tracking-wider text-white/40 hover:text-white underline underline-offset-4 transition-colors">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-xs font-bold transition-colors ${selectedSize === size ? 'bg-white text-black' : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Confirm Action */}
              <button
                onClick={handleConfirm}
                className="w-full bg-white text-black py-5 text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center group"
              >
                Confirm & Add
                <Check className="w-4 h-4 ml-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
