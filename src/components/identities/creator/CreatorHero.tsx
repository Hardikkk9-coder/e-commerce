'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CreatorHero = () => {
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
    <section ref={containerRef} className="relative h-[120vh] w-full bg-[#fafafa] overflow-hidden flex items-center justify-center">
      
      {/* Cinematic Studio Background */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <div ref={bgRef} className="absolute inset-[-10%] w-[120%] h-[120%]">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
            alt="Creative Studio Loft" 
            className="w-full h-full object-cover grayscale-[0.7] opacity-60 mix-blend-multiply"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-[#fafafa]/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div ref={textRef} className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-32">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/50 mb-8 block">Curated Wardrobe</span>
        <h1 className="text-6xl md:text-[8vw] font-heading font-black text-primary uppercase tracking-tighter leading-none mb-8 mix-blend-difference">
          The Creator
        </h1>
        <p className="text-xl md:text-2xl text-primary/70 max-w-2xl font-medium tracking-wide">
          Built for those shaping culture.
        </p>
      </div>
    </section>
  );
};
