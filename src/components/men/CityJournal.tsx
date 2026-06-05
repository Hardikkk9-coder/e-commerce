'use client';

import { ArrowRight } from 'lucide-react';
import { CustomLink } from '../CustomLink';

const articles = [
  {
    title: 'Concrete Jungles: Brutalism in Modern Fashion',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'The Evolution of the Technical Silhouette',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: '48 Hours in Tokyo: A Style Guide',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop',
  }
];

export const CityJournal = () => {
  return (
    <section className="bg-primary text-white py-32 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4 block">The Journal</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter">City Notes</h2>
          </div>
          <CustomLink href="/journal" className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center hover:text-white/60 transition-colors border-b border-white/20 pb-1 hover:border-white mt-6 md:mt-0">
            Read The Journal <span className="ml-3">→</span>
          </CustomLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <CustomLink key={idx} href={`/journal/article-${idx}`} className="group cursor-pointer">
              <div className="relative aspect-video md:aspect-[4/5] lg:aspect-video overflow-hidden mb-6">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">
                {article.category}
              </span>
              <h3 className="text-xl md:text-2xl font-heading font-bold leading-tight group-hover:text-white/80 transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center mt-6 text-white/50 group-hover:text-white transition-colors duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest mr-4">Read Story</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </CustomLink>
          ))}
        </div>
      </div>
    </section>
  );
};
