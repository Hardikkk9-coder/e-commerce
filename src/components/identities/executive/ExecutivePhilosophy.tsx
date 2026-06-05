'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ExecutivePhilosophy = () => {
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
    <section ref={containerRef} className="bg-[#0a0a0a] text-white py-32 md:py-48 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center" ref={textRef}>
        <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-12 leading-tight text-white/90">
          The boardroom. The penthouse. The private lounge.
        </h2>
        <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
          The Executive wardrobe is precision engineered for those who dictate the pace. It rejects the rigid constraints of traditional suiting in favor of relaxed, premium tailoring. From high-stakes negotiations to the evening retreat, this collection projects absolute, uncompromised power.
        </p>
      </div>
    </section>
  );
};
