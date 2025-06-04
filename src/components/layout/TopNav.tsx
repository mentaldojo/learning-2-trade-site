import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pat-indicator', label: 'P.A.T. – Indicator' },
  { href: '/mentoring', label: 'Trader Mentoring' },
  { href: 'https://martincole.thrivecart.com/l/', label: 'Training Portal' },
  { href: 'https://blog.learningtotrade.com', label: 'Trading Videos' },
  { href: '/contact', label: 'Contact Me' },
];

export default function TopNav() {
  return (
    <nav className="w-full bg-black/95 backdrop-blur border-b border-[#FFD700]/20 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center group" aria-label="Home">
          <span className="block w-8 h-8 transform transition-transform duration-300 group-hover:scale-110">
            <svg width="32" height="24" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
              <path d="M4 20L10 8L20 20L30 8L36 20" stroke="#FFD700" strokeWidth="2.5" strokeLinejoin="round"/>
              <circle cx="10" cy="8" r="2.5" fill="#FFD700"/>
              <circle cx="30" cy="8" r="2.5" fill="#FFD700"/>
              <circle cx="20" cy="20" r="2.5" fill="#FFD700"/>
              <path d="M8 24H32" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
        </Link>
        <div className="hidden md:flex gap-x-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[#faf9f6]/80 hover:text-[#FFD700] font-light transition-all duration-300 text-xs tracking-wide uppercase px-2 py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#faf9f6]">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
} 