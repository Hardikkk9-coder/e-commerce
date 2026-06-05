import { AddToCartButton } from '@/components/AddToCartButton';

const products = [
  {
    id: 1,
    name: 'Shadow-Cut Hoodie',
    price: '$129.00',
    colors: ['#000000', '#F7F5F2', '#333333'],
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Nexora Oversized Tee',
    price: '$79.00',
    colors: ['#000000', '#F7F5F2'],
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Technical Windbreaker',
    price: '$149.00',
    colors: ['#000000', '#555555'],
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Utility Cargo Pants',
    price: '$119.00',
    colors: ['#000000', '#F7F5F2'],
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop'
  }
];

export const NewArrivals = () => {
  return (
    <section className="bg-secondary text-primary py-24 md:py-32 border-t border-primary/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter">New Arrivals</h2>
          <a href="#all-new" className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center hover:text-primary/60 transition-colors border-b border-primary/20 pb-1 hover:border-primary">
            View All <span className="ml-3">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto">
                    <AddToCartButton 
                      product={{ id: `new-${product.id}`, name: product.name, price: product.price, image: product.image }}
                      className="shadow-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold font-heading tracking-wide mb-2">{product.name}</h3>
                  <p className="text-xs font-medium text-primary/60">{product.price}</p>
                </div>
                <div className="flex space-x-2">
                  {product.colors.map((color, idx) => (
                    <div 
                      key={idx} 
                      className="w-3 h-3 rounded-full border border-primary/10 shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
