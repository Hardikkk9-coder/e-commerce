'use client';

import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const products = [
  { id: 1, name: 'Shadow-Cut Hoodie', price: '$129.00', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop', colors: 3 },
  { id: 2, name: 'Technical Windbreaker', price: '$149.00', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 3, name: 'Utility Cargo Pants', price: '$119.00', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 4, name: 'Oversized Tee', price: '$79.00', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop', colors: 4 },
  { id: 5, name: 'Core Heavyweight Tee', price: '$65.00', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 6, name: 'Minimalist Bomber', price: '$215.00', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop', colors: 2 },
];

export const MenNewArrivals = () => {
  return (
    <section id="shop-men" className="bg-secondary text-primary py-24 border-t border-primary/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-4">New Arrivals</h2>
            <p className="text-primary/60 text-sm">The latest technical silhouettes.</p>
          </div>
          <div className="flex items-center space-x-6 mt-6 md:mt-0">
            <button className="flex items-center text-xs font-bold uppercase tracking-widest hover:text-primary/60 transition-colors">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </button>
            <button className="flex items-center text-xs font-bold uppercase tracking-widest hover:text-primary/60 transition-colors">
              Sort By
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* E-commerce Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold font-heading">{product.name}</h3>
                  <span className="text-sm font-medium">{product.price}</span>
                </div>
                <p className="text-xs text-primary/50">{product.colors} Color{product.colors > 1 ? 's' : ''}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
