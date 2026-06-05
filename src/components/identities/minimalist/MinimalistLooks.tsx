'use client';

import { Plus } from 'lucide-react';

const looks = [
  {
    id: '01',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    title: 'The Gallery',
    description: 'An exercise in pristine simplicity. The heavyweight white tee drapes effortlessly over a relaxed trouser.',
    products: ['Premium White Tee', 'Relaxed Trouser', 'Leather Slip-On'],
    price: '$455.00'
  },
  {
    id: '02',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    title: 'The Architecture',
    description: 'Structure without rigidity. A premium crewneck paired with a straight fit pant creates a singular, unbroken silhouette.',
    products: ['Premium Crewneck', 'Straight Fit Trouser'],
    price: '$320.00'
  },
  {
    id: '03',
    image: 'https://images.unsplash.com/photo-1502389614483-e475fc34407e?q=80&w=800&auto=format&fit=crop',
    title: 'The Studio',
    description: 'Layering reduced to its essence. The wool overshirt acts as a textural barrier over an essential heavy tee.',
    products: ['Wool Overshirt', 'Heavyweight Black Tee', 'Minimal Tote Bag'],
    price: '$385.00'
  }
];

export const MinimalistLooks = () => {
  return (
    <section className="bg-[#fdfdfd] text-neutral-900 py-32 md:py-48">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-32 text-center">
          <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-neutral-400 mb-6 block">Curation</span>
          <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase">Essential Uniforms</h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {looks.map((look, index) => (
            <div key={look.id} className={`flex flex-col md:flex-row gap-12 lg:gap-32 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Container with Ultra-Minimal Framing */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className={`relative w-[85%] md:w-[75%] aspect-[3/4] group ${index === 1 ? 'aspect-square' : ''}`}>
                  <img 
                    src={look.image} 
                    alt={`Look ${look.id}`} 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-[0.5] transition-all duration-1000 ease-out z-10"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white border border-neutral-100 px-6 py-4 z-20 font-light uppercase tracking-widest text-[10px] text-neutral-500">
                    Uniform {look.id}
                  </div>
                </div>
              </div>
              
              {/* Info */}
              <div className="w-full md:w-1/2 flex flex-col justify-center max-w-lg mx-auto md:mx-0">
                <h3 className="text-3xl md:text-4xl font-light tracking-widest uppercase mb-6 text-neutral-800">{look.title}</h3>
                <p className="text-neutral-500 mb-16 text-sm md:text-base leading-loose font-light">{look.description}</p>
                
                <div className="space-y-6 mb-16 w-full">
                  {look.products.map((p, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-neutral-200 pb-4 group cursor-pointer">
                      <span className="text-sm font-light uppercase text-neutral-500 group-hover:text-neutral-900 transition-colors tracking-widest">{p}</span>
                      <Plus className="w-3 h-3 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                    </div>
                  ))}
                </div>
                
                <button className="w-full border border-neutral-200 text-neutral-600 py-6 text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-300 transition-all duration-500 flex items-center justify-between px-8">
                  <span>Acquire Uniform</span>
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
