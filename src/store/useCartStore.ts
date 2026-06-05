import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size?: string;
  color?: string;
  quantity: number;
  image: string;
}

export interface FlyAnimationData {
  id: number; // Unique ID to trigger multiple animations
  image: string;
  startX: number;
  startY: number;
  startWidth: number;
  startHeight: number;
}

export interface QuickShopData {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  rect?: DOMRect;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  lastAddedItem: CartItem | null;
  flyAnimation: FlyAnimationData | null;
  quickShopData: QuickShopData | null;
  addItem: (item: CartItem, rect?: DOMRect) => void;
  removeItem: (id: string, size?: string) => void;
  updateQuantity: (id: string, size: string | undefined, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  clearLastAdded: () => void;
  clearFlyAnimation: () => void;
  openQuickShop: (product: QuickShopData['product'], rect?: DOMRect) => void;
  closeQuickShop: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      lastAddedItem: null,
      flyAnimation: null,
      quickShopData: null,
      addItem: (newItem, rect) => set((state) => {
        let flyData = null;
        if (rect) {
          flyData = {
            id: Date.now(),
            image: newItem.image,
            startX: rect.left,
            startY: rect.top,
            startWidth: rect.width,
            startHeight: rect.height,
          };
        }

        const existingItemIndex = state.items.findIndex(
          (item) => item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
        );

        if (existingItemIndex >= 0) {
          const newItems = [...state.items];
          newItems[existingItemIndex].quantity += newItem.quantity;
          return { items: newItems, lastAddedItem: newItem, flyAnimation: flyData };
        }

        return { items: [...state.items, newItem], lastAddedItem: newItem, flyAnimation: flyData };
      }),
      removeItem: (id, size) => set((state) => ({
        items: state.items.filter((item) => !(item.id === id && item.size === size))
      })),
      updateQuantity: (id, size, quantity) => set((state) => ({
        items: state.items.map((item) => 
          item.id === id && item.size === size 
            ? { ...item, quantity: Math.max(1, quantity) }
            : item
        )
      })),
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      clearLastAdded: () => set({ lastAddedItem: null }),
      clearFlyAnimation: () => set({ flyAnimation: null }),
      openQuickShop: (product, rect) => set({ quickShopData: { product, rect } }),
      closeQuickShop: () => set({ quickShopData: null }),
    }),
    {
      name: 'nexora-cart-storage',
      // We don't want to persist transient UI states
      partialize: (state) => ({ items: state.items }),
    }
  )
);

