import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pat', label: 'P.A.T. – Indicator' },
  { href: '/mentoring', label: 'Mentoring' },
  { href: '/training', label: 'Training Portal' },
  { href: '/blog', label: 'Blog' },
];

export default function TopNav() {
  return (
    <nav className="w-full bg-black/95 backdrop-blur border-b border-[#FFD700] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center group" aria-label="Home">
          <span className="block w-8 h-8">
            <svg width="32" height="24" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
              <path d="M4 20L10 8L20 20L30 8L36 20" stroke="#FFD700" strokeWidth="2.5" strokeLinejoin="round"/>
              <circle cx="10" cy="8" r="2.5" fill="#FFD700"/>
              <circle cx="30" cy="8" r="2.5" fill="#FFD700"/>
              <circle cx="20" cy="20" r="2.5" fill="#FFD700"/>
              <path d="M8 24H32" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
        </Link>
        <div className="hidden md:flex gap-x-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#faf9f6] hover:text-[#FFD700] font-medium transition-colors duration-200 text-base px-2 py-1 rounded"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu placeholder (expandable in future) */}
        <div className="md:hidden">
          {/* Add a hamburger menu here if needed */}
        </div>
      </div>
    </nav>
  );
} 