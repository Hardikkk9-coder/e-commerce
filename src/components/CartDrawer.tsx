'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useRouter } from 'next/navigation';

export const CartDrawer = () => {
  const { isOpen, closeCart, items, removeItem, updateQuantity } = useCartStore();
  const router = useRouter();

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Disable Lenis if active
      if ((window as any).lenis) {
        (window as any).lenis.stop();
      }
    } else {
      document.body.style.overflow = '';
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    }
    
    return () => {
      document.body.style.overflow = '';
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, [isOpen]);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  const handleCheckout = () => {
    closeCart();
    router.push('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-primary z-[210] flex flex-col border-l border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/10">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white flex items-center">
                <ShoppingBag className="w-5 h-5 mr-3" />
                Your Cart ({items.reduce((a, b) => a + b.quantity, 0)})
              </h2>
              <button 
                onClick={closeCart}
                className="text-white/50 hover:text-white transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <ShoppingBag className="w-12 h-12 mb-6" />
                  <p className="text-sm uppercase tracking-widest mb-2 font-bold">Your cart is empty</p>
                  <p className="text-xs font-light">Add items to begin your journey.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-6 group">
                      <div className="w-24 h-32 bg-white/5 relative overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                      
                      <div className="flex flex-col justify-between flex-1 py-1">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-white pr-4 leading-tight">{item.name}</h3>
                            <span className="text-xs font-light text-white/80">${item.price}</span>
                          </div>
                          
                          {(item.size || item.color) && (
                            <p className="text-[10px] text-white/50 uppercase tracking-widest mt-2">
                              {item.color && `Color: ${item.color} `}
                              {item.size && `Size: ${item.size}`}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-white/20">
                            <button 
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              className="px-3 py-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-4 py-2 text-xs font-bold w-10 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="px-3 py-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeItem(item.id, item.size)}
                            className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white underline decoration-white/20 underline-offset-4 transition-all"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Summary */}
            {items.length > 0 && (
              <div className="border-t border-white/10 bg-primary/95 backdrop-blur p-8">
                <div className="flex justify-between mb-4 text-sm font-light text-white/70">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-8 text-sm font-light text-white/70">
                  <span>Shipping & Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-white text-black py-5 flex items-center justify-center group hover:bg-neutral-200 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest mr-4">Proceed To Checkout</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={closeCart}
                  className="w-full text-center mt-6 text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
