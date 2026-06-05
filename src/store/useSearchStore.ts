import { create } from 'zustand';

interface SearchState {
  isOpen: boolean;
  query: string;
  setIsOpen: (isOpen: boolean) => void;
  setQuery: (query: string) => void;
  openSearch: () => void;
  closeSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  isOpen: false,
  query: '',
  setIsOpen: (isOpen) => set({ isOpen }),
  setQuery: (query) => set({ query }),
  openSearch: () => set({ isOpen: true }),
  closeSearch: () => set({ isOpen: false, query: '' }),
}));
