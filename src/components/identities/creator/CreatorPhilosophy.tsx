'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CreatorPhilosophy = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    gsap.fromTo(textRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="bg-[#fafafa] text-primary py-32 md:py-48 px-6 md:px-12 border-t border-primary/10">
      <div className="max-w-4xl mx-auto text-center" ref={textRef}>
        <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-12 leading-tight">
          The blank canvas. The studio loft. The space where culture takes shape.
        </h2>
        <p className="text-lg md:text-xl text-primary/60 leading-relaxed max-w-2xl mx-auto">
          The Creator wardrobe is designed for the modern artist. It prioritizes unrestricted movement and relaxed silhouettes without compromising on structure or texture. From the drafting table to the gallery opening, these garments serve as the foundation for creative expression.
        </p>
      </div>
    </section>
  );
};
