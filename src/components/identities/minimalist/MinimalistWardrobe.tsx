'use client';

import { Plus } from 'lucide-react';

const products = [
  { id: 1, name: 'Premium White Tee', price: '$85.00', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 2, name: 'Heavyweight Black Tee', price: '$85.00', image: 'https://images.unsplash.com/photo-1502389614483-e475fc34407e?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 3, name: 'Minimal Hoodie', price: '$145.00', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 4, name: 'Relaxed Sweatpant', price: '$125.00', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 5, name: 'Wool Overshirt', price: '$225.00', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 6, name: 'Straight Fit Trouser', price: '$185.00', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 7, name: 'Premium Crewneck', price: '$135.00', image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop', colors: 3 },
  { id: 8, name: 'Leather Slip-On', price: '$285.00', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 9, name: 'Minimal Tote Bag', price: '$95.00', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 10, name: 'Cashmere Knit', price: '$350.00', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800&auto=format&fit=crop', colors: 2 },
];

export const MinimalistWardrobe = () => {
  return (
    <section className="bg-white text-neutral-900 py-32 md:py-48 border-t border-neutral-100">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <div>
            <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-neutral-400 mb-6 block">The Essentials</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-neutral-800">Foundation</h2>
          </div>
          <p className="text-neutral-500 text-sm md:text-base max-w-sm mt-8 md:mt-0 leading-loose font-light tracking-wide">
            Ten indispensable elements. A modular system of uncompromising quality, designed to integrate seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-20">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-neutral-50 overflow-hidden mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out opacity-90"
                />
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                  <span className="bg-white text-neutral-900 px-8 py-4 text-[9px] font-medium uppercase tracking-[0.3em] shadow-2xl flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Plus className="w-3 h-3 mr-3" /> Select
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xs font-medium uppercase tracking-widest max-w-[80%] leading-tight text-neutral-800">{product.name}</h3>
                </div>
                <div className="flex justify-between items-end mt-2">
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest">{product.colors} Shade{product.colors > 1 ? 's' : ''}</p>
                  <span className="text-xs font-light text-neutral-600 tracking-wide">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
