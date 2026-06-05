'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Moodboard = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images robustly
  useEffect(() => {
    if (!containerRef.current) return;
    
    const images = Array.from(containerRef.current.querySelectorAll('img'));
    
    const checkImages = () => {
      const loaded = images.filter(img => img.complete).length;
      if (loaded === images.length) {
        setImagesLoaded(true);
      }
    };
    
    images.forEach(img => {
      if (!img.complete) {
        img.addEventListener('load', checkImages);
        img.addEventListener('error', checkImages); // fallback
      }
    });
    
    checkImages(); // check immediately for cached images
    
    return () => {
      images.forEach(img => {
        img.removeEventListener('load', checkImages);
        img.removeEventListener('error', checkImages);
      });
    };
  }, []);

  // GSAP Animation Sequence
  useEffect(() => {
    if (!imagesLoaded || !containerRef.current) return;

    // Set initial states before revealing
    gsap.set(containerRef.current, { opacity: 1 });
    gsap.set([img1Ref.current, img2Ref.current, img3Ref.current], { opacity: 0, scale: 0.95 });
    gsap.set(titleRef.current, { opacity: 0, y: 30 });
    gsap.set(contentRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%', // Trigger when section is in view
        once: true,       // Play sequence only once
      }
    });

    tl.to(contentRef.current, { opacity: 1, duration: 0.8, ease: 'power2.out' })
      .to(img1Ref.current, { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.4')
      .to(img2Ref.current, { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.6')
      .to(img3Ref.current, { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.8')
      .to(titleRef.current, { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }, '-=0.6');

  }, [imagesLoaded]);

  return (
    <section ref={containerRef} className="relative h-[120vh] md:h-[100vh] w-full bg-secondary text-primary overflow-hidden flex items-center justify-center opacity-0">
      
      <div ref={contentRef} className="absolute inset-0 w-full h-full opacity-0">
        <div className="absolute top-12 left-6 md:left-12 z-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40">Moodboard</span>
        </div>

        <div className="max-w-[1600px] w-full h-full relative mx-auto">
          
          {/* Background Typography */}
          <h2 
            ref={titleRef}
            className="absolute top-1/3 left-4 md:left-12 z-40 text-6xl md:text-[9vw] font-heading font-black uppercase tracking-tighter leading-[0.8] mix-blend-difference text-white pointer-events-none"
          >
            The Modern<br />Uniform
          </h2>

          {/* Overlapping Images */}
          <div ref={img1Ref} className="absolute top-[10%] right-[10%] w-[60%] md:w-[30%] aspect-[3/4] z-0 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" 
              alt="Tailoring detail" 
              className="w-full h-full object-cover grayscale-[0.8]"
            />
          </div>

          <div ref={img2Ref} className="absolute bottom-[10%] left-[5%] md:left-[15%] w-[70%] md:w-[40%] aspect-video z-20 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?q=80&w=1200&auto=format&fit=crop" 
              alt="Urban movement" 
              className="w-full h-full object-cover grayscale-[0.3]"
            />
          </div>

          <div ref={img3Ref} className="absolute bottom-[20%] right-[5%] w-[40%] md:w-[25%] aspect-square z-30 shadow-2xl hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop" 
              alt="Fabric texture" 
              className="w-full h-full object-cover grayscale"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
