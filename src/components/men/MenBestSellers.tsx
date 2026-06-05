'use client';

import { Star, Plus } from 'lucide-react';

const bestSellers = [
  {
    id: 1,
    name: 'Core Heavyweight Tee',
    price: '$65.00',
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Minimalist Bomber',
    price: '$215.00',
    rating: 5.0,
    reviews: 84,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Signature Relaxed Trouser',
    price: '$135.00',
    rating: 4.8,
    reviews: 204,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Everyday Zip Hoodie',
    price: '$110.00',
    rating: 4.9,
    reviews: 93,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
  }
];

export const MenBestSellers = () => {
  return (
    <section className="bg-secondary text-primary py-24 md:py-32 border-t border-primary/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 mb-4 block">Most Wanted</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter">Best Sellers</h2>
          </div>
          <a href="#all-best-sellers" className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center hover:text-primary/60 transition-colors border-b border-primary/20 pb-1 hover:border-primary mt-6 md:mt-0">
            View All Best Sellers <span className="ml-3">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[0.3] group-hover:grayscale-0"
                />
                <button className="absolute inset-0 w-full h-full bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-primary px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl flex items-center">
                    <Plus className="w-3 h-3 mr-2" /> Quick Add
                  </span>
                </button>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1 mb-2 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-primary/20'}`} />
                  ))}
                  <span className="text-primary/40 text-[10px] font-bold ml-2">({product.reviews})</span>
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-bold font-heading tracking-wide pr-4">{product.name}</h3>
                  <p className="text-xs font-medium shrink-0">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
