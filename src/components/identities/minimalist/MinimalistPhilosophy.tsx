'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MinimalistPhilosophy = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    gsap.fromTo(textRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 65%',
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="bg-[#fdfdfd] text-neutral-900 py-32 md:py-56 px-6 md:px-12 border-t border-neutral-100">
      <div className="max-w-3xl mx-auto text-center" ref={textRef as any}>
        <h2 className="text-2xl md:text-4xl font-light tracking-wide mb-16 leading-relaxed text-neutral-800">
          The art of reduction. Finding luxury in the essential, the precise, and the unbranded.
        </h2>
        <p className="text-base md:text-lg text-neutral-400 leading-loose max-w-xl mx-auto font-light tracking-wide">
          The Minimalist wardrobe is an exercise in restraint. We stripped away every extraneous detail, leaving only pure silhouettes and uncompromising fabrics. Inspired by serene gallery spaces and quiet architecture, this is apparel for those who understand that true luxury doesn't need to shout.
        </p>
      </div>
    </section>
  );
};
