'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomLink } from '../CustomLink';

gsap.registerPlugin(ScrollTrigger);

export const CityHero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !bgRef.current || !textRef.current || !contentRef.current) return;

    // Background moves slower (parallax depth)
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

    // Typography shifts aggressively upwards
    gsap.to(textRef.current, {
      yPercent: -80,
      opacity: 0.1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Content block stays pinned longer or moves slightly
    gsap.to(contentRef.current, {
      yPercent: -20,
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
    <section ref={containerRef} className="relative h-[160vh] w-full bg-primary overflow-hidden">
      
      {/* Background Architecture */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <div ref={bgRef} className="absolute inset-[-20%] w-[140%] h-[140%]">
          <img 
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop" 
            alt="Brutalist Architecture" 
            className="w-full h-full object-cover grayscale opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
      </div>

      {/* Massive Typography */}
      <div className="relative z-10 w-full h-[100vh] flex flex-col items-center justify-center pointer-events-none">
        <h1 
          ref={textRef} 
          className="text-[25vw] leading-[0.75] font-heading font-black text-white uppercase tracking-tighter mix-blend-overlay opacity-90 select-none text-center"
        >
          THE<br />CITY
        </h1>
      </div>

      {/* Lower Left Content Block */}
      <div className="absolute bottom-0 left-0 z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <div ref={contentRef} className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-heading font-black uppercase text-white tracking-tighter mb-6">
            Built For<br />Movement.
          </h2>
          <p className="text-secondary/70 text-base md:text-lg mb-12 max-w-md">
            Crafted for those who move through the world with intention. Brutalist utility meets refined architectural construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <CustomLink href="#shop-men" className="bg-white text-primary px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-300 transition-colors flex items-center justify-center">
              Shop Men
            </CustomLink>
            <CustomLink href="#explore-campaign" className="group border border-white/20 text-white px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:border-white transition-colors flex items-center justify-center">
              Explore Campaign
              <span className="ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">→</span>
            </CustomLink>
          </div>
        </div>
      </div>

    </section>
  );
};
