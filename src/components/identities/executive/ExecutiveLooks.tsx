'use client';

import { ArrowRight, Plus } from 'lucide-react';

const looks = [
  {
    id: '01',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800&auto=format&fit=crop',
    title: 'The Boardroom',
    description: 'Impeccable wool tailored to command the room. Structured lines paired with a crisp oxford for absolute authority.',
    products: ['Luxury Wool Blazer', 'Premium Oxford Shirt', 'Tailored Trouser'],
    price: '$1,250.00'
  },
  {
    id: '02',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop',
    title: 'The Private Club',
    description: 'Relaxed luxury. Soft cashmere knitwear over slim chinos designed for the transition from office to evening.',
    products: ['Cashmere Crewneck', 'Slim Fit Chino', 'Luxury Loafers'],
    price: '$895.00'
  },
  {
    id: '03',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    title: 'The Winter Commute',
    description: 'A heavy double-breasted silhouette providing formidable presence and protection against the city elements.',
    products: ['Double-Breasted Coat', 'Merino Knit Polo', 'Tailored Pant'],
    price: '$1,420.00'
  }
];

export const ExecutiveLooks = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4 block">Styling</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter">Editorial Looks</h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {looks.map((look, index) => (
            <div key={look.id} className={`flex flex-col md:flex-row gap-8 lg:gap-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Container with Editorial Framing */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className={`relative w-[90%] md:w-[80%] aspect-[3/4] group ${index === 1 ? 'aspect-square' : ''}`}>
                  <div className="absolute inset-0 bg-white/5 transform -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0 border border-white/10" />
                  <img 
                    src={look.image} 
                    alt={`Look ${look.id}`} 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out z-10 shadow-2xl"
                  />
                  <div className="absolute bottom-0 left-0 bg-white text-[#0a0a0a] px-4 py-2 z-20 font-bold uppercase tracking-widest text-[10px] transform -translate-y-4 translate-x-4">
                    Look {look.id}
                  </div>
                </div>
              </div>
              
              {/* Info */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
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
                
                <button className="max-w-md w-full bg-white text-[#0a0a0a] py-5 text-xs font-bold uppercase tracking-[0.1em] hover:bg-neutral-300 transition-colors flex items-center justify-between px-8">
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
