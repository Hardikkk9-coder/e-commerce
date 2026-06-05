'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/store/useCartStore';
import { Check } from 'lucide-react';

export const GlobalCartManager = () => {
  const { lastAddedItem, clearLastAdded, flyAnimation, clearFlyAnimation, isOpen } = useCartStore();

  // Handle Toast Timeout
  useEffect(() => {
    if (lastAddedItem && !isOpen) {
      const timer = setTimeout(() => {
        clearLastAdded();
      }, 3500);
      return () => clearTimeout(timer);
    }
    if (isOpen) {
      clearLastAdded(); // Don't show toast if cart is open
    }
  }, [lastAddedItem, isOpen, clearLastAdded]);

  // Handle Fly Animation Timing
  useEffect(() => {
    if (flyAnimation) {
      const timer = setTimeout(() => {
        clearFlyAnimation();
      }, 1000); // 1s animation duration
      return () => clearTimeout(timer);
    }
  }, [flyAnimation, clearFlyAnimation]);

  return (
    <>
      {/* Global Toast Notification */}
      <AnimatePresence>
        {lastAddedItem && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '50%' }}
            animate={{ opacity: 1, y: 0, x: '50%' }}
            exit={{ opacity: 0, y: -20, x: '50%' }}
            className="fixed top-24 right-1/2 z-[400] bg-primary/95 border border-white/20 px-6 py-4 flex items-center shadow-2xl backdrop-blur-md"
          >
            <div className="w-10 h-14 bg-white/5 mr-4 overflow-hidden">
              <img src={lastAddedItem.image} alt={lastAddedItem.name} className="w-full h-full object-cover grayscale" />
            </div>
            <div>
              <div className="flex items-center text-[#C1A063] mb-1">
                <Check className="w-4 h-4 mr-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Added to Cart</span>
              </div>
              <p className="text-white text-xs font-light tracking-wide">{lastAddedItem.name}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fly Animation Portal */}
      <AnimatePresence>
        {flyAnimation && (
          <motion.img
            key={flyAnimation.id}
            src={flyAnimation.image}
            initial={{ 
              position: 'fixed',
              top: flyAnimation.startY,
              left: flyAnimation.startX,
              width: flyAnimation.startWidth,
              height: flyAnimation.startHeight,
              zIndex: 9999,
              opacity: 0.8,
              borderRadius: '0%',
              objectFit: 'cover'
            }}
            animate={{
              top: 40, // approximate position of header cart icon
              left: typeof window !== 'undefined' ? window.innerWidth - 80 : 1000,
              width: 20,
              height: 20,
              opacity: 0,
              borderRadius: '50%',
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1], // Custom easing for "fly" effect
            }}
            className="pointer-events-none grayscale"
          />
        )}
      </AnimatePresence>
    </>
  );
};
