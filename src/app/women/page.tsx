export default function WomenPage() {
  return (
    <section className="relative h-screen w-full bg-primary flex flex-col md:flex-row overflow-hidden border-b border-white/10">
      <div className="absolute top-0 right-0 w-full md:w-[55%] h-[60vh] md:h-full z-10 overflow-hidden">
        <div className="absolute inset-[-10%] w-[120%] h-[120%]">
          <img 
            src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop" 
            alt="Women Collection" 
            className="w-full h-full object-cover object-center grayscale-[0.8]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/80 md:to-primary" />
      </div>

      <div className="relative z-20 w-full h-full max-w-[1600px] mx-auto flex px-6 md:px-12">
        <div className="w-full md:w-[45%] h-full flex flex-col justify-center pt-24 md:pt-0 pr-8">
          <div>
            <span className="text-secondary/50 uppercase tracking-[0.2em] text-xs font-bold mb-8 block">
              Category
            </span>
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-heading font-black text-white uppercase tracking-tighter mb-10">
              Womens<br />
              Resort<br />
              Line
            </h1>
            <p className="text-base md:text-lg text-secondary/60 max-w-sm mb-12 leading-relaxed">
              Elegant drapery meeting stark industrial contrast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
