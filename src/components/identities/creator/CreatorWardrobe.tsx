'use client';

import { Plus } from 'lucide-react';

const products = [
  { id: 1, name: 'Oversized Graphic Tee', price: '$85.00', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 2, name: 'Boxy Heavyweight Tee', price: '$75.00', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop', colors: 4 },
  { id: 3, name: 'Minimalist Bomber', price: '$225.00', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 4, name: 'Relaxed Carpenter Pant', price: '$145.00', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop', colors: 3 },
  { id: 5, name: 'Studio Work Jacket', price: '$195.00', image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 6, name: 'Canvas Tote Bag', price: '$95.00', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 7, name: 'Chunky Sneakers', price: '$285.00', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 8, name: 'Knitted Overshirt', price: '$175.00', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 9, name: 'Vintage Wash Hoodie', price: '$125.00', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop', colors: 3 },
  { id: 10, name: 'Statement Sunglasses', price: '$165.00', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop', colors: 1 },
];

export const CreatorWardrobe = () => {
  return (
    <section className="bg-secondary text-primary py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 mb-4 block">The Studio Selection</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter">Creator Wardrobe</h2>
          </div>
          <p className="text-primary/60 text-sm md:text-base max-w-sm mt-6 md:mt-0 leading-relaxed">
            Ten essential pieces crafted for the creative process. Relaxed fits, tactile fabrics, and an unmistakably artistic silhouette.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="bg-white text-primary px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Plus className="w-3 h-3 mr-2" /> Add
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold font-heading uppercase tracking-widest max-w-[80%] leading-tight pr-2">{product.name}</h3>
                </div>
                <div className="flex justify-between items-end mt-2">
                  <p className="text-xs text-primary/50">{product.colors} Color{product.colors > 1 ? 's' : ''}</p>
                  <span className="text-sm font-medium">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
