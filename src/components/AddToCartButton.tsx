'use client';

import { useCartStore } from '@/store/useCartStore';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: string | number;
    image: string;
  };
  className?: string;
}

export const AddToCartButton = ({ product, className = '' }: AddToCartButtonProps) => {
  const openQuickShop = useCartStore((state) => state.openQuickShop);

  // Clean price string if needed (e.g. "$185" -> 185)
  const numericPrice = typeof product.price === 'string' 
    ? parseFloat(product.price.replace(/[^0-9.]/g, '')) 
    : product.price;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent routing if inside a link card
    e.preventDefault();

    // Find the closest image to animate later
    const cardElement = e.currentTarget.closest('.group');
    const imgElement = cardElement?.querySelector('img');
    let rect: DOMRect | undefined;
    
    if (imgElement) {
      rect = imgElement.getBoundingClientRect();
    }

    openQuickShop({
      id: product.id,
      name: product.name,
      price: numericPrice,
      image: product.image,
    }, rect);
  };

  return (
    <button 
      onClick={handleAdd}
      className={`bg-white text-black text-[10px] font-bold uppercase tracking-widest py-3 px-6 hover:bg-neutral-200 transition-colors ${className}`}
    >
      Add To Cart
    </button>
  );
};
