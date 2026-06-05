'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !imageRef.current) return;

    // Subtle parallax on the image
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-primary overflow-hidden border-b border-white/10">
      
      {/* Right Image Area (Absolute to allow left content to use max-w container) */}
      <div className="absolute top-0 right-0 w-full md:w-[55%] h-[60vh] md:h-full z-10 overflow-hidden">
        <div ref={imageRef} className="absolute inset-[-10%] w-[120%] h-[120%]">
          <img 
            src="https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?q=80&w=1200&auto=format&fit=crop" 
            alt="Fashion Campaign" 
            className="w-full h-full object-cover object-center grayscale-[0.5]"
          />
        </div>
        {/* Subtle vignette/gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/80 md:to-primary" />
      </div>

      {/* Left Content Area (Constrained to match Header width) */}
      <div className="relative z-20 w-full h-full max-w-[1600px] mx-auto flex px-6 md:px-12">
        <div className="w-full md:w-[45%] h-full flex flex-col justify-center pt-24 md:pt-0 pr-8">
          <div ref={textRef}>
            <span className="text-secondary/50 uppercase tracking-[0.2em] text-xs font-bold mb-8 block">
              Collection 01
            </span>
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-heading font-black text-white uppercase tracking-tighter mb-10">
              Engineered<br />
              For The<br />
              Modern<br />
              <span className="text-secondary/70 italic font-medium">World</span>
            </h1>
            <p className="text-base md:text-lg text-secondary/60 max-w-sm mb-12 leading-relaxed">
              Technical garments designed with architectural precision. Form meets function in the urban environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#shop" className="bg-white text-primary px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center">
                Shop Collection
              </a>
              <a href="#explore" className="group border border-white/20 text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-colors flex items-center justify-center">
                Explore Campaign
                <span className="ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
