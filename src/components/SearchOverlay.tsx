'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon, ArrowRight, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSearchStore } from '@/store/useSearchStore';
import { CustomLink } from './CustomLink';
import { AddToCartButton } from './AddToCartButton';

// Mock Data for Discovery Mode
const TRENDING_PRODUCTS = [
  { name: 'Technical Windbreaker', price: '$295', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop', link: '/men/identity/the-commuter' },
  { name: 'Minimalist Bomber', price: '$225', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop', link: '/men/identity/the-minimalist' },
  { name: 'Cargo Utility Pant', price: '$185', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop', link: '/men/identity/the-commuter' },
  { name: 'Premium White Tee', price: '$85', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop', link: '/men/identity/the-minimalist' },
];

const RECENTLY_VIEWED = [
  { name: 'Premium Oxford Shirt', price: '$185', image: 'https://images.unsplash.com/photo-1502389614483-e475fc34407e?q=80&w=800&auto=format&fit=crop', link: '/men/identity/the-executive' },
  { name: 'Luxury Loafers', price: '$650', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop', link: '/men/identity/the-executive' },
];

const MOST_SEARCHED = ['Cargo Pants', 'Oversized Tee', 'Bomber Jacket', 'Tailored Trouser', 'Executive Style'];
const POPULAR_COLLECTIONS = ['Drop 01: The City', 'Archive 2025', 'Summer Essentials', 'Winter Heavyweights'];

const IDENTITIES = [
  { name: 'The Commuter', link: '/men/identity/the-commuter', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800' },
  { name: 'The Creator', link: '/men/identity/the-creator', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800' },
  { name: 'The Executive', link: '/men/identity/the-executive', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800' },
  { name: 'The Minimalist', link: '/men/identity/the-minimalist', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800' },
];

// Smart AI Search Mock Engine
const MOCK_DB = {
  products: [
    { id: 1, name: 'Heavyweight Cargo Pants', category: 'cargo pants', price: '$185', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800', link: '/men/identity/the-commuter' },
    { id: 2, name: 'Technical Windbreaker', category: 'commuter jacket', price: '$295', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800', link: '/men/identity/the-commuter' },
    { id: 3, name: 'Vintage Wash Hoodie (Black)', category: 'black hoodie', price: '$125', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800', link: '/men/identity/the-creator' },
    { id: 4, name: 'Oversized Graphic Tee', category: 'oversized tee', price: '$85', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800', link: '/men/identity/the-creator' },
    { id: 5, name: 'Luxury Wool Blazer', category: 'executive style', price: '$850', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800', link: '/men/identity/the-executive' },
    { id: 6, name: 'Premium White Tee', category: 'minimal outfits', price: '$85', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800', link: '/men/identity/the-minimalist' },
  ],
  looks: [
    { title: 'Look 01: The Boardroom', category: 'executive style', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800', link: '/men/identity/the-executive' },
    { title: 'Uniform 01: The Gallery', category: 'minimal outfits', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800', link: '/men/identity/the-minimalist' },
  ]
};

// AI Recommender Outfits
const AI_OUTFITS: Record<string, any> = {
  'cargo pants': {
    title: 'The Urban Utility Look',
    desc: 'Based on your search for Cargo Pants, our AI stylist recommends this complete technical outfit.',
    products: [
      { name: 'Heavyweight Cargo Pants', price: '$185', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800', link: '/men/identity/the-commuter' },
      { name: 'Technical Windbreaker', price: '$295', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800', link: '/men/identity/the-commuter' },
      { name: 'Heavyweight Tee', price: '$85', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800', link: '/men/identity/the-creator' },
      { name: 'Leather Sneaker', price: '$450', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800', link: '/men/identity/the-minimalist' },
    ],
    link: '/men/identity/the-commuter'
  }
};

export const SearchOverlay = () => {
  const { isOpen, query, setQuery, closeSearch } = useSearchStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const scrollOffsetRef = useRef(0);

  useEffect(() => {
    const pageWrapper = document.getElementById('page-content');
    
    if (isOpen) {
      // 1. Capture current scroll position
      scrollOffsetRef.current = window.scrollY;
      
      // 2. Lock the background wrapper precisely where it was visually
      if (pageWrapper) {
        pageWrapper.style.position = 'fixed';
        pageWrapper.style.top = `-${scrollOffsetRef.current}px`;
        pageWrapper.style.width = '100%';
        pageWrapper.style.pointerEvents = 'none'; // Prevent any accidental background clicks
      }

      // 3. Reset actual window scroll to 0 so the Search Overlay starts at the top
      // We do this immediately to prevent flickering
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
      
      // 4. Focus input
      setTimeout(() => inputRef.current?.focus(), 100);
      
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeSearch();
      };
      window.addEventListener('keydown', handleEsc);
      
      return () => {
        window.removeEventListener('keydown', handleEsc);
        // When SearchOverlay unmounts (closes):
        if (pageWrapper) {
          // Restore background
          pageWrapper.style.position = '';
          pageWrapper.style.top = '';
          pageWrapper.style.width = '';
          pageWrapper.style.pointerEvents = '';
          
          // Restore scroll position
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(scrollOffsetRef.current, { immediate: true });
          } else {
            window.scrollTo(0, scrollOffsetRef.current);
          }
        }
      };
    }
  }, [isOpen, closeSearch]);

  const handleNavigation = (href: string) => {
    closeSearch();
    router.push(href);
  };

  const getResults = () => {
    const q = query.toLowerCase();
    if (!q) return null;
    const matchedProducts = MOCK_DB.products.filter(p => p.name.toLowerCase().includes(q) || p.category.includes(q));
    const matchedLooks = MOCK_DB.looks.filter(l => l.title.toLowerCase().includes(q) || l.category.includes(q));
    return { products: matchedProducts, looks: matchedLooks };
  };

  const results = getResults();
  const hasResults = results && (results.products.length > 0 || results.looks.length > 0);
  
  // Check for AI Outfit Recommendation
  const aiRecommendation = query.toLowerCase().includes('cargo pants') ? AI_OUTFITS['cargo pants'] : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          // Note: absolute top-0 left-0, NO overflow classes. Natural page flow.
          className="absolute top-0 left-0 w-full min-h-screen z-[100] bg-[#0a0a0a] backdrop-blur-2xl"
        >
          {/* Close Button - fixed so it follows the user down the page */}
          <button 
            onClick={closeSearch}
            className="fixed top-8 right-8 z-[110] text-white/50 hover:text-white transition-colors p-4"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-32 flex flex-col gap-24">
            
            {/* Search Input Area */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="relative w-full border-b border-white/20 pb-6"
            >
              <div className="flex items-center">
                <SearchIcon className="w-8 h-8 md:w-10 md:h-10 text-white/40 mr-6" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, collections, styles, or looks..."
                  className="w-full bg-transparent text-3xl md:text-5xl font-heading font-light tracking-wide text-white placeholder-white/20 outline-none"
                />
              </div>
            </motion.div>

            {/* Vertical Flow Sections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col gap-32"
            >
              
              {!query ? (
                // STATE A: DISCOVERY MODE (Empty Input)
                <div className="flex flex-col gap-32">
                  
                  {/* Trending Now */}
                  <section>
                    <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
                      <h2 className="text-sm font-bold uppercase tracking-widest text-white/50">Trending Now</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {TRENDING_PRODUCTS.map((p, i) => (
                        <div key={i} onClick={() => handleNavigation(p.link)} className="group cursor-pointer">
                          <div className="aspect-[3/4] bg-white/5 overflow-hidden mb-4 relative">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-center">
                              <AddToCartButton product={{ id: `trend-${i}`, name: p.name, price: p.price, image: p.image }} />
                            </div>
                          </div>
                          <h3 className="text-white text-xs font-bold uppercase tracking-wider">{p.name}</h3>
                          <p className="text-white/50 text-[10px] mt-1">{p.price}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Shop By Identity */}
                  <section>
                    <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
                      <h2 className="text-sm font-bold uppercase tracking-widest text-white/50">Shop By Identity</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {IDENTITIES.map((id, i) => (
                        <div key={i} onClick={() => handleNavigation(id.link)} className="group block cursor-pointer">
                          <div className="aspect-[4/5] overflow-hidden bg-white/5 mb-6 relative">
                            <img src={id.image} alt={id.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                              <h3 className="text-2xl md:text-3xl font-heading font-light tracking-widest uppercase text-white group-hover:scale-110 transition-transform duration-700">{id.name}</h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Most Searched & Collections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <section>
                      <h2 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-8 border-b border-white/10 pb-4">Most Searched</h2>
                      <div className="flex flex-wrap gap-4">
                        {MOST_SEARCHED.map((term, i) => (
                          <button key={i} onClick={() => setQuery(term)} className="border border-white/20 text-white/60 hover:text-white hover:border-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors rounded-none">
                            {term}
                          </button>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h2 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-8 border-b border-white/10 pb-4">Popular Collections</h2>
                      <div className="flex flex-col gap-4">
                        {POPULAR_COLLECTIONS.map((c, i) => (
                          <span key={i} className="text-lg font-light uppercase tracking-widest text-white/60 hover:text-white cursor-pointer transition-colors flex items-center group">
                            <ArrowRight className="w-4 h-4 mr-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            {c}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>

                  {/* Recently Viewed */}
                  <section>
                    <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
                      <h2 className="text-sm font-bold uppercase tracking-widest text-white/50">Recently Viewed</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {RECENTLY_VIEWED.map((p, i) => (
                        <div key={i} onClick={() => handleNavigation(p.link)} className="group cursor-pointer">
                          <div className="aspect-[3/4] bg-white/5 overflow-hidden mb-4 relative">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-center">
                              <AddToCartButton product={{ id: `recent-${i}`, name: p.name, price: p.price, image: p.image }} />
                            </div>
                          </div>
                          <h3 className="text-white text-xs font-bold uppercase tracking-wider">{p.name}</h3>
                          <p className="text-white/50 text-[10px] mt-1">{p.price}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                </div>
              ) : (
                // STATE B: LIVE SEARCH RESULTS
                <div className="flex flex-col gap-24">
                  
                  {/* AI Outfit Recommendation Block */}
                  {aiRecommendation && (
                    <section className="bg-white/5 border border-white/10 p-8 md:p-16 rounded-none">
                      <div className="flex items-center gap-3 mb-6">
                        <Sparkles className="w-5 h-5 text-[#C1A063]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C1A063]">AI Stylist Recommendation</span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-heading font-light tracking-widest uppercase mb-4 text-white">{aiRecommendation.title}</h3>
                      <p className="text-base font-light text-white/60 mb-12 max-w-2xl leading-relaxed">{aiRecommendation.desc}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {aiRecommendation.products.map((p: any, i: number) => (
                          <div key={i} onClick={() => handleNavigation(p.link)} className="group cursor-pointer flex flex-col">
                            <div className="aspect-[3/4] bg-white/5 overflow-hidden mb-4 relative">
                              <img src={p.image} alt={p.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-center">
                                <AddToCartButton product={{ id: `ai-${i}`, name: p.name, price: p.price, image: p.image }} />
                              </div>
                            </div>
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-white">{p.name}</h4>
                            <p className="text-white/50 text-[10px] mt-1">{p.price}</p>
                          </div>
                        ))}
                      </div>
                      <button onClick={() => handleNavigation(aiRecommendation.link)} className="mt-12 border border-white text-white px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full md:w-auto">
                        Shop Complete Look
                      </button>
                    </section>
                  )}

                  {/* Standard Results */}
                  {hasResults ? (
                    <div className="flex flex-col gap-24">
                      {results?.products.length > 0 && (
                        <section>
                          <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white/50">Products ({results.products.length})</h2>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {results.products.map((p) => (
                              <div key={p.id} onClick={() => handleNavigation(p.link)} className="group cursor-pointer">
                                <div className="aspect-[3/4] bg-white/5 overflow-hidden mb-4 relative">
                                  <img src={p.image} alt={p.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-center">
                                    <AddToCartButton product={{ id: `res-${p.id}`, name: p.name, price: p.price, image: p.image }} />
                                  </div>
                                </div>
                                <h3 className="text-white text-[10px] font-bold uppercase tracking-wider">{p.name}</h3>
                                <p className="text-white/50 text-[10px] mt-1">{p.price}</p>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}

                      {results?.looks.length > 0 && (
                        <section>
                          <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white/50">Editorial Looks ({results.looks.length})</h2>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {results.looks.map((l, idx) => (
                              <div key={idx} onClick={() => handleNavigation(l.link)} className="group cursor-pointer flex flex-col bg-white/5 p-6 hover:bg-white/10 transition-colors">
                                <div className="w-full aspect-square bg-black overflow-hidden mb-6">
                                  <img src={l.image} alt={l.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                </div>
                                <h3 className="text-white text-lg font-light tracking-widest uppercase mb-6">{l.title}</h3>
                                <button className="flex items-center text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                                  Explore <ArrowRight className="w-4 h-4 ml-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}
                    </div>
                  ) : (
                    // No Results
                    <div className="flex flex-col items-center justify-center py-48 text-center border border-white/10">
                      <SearchIcon className="w-12 h-12 text-white/20 mb-8" />
                      <h2 className="text-4xl md:text-6xl font-heading font-light uppercase tracking-widest text-white mb-4">No exact matches</h2>
                      <p className="text-white/50 text-base max-w-md font-light leading-relaxed mb-12">
                        We couldn't find exactly what you were looking for. Explore our curation or refine your terms.
                      </p>
                      <button onClick={() => setQuery('')} className="bg-white text-black px-12 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                        Clear Search
                      </button>
                    </div>
                  )}
                </div>
              )}

            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
