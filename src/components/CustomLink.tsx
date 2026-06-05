'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const CustomLink = ({ href, children, className }: CustomLinkProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a hash link, use Lenis scrollTo or native scrollIntoView
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(target);
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    e.preventDefault();

    // Prevent multiple clicks from queueing multiple route pushes
    if ((window as any).isTransitioning) return;
    (window as any).isTransitioning = true;

    // Lock lenis scrolling immediately
    if ((window as any).lenis) {
      (window as any).lenis.stop();
    }

    // Trigger exit animation
    const event = new CustomEvent('triggerExit', { detail: { href } });
    window.dispatchEvent(event);

    // Wait 1200ms before pushing the route
    setTimeout(() => {
      router.push(href);
      // Unlock after a brief delay to ensure the new page mounts
      setTimeout(() => {
        (window as any).isTransitioning = false;
      }, 500);
    }, 1200);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};
