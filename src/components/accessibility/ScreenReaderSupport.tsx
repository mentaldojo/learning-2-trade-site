'use client';

import { useEffect } from 'react';
import { announceToScreenReader } from '@/lib/accessibility';

export default function ScreenReaderSupport() {
  useEffect(() => {
    // Add ARIA live regions for dynamic content
    const announcementsRegion = document.createElement('div');
    announcementsRegion.setAttribute('aria-live', 'polite');
    announcementsRegion.setAttribute('aria-atomic', 'true');
    announcementsRegion.setAttribute('id', 'announcements');
    announcementsRegion.className = 'sr-only';
    document.body.appendChild(announcementsRegion);

    const statusRegion = document.createElement('div');
    statusRegion.setAttribute('aria-live', 'status');
    statusRegion.setAttribute('aria-atomic', 'true');
    statusRegion.setAttribute('id', 'status');
    statusRegion.className = 'sr-only';
    document.body.appendChild(statusRegion);

    // Cleanup
    return () => {
      announcementsRegion.remove();
      statusRegion.remove();
    };
  }, []);

  return null;
} 