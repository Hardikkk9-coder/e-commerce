export const Footer = () => {
  return (
    <footer className="bg-primary text-secondary border-t border-white/10 py-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
        
        <div className="lg:col-span-2 space-y-8">
          <a href="/" className="text-3xl font-heading font-bold tracking-widest text-white uppercase block">
            Nexora
          </a>
          <p className="text-secondary/60 max-w-sm leading-relaxed text-sm">
            A luxury lifestyle brand focused on premium materials and elevated modern silhouettes. Designed for the global citizen.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-8">Shop</h4>
          <ul className="space-y-4 text-sm text-secondary/60">
            <li><a href="#" className="hover:text-accent transition-colors">Men</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Women</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Accessories</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">All Collections</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-8">Collections</h4>
          <ul className="space-y-4 text-sm text-secondary/60">
            <li><a href="#" className="hover:text-accent transition-colors">Drop 01</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Drop 02</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Drop 03</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Archive</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-8">Customer Care</h4>
          <ul className="space-y-4 text-sm text-secondary/60">
            <li><a href="#" className="hover:text-accent transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Track Order</a></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-secondary/40">
        <p>© 2025 NEXORA. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};
