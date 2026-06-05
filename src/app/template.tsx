'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isExiting, setIsExiting] = useState(false);
  const [nextChapterName, setNextChapterName] = useState('');

  let chapterName = 'HOME';
  if (pathname === '/men') chapterName = 'MEN';
  else if (pathname === '/women') chapterName = 'WOMEN';
  else if (pathname !== '/') {
    // Extract the last segment of the path and format it nicely
    const segments = pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    chapterName = lastSegment.replace(/-/g, ' ').toUpperCase();
  }

  useEffect(() => {
    // Force reset the exiting state whenever the pathname changes
    setIsExiting(false);
    
    // Unlock scroll after entrance animation completes
    const timer = setTimeout(() => {
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    }, 2000);

    const handleExit = (e: any) => {
      const href = e.detail.href;
      // Set the next chapter name for the transition screen
      if (href === '/men') setNextChapterName('MEN');
      else if (href === '/women') setNextChapterName('WOMEN');
      else if (href === '/') setNextChapterName('HOME');
      else {
        const segments = href.split('/').filter(Boolean);
        const lastSegment = segments[segments.length - 1];
        setNextChapterName(lastSegment.replace(/-/g, ' ').toUpperCase());
      }
      
      setIsExiting(true);
    };

    window.addEventListener('triggerExit', handleExit);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('triggerExit', handleExit);
    };
  }, [pathname]);

  return (
    <>
      {/* 
        The Transition Screen overlay 
        This is pure black and covers the screen on exit.
      */}
      {isExiting && (
        <motion.div
          key="exit-overlay"
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.h1
            className="text-[12vw] md:text-[8vw] font-heading font-black text-white uppercase tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            {nextChapterName}
          </motion.h1>
        </motion.div>
      )}

      {/* 
        The Entrance Transition Screen overlay 
        This covers the screen when the new page mounts, then slides away.
      */}
      {!isExiting && (
        <motion.div
          key="enter-overlay"
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
          initial={{ clipPath: 'inset(0% 0 0 0)' }}
          animate={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
        >
          <motion.h1
            className="text-[12vw] md:text-[8vw] font-heading font-black text-white uppercase tracking-tighter"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: 'easeIn' }}
          >
            {chapterName}
          </motion.h1>
        </motion.div>
      )}

      {/* Page Content */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 100, scale: 0.98 }}
        animate={isExiting ? { opacity: 0, y: -50, scale: 0.95 } : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: isExiting ? 0 : 0.8 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </>
  );
}
