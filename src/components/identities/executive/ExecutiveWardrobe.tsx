'use client';

import { Plus } from 'lucide-react';

const products = [
  { id: 1, name: 'Luxury Wool Blazer', price: '$850.00', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 2, name: 'Tailored Trouser', price: '$350.00', image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop', colors: 3 },
  { id: 3, name: 'Premium Oxford Shirt', price: '$185.00', image: 'https://images.unsplash.com/photo-1502389614483-e475fc34407e?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 4, name: 'Merino Knit Polo', price: '$225.00', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=800&auto=format&fit=crop', colors: 3 },
  { id: 5, name: 'Double-Breasted Coat', price: '$1,200.00', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 6, name: 'Leather Briefcase', price: '$950.00', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop', colors: 1 },
  { id: 7, name: 'Luxury Loafers', price: '$650.00', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop', colors: 2 },
  { id: 8, name: 'Cashmere Crewneck', price: '$450.00', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop', colors: 4 },
  { id: 9, name: 'Slim Fit Chino', price: '$195.00', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop', colors: 3 },
  { id: 10, name: 'Minimal Dress Watch', price: '$3,200.00', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop', colors: 1 },
];

export const ExecutiveWardrobe = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4 block">The Boardroom Selection</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter">Executive Wardrobe</h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-sm mt-6 md:mt-0 leading-relaxed">
            Ten masterful pieces. Precision tailoring meets luxury fabrics, designed to project absolute confidence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-4 border border-white/5">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="bg-white text-[#0a0a0a] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Plus className="w-3 h-3 mr-2" /> Add
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold font-heading uppercase tracking-widest max-w-[80%] leading-tight pr-2 text-white/90">{product.name}</h3>
                </div>
                <div className="flex justify-between items-end mt-2">
                  <p className="text-xs text-white/50">{product.colors} Color{product.colors > 1 ? 's' : ''}</p>
                  <span className="text-sm font-medium text-white/80">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
