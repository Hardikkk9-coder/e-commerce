'use client';
import './globals.css';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchOverlay } from '@/components/SearchOverlay';
import { CartDrawer } from '@/components/CartDrawer';
import { GlobalCartManager } from '@/components/GlobalCartManager';
import { QuickShopModal } from '@/components/QuickShopModal';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Make lenis available globally for transitions to lock/unlock
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <html lang="en">
      <body className="bg-primary text-secondary font-sans antialiased overflow-x-hidden selection:bg-white selection:text-primary">
        {/* The page-content wrapper allows the SearchOverlay to freeze the background visually while maintaining Lenis scrolling */}
        <div id="page-content" className="relative w-full flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        
        {/* Global Overlays Mounted Once */}
        <SearchOverlay />
        <CartDrawer />
        <GlobalCartManager />
        <QuickShopModal />
      </body>
    </html>
  );
}
