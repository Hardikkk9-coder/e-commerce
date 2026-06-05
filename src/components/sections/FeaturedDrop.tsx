'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const FeaturedDrop = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !imageRef.current) return;

    gsap.fromTo(imageRef.current, 
      { scale: 1.1, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      }
    );

    gsap.fromTo(textRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="bg-secondary text-primary py-24 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left: Photography */}
        <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-neutral-200">
          <img 
            ref={imageRef}
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1200&auto=format&fit=crop" 
            alt="Drop 01 Campaign" 
            className="absolute inset-0 w-full h-full object-cover origin-center grayscale-[0.8]"
          />
        </div>

        {/* Right: Narrative */}
        <div ref={textRef} className="flex flex-col justify-center max-w-xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 mb-8 block">Featured Drop</span>
          <h2 className="text-6xl md:text-[5vw] font-heading font-black uppercase leading-[0.9] tracking-tighter mb-10">
            Drop 01<br />
            Shadows Of<br />
            The City
          </h2>
          <p className="text-primary/70 text-base leading-relaxed mb-12 max-w-md">
            Inspired by the silent strength of urban architecture. Each piece is crafted with precision, built for those who move differently. A technical approach to modern luxury aesthetics.
          </p>
          <a href="#shop-drop" className="group flex items-center text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors w-fit border-b border-primary/20 pb-3 hover:border-accent">
            Shop The Collection
            <span className="ml-6 transform group-hover:translate-x-3 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
