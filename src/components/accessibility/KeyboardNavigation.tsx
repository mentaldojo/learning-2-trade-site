'use client';

import { useEffect } from 'react';
import { handleKeyboardNavigation, createFocusTrap } from '@/lib/accessibility';

export default function KeyboardNavigation() {
  useEffect(() => {
    // Add keyboard navigation event listener
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.id = 'skip-to-main';
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FFD700] focus:text-black';
    skipLink.textContent = 'Skip to main content';
    
    // Add click handler to focus main content
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
      }
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
      const existingSkipLink = document.getElementById('skip-to-main');
      if (existingSkipLink) {
        existingSkipLink.remove();
      }
    };
  }, []);

  return null;
} 