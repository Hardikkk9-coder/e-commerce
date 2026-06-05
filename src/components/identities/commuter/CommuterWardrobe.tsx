'use client';

import { Plus } from 'lucide-react';
import { AddToCartButton } from '@/components/AddToCartButton';

const products = [
  { id: 1, name: 'Technical Windbreaker', price: '$189.00', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 2, name: 'Performance Overshirt', price: '$145.00', image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 3, name: 'Heavyweight Essential Tee', price: '$65.00', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop', colors: 3 },
  { id: 4, name: 'Relaxed Travel Trouser', price: '$155.00', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 5, name: 'Cargo Utility Pant', price: '$165.00', image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 6, name: 'Waterproof Commuter Backpack', price: '$220.00', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 7, name: 'Minimal Leather Sneaker', price: '$245.00', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 8, name: 'Structured Crossbody Bag', price: '$110.00', image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 9, name: 'Urban Performance Hoodie', price: '$135.00', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 10, name: 'Weatherproof Coach Jacket', price: '$195.00', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop', colors: 2 },
];

export const CommuterWardrobe = () => {
  return (
    <section className="bg-secondary text-primary py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 mb-4 block">The Core Selection</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter">Commuter Wardrobe</h2>
          </div>
          <p className="text-primary/60 text-sm md:text-base max-w-sm mt-6 md:mt-0 leading-relaxed">
            Ten essential pieces designed to seamlessly integrate into your daily transit, providing ultimate protection without aesthetic compromise.
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
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <AddToCartButton 
                      product={{ id: `com-${product.id}`, name: product.name, price: product.price, image: product.image }}
                      className="bg-primary text-white hover:bg-black"
                    />
                  </div>
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
