'use client';

import { ArrowRight, Plus } from 'lucide-react';

const looks = [
  {
    id: '01',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    title: 'The Transit Look',
    description: 'Weather-resistant outer layers combined with unrestricted cargo bottoms for daily commutes.',
    products: ['Technical Windbreaker', 'Heavyweight Tee', 'Cargo Pant'],
    price: '$333.00'
  },
  {
    id: '02',
    image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop',
    title: 'The Office Arrival',
    description: 'A relaxed but sharply tailored combination designed for walking the city blocks before heading indoors.',
    products: ['Performance Overshirt', 'Relaxed Trouser', 'Minimal Sneaker'],
    price: '$395.00'
  }
];

export const CommuterLooks = () => {
  return (
    <section className="bg-primary text-white py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4 block">Styling</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter">Outfit Combinations</h2>
        </div>

        <div className="flex flex-col gap-16 md:gap-32">
          {looks.map((look, index) => (
            <div key={look.id} className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image */}
              <div className="w-full md:w-1/2 aspect-[3/4] relative overflow-hidden group">
                <img 
                  src={look.image} 
                  alt={`Look ${look.id}`} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Info */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4 block">Look {look.id}</span>
                <h3 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-6">{look.title}</h3>
                <p className="text-white/60 mb-12 text-sm md:text-base leading-relaxed max-w-md">{look.description}</p>
                
                <div className="space-y-4 mb-12 max-w-md w-full">
                  {look.products.map((p, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4 group cursor-pointer">
                      <span className="text-sm font-bold uppercase text-white/70 group-hover:text-white transition-colors tracking-wide">{p}</span>
                      <Plus className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                    </div>
                  ))}
                </div>
                
                <button className="max-w-md w-full bg-white text-primary py-5 text-xs font-bold uppercase tracking-[0.1em] hover:bg-neutral-300 transition-colors flex items-center justify-between px-8">
                  <span>Shop Entire Look</span>
                  <span>{look.price}</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
