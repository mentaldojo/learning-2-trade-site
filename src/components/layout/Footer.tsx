import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-4 sm:py-6 text-xs border-t border-gray-800 font-light font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-left mb-4 sm:mb-0">
          <div>© 2024 Martin Cole – Professional Trading Education</div>
          <div className="mt-1">Not a licensed financial trading organization.</div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/disclaimer" className="text-[#FFD700] hover:text-[#bfa14a] transition-colors duration-200">Disclaimer Policy</Link>
          <Link href="/privacy-policy" className="text-[#FFD700] hover:text-[#bfa14a] transition-colors duration-200">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="text-[#FFD700] hover:text-[#bfa14a] transition-colors duration-200">Terms & Conditions</Link>
          <Link href="/cookie-policy" className="text-[#FFD700] hover:text-[#bfa14a] transition-colors duration-200">Cookie Policy</Link>
          <Link href="/gdpr-policy" className="text-[#FFD700] hover:text-[#bfa14a] transition-colors duration-200">GDPR Policy</Link>
          <Link href="/accessibility" className="text-[#FFD700] hover:text-[#bfa14a] transition-colors duration-200">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
} 