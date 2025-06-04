import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import KeyboardNavigation from '../KeyboardNavigation';
import ScreenReaderSupport from '../ScreenReaderSupport';
import HighContrastToggle from '../HighContrastToggle';

// --- Proper localStorage mock setup ---
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn(),
  key: jest.fn(),
  length: 0,
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});
// --- End localStorage mock setup ---

describe('Accessibility Components', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    // Clear localStorage mocks
    window.localStorage.getItem.mockClear();
    window.localStorage.setItem.mockClear();
    window.localStorage.clear.mockClear();
    window.localStorage.removeItem.mockClear();
    window.localStorage.key.mockClear();
    window.localStorage.clear();
    // Reset document body
    document.body.innerHTML = '';
  });

  describe('KeyboardNavigation', () => {
    it('renders skip to main content link', () => {
      render(<KeyboardNavigation />);
      const skipLink = screen.getByText('Skip to main content');
      expect(skipLink).toBeInTheDocument();
      expect(skipLink).toHaveAttribute('href', '#main-content');
    });

    it('focuses main content when skip link is clicked', () => {
      render(<KeyboardNavigation />);
      const skipLink = screen.getByText('Skip to main content');
      const mainContent = document.createElement('main');
      mainContent.id = 'main-content';
      mainContent.tabIndex = -1; // Make it programmatically focusable for JSDOM
      document.body.appendChild(mainContent);

      fireEvent.click(skipLink);
      expect(document.activeElement).toBe(mainContent);

      document.body.removeChild(mainContent);
    });
  });

  describe('ScreenReaderSupport', () => {
    it('adds ARIA live regions to the document', () => {
      render(<ScreenReaderSupport />);
      const announcementsRegion = document.querySelector('[aria-live="polite"]');
      const statusRegion = document.querySelector('[aria-live="status"]');

      expect(announcementsRegion).toBeInTheDocument();
      expect(statusRegion).toBeInTheDocument();
      expect(announcementsRegion).toHaveClass('sr-only');
      expect(statusRegion).toHaveClass('sr-only');
    });
  });

  describe('HighContrastToggle', () => {
    it('renders toggle button with correct initial state', () => {
      render(<HighContrastToggle />);
      const toggleButton = screen.getByRole('button', { name: /toggle high contrast/i });
      expect(toggleButton).toBeInTheDocument();
      expect(toggleButton).toHaveAttribute('aria-pressed', 'false');
    });

    it('toggles high contrast mode when clicked', () => {
      render(<HighContrastToggle />);
      const toggleButton = screen.getByRole('button', { name: /toggle high contrast/i });

      fireEvent.click(toggleButton);
      expect(toggleButton).toHaveAttribute('aria-pressed', 'true');
      expect(document.documentElement).toHaveClass('high-contrast');
      expect(window.localStorage.setItem).toHaveBeenCalledWith('highContrast', 'true');

      fireEvent.click(toggleButton);
      expect(toggleButton).toHaveAttribute('aria-pressed', 'false');
      expect(document.documentElement).not.toHaveClass('high-contrast');
      expect(window.localStorage.setItem).toHaveBeenCalledWith('highContrast', 'false');
    });

    it('restores high contrast preference from localStorage', () => {
      window.localStorage.getItem.mockReturnValue('true');
      render(<HighContrastToggle />);
      const toggleButton = screen.getByRole('button', { name: /toggle high contrast/i });

      expect(toggleButton).toHaveAttribute('aria-pressed', 'true');
      expect(document.documentElement).toHaveClass('high-contrast');
    });
  });
}); 