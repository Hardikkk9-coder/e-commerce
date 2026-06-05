'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Craftsmanship = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    gsap.fromTo(imageRef.current, 
      { scale: 1.2 }, 
      { 
        scale: 1, 
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="bg-primary text-white py-0 flex flex-col md:flex-row overflow-hidden border-t border-white/5">
      
      {/* Left: Macro Imagery */}
      <div className="w-full md:w-1/2 h-[70vh] md:h-[100vh] relative overflow-hidden">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop" 
          alt="Macro fabric detail" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
        />
      </div>

      {/* Right: Narrative */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-12 md:p-24 lg:p-32 bg-primary">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-8 block">Craftsmanship</span>
        <h2 className="text-5xl md:text-6xl font-heading font-black uppercase tracking-tighter leading-none mb-12">
          Obsessive<br />Details.
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-bold font-heading uppercase mb-3">01. Articulated Seams</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Every joint is engineered with articulated paneling to mimic the human form's natural geometry. This isn't just aesthetic; it's structural integrity.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold font-heading uppercase mb-3">02. Micro-Ripstop Nylon</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Weighing less than 50 grams per square meter, our proprietary Japanese-milled ripstop provides impenetrable wind resistance while maintaining complete breathability.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
