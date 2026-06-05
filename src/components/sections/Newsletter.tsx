import { ArrowRight } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="bg-secondary text-primary py-32 md:py-48 border-t border-primary/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 mb-8 block">
          Join The Movement
        </span>
        <h2 className="text-5xl md:text-[5vw] font-heading font-black uppercase tracking-tighter leading-none mb-10">
          Get 10% Off Your<br />First Order
        </h2>
        <p className="text-primary/60 text-base mb-16 max-w-md mx-auto">
          Subscribe to receive updates on new arrivals, exclusive releases, and early access to drops.
        </p>
        
        <form className="flex flex-col sm:flex-row items-center justify-center max-w-xl mx-auto gap-6 sm:gap-0">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full sm:w-2/3 bg-transparent border-b border-primary/20 px-4 py-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-primary transition-colors text-xs font-bold tracking-widest uppercase rounded-none"
            required
          />
          <button 
            type="submit" 
            className="w-full sm:w-auto bg-primary text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors flex items-center justify-center sm:-ml-4 mt-4 sm:mt-0"
          >
            Subscribe
            <ArrowRight className="w-4 h-4 ml-3" />
          </button>
        </form>
      </div>
    </section>
  );
};
