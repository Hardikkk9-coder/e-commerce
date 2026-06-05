'use client';

import { ArrowRight } from 'lucide-react';
import { CustomLink } from '../CustomLink';

const identities = [
  {
    title: 'The Commuter',
    subtitle: 'Weather-resistant outerwear and dynamic layers.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'The Creator',
    subtitle: 'Relaxed tailoring. Unrestricted movement.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'The Executive',
    subtitle: 'Sharp lines. Premium wool. Impeccable fit.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'The Minimalist',
    subtitle: 'Core essentials stripped of all excess.',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop'
  }
];

export const IdentityShop = () => {
  return (
    <section className="bg-primary w-full py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4 block">Identity</span>
        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-white tracking-tighter">Shop By Persona</h2>
      </div>

      <div className="flex flex-col w-full border-t border-white/10">
        {identities.map((identity, idx) => (
          <CustomLink 
            key={idx} 
            href={`/men/identity/${identity.title.toLowerCase().replace(' ', '-')}`}
            className="group relative flex flex-col md:flex-row items-center justify-between border-b border-white/10 p-6 md:p-12 overflow-hidden"
          >
            {/* Background Hover Image */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none will-change-[opacity]">
              <img 
                src={identity.image} 
                alt={identity.title} 
                className="w-full h-full object-cover grayscale opacity-30 transform-gpu scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out will-change-transform"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:w-1/2">
              <h3 className="text-5xl md:text-[6vw] font-heading font-black uppercase text-white/50 group-hover:text-white tracking-tighter leading-none transition-colors duration-500 transform-gpu group-hover:translate-x-4 will-change-transform">
                {identity.title}
              </h3>
            </div>

            <div className="relative z-10 md:w-1/4 mt-6 md:mt-0 flex flex-col items-start md:items-end text-left md:text-right">
              <p className="text-secondary/60 text-sm md:text-base mb-4 opacity-0 transform-gpu translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 will-change-[opacity,transform]">
                {identity.subtitle}
              </p>
              <div className="flex items-center text-white/50 group-hover:text-white transition-colors duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest mr-4">Explore</span>
                <ArrowRight className="w-5 h-5 transform-gpu group-hover:translate-x-2 transition-transform duration-300 will-change-transform" />
              </div>
            </div>
          </CustomLink>
        ))}
      </div>
    </section>
  );
};
