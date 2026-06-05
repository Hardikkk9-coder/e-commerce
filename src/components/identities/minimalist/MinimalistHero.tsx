'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MinimalistHero = () => {
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
    <section ref={containerRef} className="relative h-[120vh] w-full bg-[#fdfdfd] overflow-hidden flex items-center justify-center">
      
      {/* Cinematic Gallery Background */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <div ref={bgRef} className="absolute inset-[-10%] w-[120%] h-[120%]">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop" 
            alt="Minimalist Architecture" 
            className="w-full h-full object-cover grayscale-[0.9] opacity-40 mix-blend-multiply"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfdfd] via-[#fdfdfd]/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div ref={textRef} className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-32">
        <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-neutral-400 mb-8 block">Curated Wardrobe</span>
        <h1 className="text-5xl md:text-[7vw] font-heading font-light text-neutral-900 uppercase tracking-widest leading-none mb-12 mix-blend-difference">
          The Minimalist
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl font-light tracking-[0.2em] uppercase text-sm">
          Less noise. More intention.
        </p>
      </div>
    </section>
  );
};
