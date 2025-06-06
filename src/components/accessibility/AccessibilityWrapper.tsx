'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { initializeAccessibility } from '@/lib/accessibility';

// Dynamically import non-critical components
const HighContrastToggle = dynamic(
  () => import('./HighContrastToggle'),
  { ssr: false }
);

export default function AccessibilityWrapper() {
  useEffect(() => {
    // Initialize core accessibility features
    initializeAccessibility();
  }, []);

  return (
    <>
      <div 
        id="announcements"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
      <a
        id="skip-to-main"
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FFD700] focus:text-black"
      >
        Skip to main content
      </a>
      <HighContrastToggle />
    </>
  );
} 