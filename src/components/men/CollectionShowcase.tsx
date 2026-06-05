'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { name: 'Oversized Technical Parka', price: '$450', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop' },
  { name: 'Utility Cargo Trouser', price: '$220', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop' },
  { name: 'Core Heavyweight Tee', price: '$85', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop' },
];

export const CollectionShowcase = () => {
  const containerRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !productsRef.current) return;

    const cards = productsRef.current.children;

    gsap.fromTo(cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 40%',
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-48 bg-primary text-white overflow-hidden">
      
      {/* Background Story Image (acting as video placeholder) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1600&auto=format&fit=crop" 
          alt="Cinematic background" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-8">The Collection</span>
        <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter max-w-2xl leading-none mb-24">
          A Narrative of Urban Adaptation
        </h2>

        {/* Gradual Product Reveal */}
        <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
          {products.map((p, idx) => (
            <div key={idx} className="group cursor-pointer relative bg-neutral-900 aspect-[3/4] overflow-hidden">
              <img 
                src={p.img} 
                alt={p.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-left">
                  <h3 className="text-sm font-bold font-heading uppercase tracking-widest">{p.name}</h3>
                  <p className="text-xs text-white/70">{p.price}</p>
                </div>
                <button className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
