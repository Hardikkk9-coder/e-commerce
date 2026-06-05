import { ArrowRight } from 'lucide-react';
import { CustomLink } from '../CustomLink';

const categories = [
  {
    title: 'Men',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Women',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Accessories',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Best Sellers',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
  }
];

export const CategoryDiscovery = () => {
  return (
    <section className="bg-white w-full py-2">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 px-2 h-auto md:h-[60vh] lg:h-[70vh]">
        {categories.map((category) => (
          <CustomLink
            key={category.title}
            href={`/${category.title.toLowerCase().replace(' ', '-')}`}
            className="group relative overflow-hidden block bg-neutral-100 h-64 md:h-full"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 z-10" />
            <img 
              src={category.image} 
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale-[0.8] group-hover:grayscale-[0.2]"
            />
            <div className="absolute bottom-0 left-0 p-6 z-20 w-full flex flex-col items-start justify-end">
              <h3 className="text-xl md:text-2xl font-heading uppercase text-primary bg-white px-4 py-2 mb-4 tracking-wide group-hover:-translate-y-2 transition-transform duration-500">
                {category.title}
              </h3>
              <div className="flex items-center space-x-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                <span className="w-8 h-[1px] bg-white"></span>
                <ArrowRight className="text-white w-5 h-5" />
              </div>
            </div>
          </CustomLink>
        ))}
      </div>
    </section>
  );
};
