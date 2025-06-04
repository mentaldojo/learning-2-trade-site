'use client';

import { useState, useEffect } from 'react';
import { toggleHighContrast } from '@/lib/accessibility';

export default function HighContrastToggle() {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    // Check for saved preference
    const savedPreference = localStorage.getItem('highContrast');
    if (savedPreference === 'true') {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  const handleToggle = () => {
    toggleHighContrast();
    setIsHighContrast(!isHighContrast);
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-4 right-4 bg-[#FFD700] text-black px-4 py-2 rounded-full shadow-lg hover:bg-[#bfa14a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2"
      aria-pressed={isHighContrast}
    >
      <span className="sr-only">Toggle high contrast mode</span>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
} 