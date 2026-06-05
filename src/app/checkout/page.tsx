'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Lock, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';

export default function CheckoutPage() {
  const router = useRouter();
  const { items } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 200 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate network latency and mock payment processing
    setTimeout(() => {
      router.push('/order-success');
    }, 2500);
  };

  if (items.length === 0 && !isProcessing) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-heading font-light uppercase tracking-widest text-white mb-6">Your cart is empty</h1>
        <button onClick={() => router.push('/')} className="text-[10px] uppercase tracking-widest text-white/50 hover:text-white underline underline-offset-4">
          Return to Store
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background styling for luxury aesthetic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 hidden lg:block -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <button onClick={() => router.back()} className="flex items-center text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-4" />
            Back to Cart
          </button>
          <div className="flex items-center text-white/40">
            <Lock className="w-4 h-4 mr-3" />
            <span className="text-[10px] uppercase tracking-widest">Secure Checkout</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Left Column - Forms */}
          <div className="w-full lg:w-[55%]">
            <form onSubmit={handlePlaceOrder} className="flex flex-col gap-12">
              
              {/* Contact Info */}
              <section>
                <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2">First Name</label>
                    <input required type="text" className="bg-transparent border border-white/20 p-4 text-sm text-white outline-none focus:border-white transition-colors" placeholder="John" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Last Name</label>
                    <input required type="text" className="bg-transparent border border-white/20 p-4 text-sm text-white outline-none focus:border-white transition-colors" placeholder="Doe" />
                  </div>
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Email</label>
                    <input required type="email" className="bg-transparent border border-white/20 p-4 text-sm text-white outline-none focus:border-white transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
              </section>

              {/* Shipping Address */}
              <section>
                <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Address</label>
                    <input required type="text" className="bg-transparent border border-white/20 p-4 text-sm text-white outline-none focus:border-white transition-colors" placeholder="123 Luxury Ave, Suite 100" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2">City</label>
                    <input required type="text" className="bg-transparent border border-white/20 p-4 text-sm text-white outline-none focus:border-white transition-colors" placeholder="New York" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2">State / Province</label>
                    <input required type="text" className="bg-transparent border border-white/20 p-4 text-sm text-white outline-none focus:border-white transition-colors" placeholder="NY" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Postal Code</label>
                    <input required type="text" className="bg-transparent border border-white/20 p-4 text-sm text-white outline-none focus:border-white transition-colors" placeholder="10001" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Country</label>
                    <select required className="bg-primary border border-white/20 p-4 text-sm text-white outline-none focus:border-white transition-colors appearance-none cursor-pointer">
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Japan</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section>
                <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-4">Payment Method</h2>
                
                <div className="flex border border-white/20 mb-8 p-1 bg-white/5">
                  <button type="button" onClick={() => setPaymentMethod('credit')} className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${paymentMethod === 'credit' ? 'bg-white text-black' : 'text-white/60 hover:text-white'}`}>Credit Card</button>
                  <button type="button" onClick={() => setPaymentMethod('paypal')} className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${paymentMethod === 'paypal' ? 'bg-white text-black' : 'text-white/60 hover:text-white'}`}>PayPal</button>
                  <button type="button" onClick={() => setPaymentMethod('apple')} className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${paymentMethod === 'apple' ? 'bg-white text-black' : 'text-white/60 hover:text-white'}`}>Apple Pay</button>
                </div>

                <AnimatePresence mode="wait">
                  {paymentMethod === 'credit' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col md:col-span-2 relative">
                        <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Card Number</label>
                        <input required type="text" maxLength={19} className="bg-transparent border border-white/20 p-4 text-sm text-white outline-none focus:border-white transition-colors font-mono tracking-widest" placeholder="4111 1111 1111 1111" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Expiry Date</label>
                        <input required type="text" maxLength={5} className="bg-transparent border border-white/20 p-4 text-sm text-white outline-none focus:border-white transition-colors font-mono tracking-widest" placeholder="MM/YY" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2">CVV</label>
                        <input required type="text" maxLength={4} className="bg-transparent border border-white/20 p-4 text-sm text-white outline-none focus:border-white transition-colors font-mono tracking-widest" placeholder="123" />
                      </div>
                    </motion.div>
                  )}
                  {paymentMethod === 'paypal' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-8 border border-white/20 flex flex-col items-center justify-center bg-white/5">
                      <p className="text-sm font-light text-white/80 mb-4">You will be redirected to PayPal to complete your purchase securely.</p>
                    </motion.div>
                  )}
                  {paymentMethod === 'apple' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-8 border border-white/20 flex flex-col items-center justify-center bg-white/5">
                      <p className="text-sm font-light text-white/80 mb-4">You will use Apple Pay to complete your purchase securely.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-white text-black py-6 text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors mt-8 relative"
              >
                {isProcessing ? 'Processing Payment...' : `Pay $${total.toFixed(2)}`}
              </button>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full lg:w-[45%] lg:pl-12">
            <div className="sticky top-32">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-4">Order Summary</h2>
              
              <div className="flex flex-col gap-6 mb-8 max-h-[40vh] overflow-y-auto custom-scrollbar pr-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <div className="w-16 h-20 bg-white/5 relative overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale opacity-80" />
                      <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-white leading-tight">{item.name}</h3>
                        <span className="text-xs font-light text-white/80 ml-4">${(item.price * item.quantity).toFixed(2)}</span>
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

              <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
                <div className="flex justify-between text-sm font-light text-white/60">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-light text-white/60">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm font-light text-white/60">
                  <span>Taxes (Estimated)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-light text-white border-t border-white/10 pt-4 mt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Processing Overlay */}
      <AnimatePresence>
        {isProcessing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[500] bg-primary/90 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-16 h-16 border border-white/20 border-t-white rounded-full mb-8"
            />
            <h2 className="text-sm font-bold uppercase tracking-widest text-white">Processing Secure Payment</h2>
            <p className="text-xs font-light text-white/50 mt-4">Please do not close this window</p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
