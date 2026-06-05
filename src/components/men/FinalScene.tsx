'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomLink } from '../CustomLink';

gsap.registerPlugin(ScrollTrigger);

export const FinalScene = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !textRef.current) return;

    // Subtly scale the background image as we scroll into the final scene
    gsap.fromTo(imageRef.current,
      { scale: 1.1 },
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

    // Fade in the massive typography
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-primary flex items-center justify-center overflow-hidden">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop" 
          alt="The City at Night" 
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <h2 className="text-[10vw] md:text-[8vw] font-heading font-black text-white uppercase tracking-tighter leading-[0.85] mb-8 mix-blend-overlay">
          The City<br />Never Stops<br />Moving
        </h2>
        <p className="text-xl md:text-3xl font-heading font-bold text-white/50 uppercase tracking-[0.2em] mb-16">
          Neither Do We.
        </p>
        
        <CustomLink href="#shop-all" className="bg-white text-primary px-12 py-6 text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-300 transition-colors flex items-center justify-center group">
          Shop Men's Collection
          <span className="ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">→</span>
        </CustomLink>
      </div>

    </section>
  );
};
