'use client';

import { ArrowRight, Plus } from 'lucide-react';

const looks = [
  {
    id: '01',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop', // Substitute with men's image
    products: ['Technical Windbreaker', 'Oversized Tee', 'Cargo Pants']
  },
  {
    id: '02',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop',
    products: ['Minimalist Bomber', 'Heavyweight Tee', 'Relaxed Trouser']
  }
];

export const FeaturedLooks = () => {
  return (
    <section className="bg-primary text-white py-32 md:py-48 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4 block">Style Guide</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter">Featured Looks</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {looks.map((look) => (
            <div key={look.id} className="flex flex-col md:flex-row gap-8 bg-neutral-900/50 p-6 md:p-8">
              {/* Image */}
              <div className="w-full md:w-1/2 aspect-[3/4] relative overflow-hidden group">
                <img 
                  src={look.image} 
                  alt={`Look ${look.id}`} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Info */}
              <div className="w-full md:w-1/2 flex flex-col justify-between py-4">
                <div>
                  <h3 className="text-2xl font-heading font-bold uppercase mb-8">Look {look.id}</h3>
                  <div className="space-y-4 mb-8">
                    {look.products.map((p, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4 group cursor-pointer">
                        <span className="text-sm text-white/70 group-hover:text-white transition-colors">{p}</span>
                        <Plus className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-white text-primary py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-300 transition-colors flex items-center justify-center">
                  Shop The Look
                  <ArrowRight className="w-4 h-4 ml-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
