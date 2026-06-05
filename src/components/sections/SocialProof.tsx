export const SocialProof = () => {
  const images = [
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=800&auto=format&fit=crop',
  ];

  return (
    <section className="bg-primary text-white py-0 flex flex-col md:flex-row border-y border-white/5">
      
      {/* Title Area */}
      <div className="w-full md:w-[45%] flex flex-col justify-center p-12 lg:p-24 border-b md:border-b-0 md:border-r border-white/5">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-8 block">Community</span>
        <h2 className="text-6xl md:text-[6vw] font-heading font-black uppercase tracking-tighter leading-none mb-10">
          #NEXORA
        </h2>
        <a href="#instagram" className="group flex items-center text-xs font-bold uppercase tracking-[0.2em] hover:text-white/70 transition-colors w-fit border-b border-white/20 pb-3 hover:border-white">
          See More
          <span className="ml-6 transform group-hover:translate-x-3 transition-transform">→</span>
        </a>
      </div>

      {/* Grid Area */}
      <div className="w-full md:w-[55%] grid grid-cols-2 lg:grid-cols-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative aspect-square overflow-hidden group cursor-pointer border-r border-b md:border-b-0 border-white/5 last:border-r-0">
            <img 
              src={img} 
              alt="Community" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        ))}
      </div>

    </section>
  );
};
