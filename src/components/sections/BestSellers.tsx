import { AddToCartButton } from '@/components/AddToCartButton';

const products = [
  {
    id: 1,
    name: 'Core Heavyweight Tee',
    price: '$65.00',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Signature Relaxed Trouser',
    price: '$135.00',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Minimalist Bomber',
    price: '$215.00',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Everyday Zip Hoodie',
    price: '$110.00',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
  }
];

export const BestSellers = () => {
  return (
    <section className="bg-secondary text-primary py-24 md:py-32 border-t border-primary/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter">Best Sellers</h2>
          <a href="#all-best" className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center hover:text-primary/60 transition-colors border-b border-primary/20 pb-1 hover:border-primary">
            View All <span className="ml-3">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 w-full h-full bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto shadow-xl">
                    <AddToCartButton 
                      product={{ id: `best-${product.id}`, name: product.name, price: product.price, image: product.image }}
                      className="bg-white text-primary hover:bg-neutral-200"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-bold font-heading tracking-wide">{product.name}</h3>
                <p className="text-xs font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
