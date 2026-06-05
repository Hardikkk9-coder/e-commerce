'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ExecutiveHero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !bgRef.current || !textRef.current) return;

    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(textRef.current, {
      yPercent: -40,
      opacity: 0,
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
    <section ref={containerRef} className="relative h-[120vh] w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
      
      {/* Cinematic Penthouse Background */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <div ref={bgRef} className="absolute inset-[-10%] w-[120%] h-[120%]">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop" 
            alt="Corporate Skyline" 
            className="w-full h-full object-cover grayscale-[0.8] opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div ref={textRef} className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-32">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-8 block">Curated Wardrobe</span>
        <h1 className="text-6xl md:text-[8vw] font-heading font-black text-white uppercase tracking-tighter leading-none mb-8 mix-blend-overlay opacity-90">
          The Executive
        </h1>
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-medium tracking-wide">
          Confidence in every detail.
        </p>
      </div>
    </section>
  );
};
