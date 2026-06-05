'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const EditorialFeature = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !textRef.current) return;

    // Removed GSAP pinning to use native CSS sticky instead for zero jitter

    // Fade in text blocks as they scroll into view
    const textBlocks = textRef.current.children;
    gsap.fromTo(textBlocks, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 60%',
        }
      }
    );

  }, []);

  return (
    <section ref={containerRef} className="relative h-[140vh] w-full bg-secondary text-primary hidden md:flex">
      
      {/* Left Pinned Image (Native CSS Sticky) */}
      <div className="w-1/2 h-screen sticky top-0">
        <div className="absolute inset-0 w-full h-full p-12 lg:p-24 pb-0">
          <div className="w-full h-full relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1200&auto=format&fit=crop" 
              alt="Design details" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.5]"
            />
          </div>
        </div>
      </div>

      {/* Right Scrolling Story */}
      <div className="w-1/2 h-full flex flex-col pt-32 lg:pt-48 px-12 lg:pr-24">
        <div ref={textRef} className="max-w-xl ml-auto pb-48">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 mb-8 block">Editorial</span>
          <h2 className="text-6xl md:text-[5vw] font-heading font-black uppercase tracking-tighter leading-[0.85] mb-24">
            Designed<br />For The<br />City
          </h2>

          <div className="mb-24">
            <h3 className="text-xl font-heading font-bold uppercase mb-4">01. Inspiration</h3>
            <p className="text-primary/70 leading-relaxed">
              We look at the skyline not as a backdrop, but as a blueprint. The harsh angles of brutalist concrete, the reflective surfaces of steel glass, and the constant hum of motion dictate every silhouette we construct.
            </p>
          </div>

          <div className="mb-24">
            <h3 className="text-xl font-heading font-bold uppercase mb-4">02. Construction</h3>
            <p className="text-primary/70 leading-relaxed">
              Garments built like architecture. Articulated joints, reinforced seams, and ergonomic paneling ensure unrestricted movement without compromising the stark, tailored aesthetic.
            </p>
          </div>

          <div className="mb-24">
            <h3 className="text-xl font-heading font-bold uppercase mb-4">03. Materials</h3>
            <p className="text-primary/70 leading-relaxed">
              Sourced from performance mills in Japan and luxury weavers in Italy. We utilize weather-resistant technical nylons juxtaposed against heavy, breathable cottons for ultimate urban versatility.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};
