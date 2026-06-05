'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const EditorialStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    imageRefs.current.forEach((img) => {
      if (!img) return;
      gsap.fromTo(img,
        { scale: 1.15, y: 50 },
        {
          scale: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            end: 'bottom 20%',
            scrub: 1,
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="bg-primary text-secondary py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Text Column */}
        <div className="lg:col-span-5 lg:pr-12 z-10 relative">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40 mb-8 block">Our Story</span>
          <h2 className="text-5xl md:text-[6vw] font-heading font-black uppercase leading-[0.85] tracking-tighter mb-10">
            Built On<br />
            Purpose<br />
            Defined By<br />
            Detail
          </h2>
          <p className="text-secondary/60 text-base leading-relaxed mb-12 max-w-md">
            Nexora is more than clothing. It's a mindset. We blend innovation with craftsmanship to create pieces that elevate everyday life. Every stitch, every cut, every fabric choice is an intentional decision designed for the modern individual.
          </p>
          <a href="#journey" className="group flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-secondary/70 transition-colors w-fit border-b border-white/20 pb-3 hover:border-white">
            Discover Our Journey
            <span className="ml-6 transform group-hover:translate-x-3 transition-transform">→</span>
          </a>
        </div>

        {/* Images Column */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-8 h-full relative mt-16 lg:mt-0">
          <div className="flex flex-col gap-4 md:gap-8 mt-12 md:mt-24">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img 
                ref={el => { imageRefs.current[0] = el; }}
                src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?q=80&w=800&auto=format&fit=crop" 
                alt="Detail" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.8]"
              />
            </div>
            <div className="relative overflow-hidden aspect-square">
              <img 
                ref={el => { imageRefs.current[1] = el; }}
                src="https://images.unsplash.com/photo-1549491689-d91838be29d1?q=80&w=800&auto=format&fit=crop" 
                alt="Detail" 
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="relative overflow-hidden aspect-square">
              <img 
                ref={el => { imageRefs.current[2] = el; }}
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop" 
                alt="Detail" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.8]"
              />
            </div>
            <div className="relative overflow-hidden aspect-[3/4]">
              <img 
                ref={el => { imageRefs.current[3] = el; }}
                src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=800&auto=format&fit=crop" 
                alt="Detail" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.8]"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
