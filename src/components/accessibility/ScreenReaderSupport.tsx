'use client';

import { useEffect } from 'react';
import { announceToScreenReader } from '@/lib/accessibility';

export default function ScreenReaderSupport() {
  return (
    <div 
      id="announcements"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    />
  );
} 