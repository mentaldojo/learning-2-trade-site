// Accessibility configuration
export const accessibilityConfig = {
  // Keyboard navigation
  keyboardNavigation: {
    skipToMainContent: true,
    focusVisible: true,
    focusTrap: true,
  },
  
  // Screen reader
  screenReader: {
    ariaLabels: {
      navigation: 'Main navigation',
      mainContent: 'Main content',
      footer: 'Footer',
    },
    liveRegions: {
      announcements: 'announcements',
      status: 'status',
    },
  },
  
  // Color contrast
  colorContrast: {
    minimumRatio: 4.5, // WCAG AA standard
    enhancedRatio: 7, // WCAG AAA standard
  },
  
  // Responsive design
  responsiveDesign: {
    breakpoints: {
      mobile: 640,
      tablet: 768,
      desktop: 1024,
      large: 1280,
    },
  },
};

// Keyboard navigation handler
export const handleKeyboardNavigation = (event: KeyboardEvent) => {
  // Skip to main content
  if (event.key === 'Tab' && event.shiftKey) {
    const skipLink = document.getElementById('skip-to-main');
    if (skipLink) {
      skipLink.focus();
    }
  }
};

// Focus trap for modals and dropdowns
export const createFocusTrap = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusableElement = focusableElements[0] as HTMLElement;
  const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  return (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          event.preventDefault();
        }
      }
    }
  };
};

// ARIA live region announcements
export const announceToScreenReader = (message: string, politeness: 'polite' | 'assertive' = 'polite') => {
  const liveRegion = document.getElementById('announcements');
  if (liveRegion) {
    // Clear previous content
    liveRegion.textContent = '';
    // Set new content
    liveRegion.textContent = message;
  }
};

// High contrast mode
export const toggleHighContrast = () => {
  document.documentElement.classList.toggle('high-contrast');
  const isHighContrast = document.documentElement.classList.contains('high-contrast');
  localStorage.setItem('highContrast', isHighContrast.toString());
};

// Initialize accessibility features
export const initializeAccessibility = () => {
  // Add keyboard navigation event listener
  document.addEventListener('keydown', handleKeyboardNavigation);

  // Restore high contrast preference
  const highContrast = localStorage.getItem('highContrast');
  if (highContrast === 'true') {
    document.documentElement.classList.add('high-contrast');
  }

  // Add skip to main content link
  const skipLink = document.createElement('a');
  skipLink.id = 'skip-to-main';
  skipLink.href = '#main-content';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FFD700] focus:text-black';
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, document.body.firstChild);
}; 