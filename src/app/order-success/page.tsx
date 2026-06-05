'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCartStore, CartItem } from '@/store/useCartStore';
import { CustomLink } from '@/components/CustomLink';

export default function OrderSuccessPage() {
  const router = useRouter();
  const { items, clearCart } = useCartStore();
  const [purchasedItems, setPurchasedItems] = useState<CartItem[]>([]);
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // Generate a mock order number
    setOrderNumber(`NEX-${Math.floor(100000 + Math.random() * 900000)}`);
    
    // Save items to state so we can display them even after clearing the store
    setPurchasedItems(items);
    
    // Clear the cart since order was placed
    if (items.length > 0) {
      clearCart();
    }
  }, []);

  const total = purchasedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = total > 200 ? 0 : 25;
  const tax = total * 0.08;
  const finalTotal = total + shipping + tax;

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-[800px] w-full mx-auto px-6 md:px-12">
        
        {/* Success Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8 relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute inset-0 bg-[#C1A063] rounded-full opacity-20"
            />
            <Check className="w-8 h-8 text-[#C1A063]" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-light uppercase tracking-widest text-white mb-6">
            Order Confirmed
          </h1>
          <p className="text-base font-light text-white/60 mb-2">
            Thank you for shopping with NEXORA.
          </p>
          <p className="text-sm font-light text-white/40">
            A confirmation email has been sent to your provided address.
          </p>
        </motion.div>

        {/* Order Details Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="border border-white/10 bg-white/5 p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-2 gap-8 mb-12 border-b border-white/10 pb-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">Order Number</p>
              <p className="text-lg font-light text-white">{orderNumber}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">Estimated Delivery</p>
              <p className="text-lg font-light text-white">3-5 Business Days</p>
            </div>
          </div>

          <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Order Summary</h3>
          
          <div className="flex flex-col gap-6 mb-8">
            {purchasedItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4">
                <div className="w-16 h-20 bg-white/10 relative flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale opacity-80" />
                  <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center">
                    {item.quantity}
                  </div>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">{item.name}</p>
                    <span className="text-xs font-light text-white/80">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  {(item.size || item.color) && (
                    <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">
                      {item.color && `${item.color} `}
                      {item.size && `/ Size ${item.size}`}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6">
            <div className="flex justify-between text-lg font-light text-white">
              <span>Total Paid</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </motion.div>

        {/* Continue Shopping CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <CustomLink 
            href="/"
            className="group flex items-center text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            Continue Shopping
            <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-1 transition-transform" />
          </CustomLink>
        </motion.div>

      </div>
    </div>
  );
}
