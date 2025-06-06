import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trader Mentoring | Learning2Trade',
  description: 'Experience personal trading mentorship and guidance, fully integrated with the PAT Indicator and a supportive community.',
  openGraph: {
    title: 'Trader Mentoring | Learning2Trade',
    description: 'Experience personal trading mentorship and guidance, fully integrated with the PAT Indicator and a supportive community.',
    url: 'https://learning2trade.com/mentoring',
    images: [
      {
        url: 'https://learning2trade.com/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Learning2Trade Mentoring'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trader Mentoring | Learning2Trade',
    description: 'Experience personal trading mentorship and guidance, fully integrated with the PAT Indicator and a supportive community.',
    images: ['https://learning2trade.com/images/og-default.jpg']
  }
};

export default function TraderMentoringPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero / Attention */}
      <section className="bg-black text-white py-16 sm:py-24 px-4 text-center relative overflow-hidden">
        {/* Geometric backdrop */}
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gold-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff9d1" />
                <stop offset="30%" stopColor="#FFD700" />
                <stop offset="70%" stopColor="#bfa14a" />
                <stop offset="100%" stopColor="#fff9d1" />
              </linearGradient>
            </defs>
            {/* X pattern */}
            <line x1="20" y1="20" x2="80" y2="80" stroke="url(#gold-gradient)" strokeWidth="2" opacity="0.15" />
            <line x1="80" y1="20" x2="20" y2="80" stroke="url(#gold-gradient)" strokeWidth="2" opacity="0.15" />
            {/* Horizontal accent lines */}
            <line x1="0" y1="50" x2="100" y2="50" stroke="url(#gold-gradient)" strokeWidth="2" opacity="0.10" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="url(#gold-gradient)" strokeWidth="2" opacity="0.10" />
          </svg>
        </div>
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-[#FFD700] via-[#bfa14a] to-[#b8860b] bg-clip-text text-transparent drop-shadow">
          Trader Mentoring
        </h1>
        <p className="text-lg sm:text-xl text-[#FFD700] mb-8 max-w-2xl mx-auto font-light">
          Unlock your trading potential with direct, personal one-on-one guidance from a professional trader. My mentoring is tailored to you and fully integrated with the P.A.T. Indicator.
        </p>
        <Link href="#action" className="bg-[#FFD700] text-black font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5)] transition-all duration-200 uppercase">Start Your Journey</Link>
      </section>

      {/* Interest */}
      <section className="bg-white text-black py-16 sm:py-24 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-b from-[#FFD700] via-[#bfa14a] to-[#b8860b] bg-clip-text text-transparent drop-shadow">Why Choose Trader Mentoring?</h2>
        <div className="max-w-2xl mx-auto text-left text-lg sm:text-xl text-gray-700 font-light space-y-6">
          <p>
            My Trader Mentoring program is for those who want more than just information—you want transformation. I focus on what actually moves the needle for real traders: direct guidance, practical tools, and personal accountability.
          </p>
          <ul className="space-y-4 mt-6">
            <li className="flex items-start"><span className="text-[#FFD700] text-2xl mr-3 mt-1">✔</span> Personal, one-on-one attention from me as your mentor</li>
            <li className="flex items-start"><span className="text-[#FFD700] text-2xl mr-3 mt-1">✔</span> Learn to use the P.A.T. Indicator in real market conditions</li>
            <li className="flex items-start"><span className="text-[#FFD700] text-2xl mr-3 mt-1">✔</span> Build confidence, discipline, and consistency with my direct support</li>
            <li className="flex items-start"><span className="text-[#FFD700] text-2xl mr-3 mt-1">✔</span> Results-driven approach—no hype, just real progress</li>
          </ul>
        </div>
      </section>

      {/* Desire: Transformation & Testimonials */}
      <section className="bg-black text-white py-16 sm:py-24 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-b from-[#FFD700] via-[#bfa14a] to-[#b8860b] bg-clip-text text-transparent drop-shadow">What Can You Achieve?</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg sm:text-xl text-[#FFD700] font-light mb-6">Imagine trading with confidence, clarity, and a proven edge—knowing you have a mentor with decades of experience guiding you every step of the way.</p>
          <p className="text-lg sm:text-xl text-gray-200 font-light">My mentoring program has helped traders go from confused and inconsistent to focused, disciplined, and consistently profitable.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative bg-[#fcfbf7] text-black rounded-3xl shadow-2xl p-8 text-center border-l-4" style={{ borderLeftColor: '#FFD700' }}>
            <span className="absolute left-8 top-6 text-4xl" style={{ color: '#FFD700' }}>&ldquo;</span>
            <p className="italic text-lg font-light leading-relaxed mb-8">I never thought I could trade with this level of confidence. The personal mentoring and PAT Indicator changed everything for me.</p>
            <div className="font-bold text-gray-900">— Consistent Trader</div>
          </div>
          <div className="relative bg-[#fcfbf7] text-black rounded-3xl shadow-2xl p-8 text-center border-l-4" style={{ borderLeftColor: '#FFD700' }}>
            <span className="absolute left-8 top-6 text-4xl" style={{ color: '#FFD700' }}>&ldquo;</span>
            <p className="italic text-lg font-light leading-relaxed mb-8">The mentoring program gave me the structure and support I needed. I finally feel like I belong in the markets.</p>
            <div className="font-bold text-gray-900">— Empowered Member</div>
          </div>
        </div>
      </section>

      {/* Action: CTA */}
      <section id="action" className="bg-[#fcfbf7] py-16 sm:py-24 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-b from-[#FFD700] via-[#bfa14a] to-[#b8860b] bg-clip-text text-transparent drop-shadow">Ready to Experience Real Mentoring?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Get direct access to my expert guidance and the P.A.T. Indicator. Your journey to trading mastery starts here—one-on-one, with me by your side.</p>
        <Link href="https://martincole.thrivecart.com/pat-indicator-for-trading-view/" className="bg-[#FFD700] text-black font-bold px-10 py-5 rounded-full text-xl shadow-lg hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5)] transition-all duration-200 uppercase">Start Your Mentoring Journey</Link>
      </section>
    </main>
  );
} 