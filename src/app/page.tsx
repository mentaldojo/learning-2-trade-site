import React from 'react';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ["400", "700", "800"], display: 'swap' });

// Dynamically import components with loading fallbacks
const FeatureCards = dynamic(() => import('../components/FeatureCards'), {
  loading: () => <div className="h-64 flex items-center justify-center">Loading features...</div>,
  ssr: false
});

const Testimonials = dynamic(() => import('../components/Testimonials'), {
  loading: () => <div className="h-64 flex items-center justify-center">Loading testimonials...</div>,
  ssr: false
});

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
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
          Master Professional Trading with<br className="hidden sm:block" />The Market Makers Method
        </h1>
        <p className="relative z-10 text-sm sm:text-base md:text-lg text-white mb-2 sm:mb-3 font-light px-4">
          Professional Trading Success: PAT Indicator + Personal Mentorship<br className="hidden sm:block" />
          Learn How Institutional Traders Move Markets
        </p>
        <p className="relative z-10 text-sm sm:text-base font-bold mb-6 sm:mb-8 text-[#FFD700] px-4">
          From Martin Cole – 35+ Years Professional Trading Experience
        </p>
        <button className="inline-block bg-[#FFD700] text-black font-bold py-3 px-8 text-lg sm:text-xl tracking-wider transition-all duration-200 uppercase rounded-full hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5)] focus:outline-none" style={{ transition: 'all 0.2s cubic-bezier(.4,0,.2,1)' }}>
          <a href="https://martincole.thrivecart.com/pat-indicator-for-trading-view/" className="block w-full h-full">START YOUR PROFESSIONAL TRADING JOURNEY</a>
        </button>
      </section>

      {/* Problem Statement */}
      <section className="bg-white text-black py-16 sm:py-24 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 px-4 bg-gradient-to-b from-[#FFD700] via-[#bfa14a] to-[#b8860b] bg-clip-text text-transparent drop-shadow">
          Struggling to Find Consistent Trading Success?
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-start">
            <span className="text-2xl mr-4 mt-1 font-bold" style={{ color: '#bfa14a', textShadow: '0 2px 8px rgba(191,161,74,0.3)' }}>1.</span>
            <p className="text-xl sm:text-2xl font-light text-gray-700 text-left leading-relaxed">
              Most retail traders fail because they&apos;re using outdated indicators that don&apos;t reflect how and why markets actually move.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-2xl mr-4 mt-1 font-bold" style={{ color: '#bfa14a', textShadow: '0 2px 8px rgba(191,161,74,0.3)' }}>2.</span>
            <p className="text-xl sm:text-2xl font-light text-gray-700 text-left leading-relaxed">
              Most retail traders are following strategies created by academics who&apos;ve never traded professionally, or keyboard &apos;gurus&apos; who have never traded in the real world.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-2xl mr-4 mt-1 font-bold" style={{ color: '#bfa14a', textShadow: '0 2px 8px rgba(191,161,74,0.3)' }}>3.</span>
            <p className="text-xl sm:text-2xl font-light text-gray-700 text-left leading-relaxed">
              That&apos;s why 97% of traders lose money – they&apos;re missing the one single method that&apos;s hidden in plain sight!
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 sm:py-24 px-4">
        <FeatureCards />
      </section>

      {/* About/Origin Story */}
      <section className="bg-white text-black py-12 sm:py-24 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 px-4 bg-gradient-to-b from-[#FFD700] via-[#bfa14a] to-[#b8860b] bg-clip-text text-transparent drop-shadow">
          The Market Makers Method - My Original Creation
        </h2>
        <div className="max-w-5xl mx-auto mb-8 sm:mb-14 mt-6 sm:mt-10">
          <p className="text-lg sm:text-xl font-light italic text-gray-500 mb-4 sm:mb-6 px-4">
            Early on in my 35+ years as a professional trader, I discovered something that changed everything...
          </p>
          <p className="text-lg sm:text-xl font-light text-gray-700 leading-relaxed px-4">
            Financial markets are not random.
            <br className="hidden sm:block" />
            They move with precision and follow patterns that institutional traders purposefully create. These created market movements are used to accumulate and distribute their massive positions.
          </p>
        </div>
        <div className="max-w-5xl mx-auto bg-black text-white rounded-2xl sm:rounded-3xl shadow-lg p-8 sm:p-16 text-center mb-8 sm:mb-16 border-4 flex flex-col justify-center items-center" style={{ borderColor: '#FFD700' }}>
          <h3 className="font-extrabold text-2xl sm:text-3xl mb-8 sm:mb-12 px-4" style={{
            fontFamily: 'Georgia, Times New Roman, serif',
            background: 'linear-gradient(to bottom, #fffbe6 0%, #ffe066 25%, #FFD700 50%, #bfa14a 75%, #fffbe6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 1px 1px rgba(191,161,74,0.08)'
          }}>
            I Am The Original Creator of the Market Makers Method
          </h3>
          <div className="space-y-6 sm:space-y-10 w-full max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl font-normal leading-relaxed text-gray-200 px-4">
              What you see being taught by others today started with my research and real-world trading experience.
            </p>
            <p className="text-lg sm:text-xl font-normal leading-relaxed text-gray-200 px-4">
              This isn&apos;t theory - it&apos;s a battle-tested trading method that has created successful traders.
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl font-light text-gray-700 px-4">
            The PAT Indicator translates this method into clear, actionable signals on your TradingView charts.
          </p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="bg-black text-white py-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center px-4 bg-gradient-to-b from-[#FFD700] via-[#bfa14a] to-[#b8860b] bg-clip-text text-transparent drop-shadow">
          What You Get With PAT Membership
        </h2>
        <ul className="max-w-3xl mx-auto text-left space-y-4 sm:space-y-6 text-lg sm:text-xl font-light px-4">
          <li className="flex items-start">
            <span className="text-2xl mr-4 mt-1" style={{ color: '#FFD700', textShadow: '0 2px 8px rgba(255,215,0,0.3)' }}>✔</span>
            PAT (Professional Activity Tracker) Indicator for TradingView
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4 mt-1" style={{ color: '#FFD700', textShadow: '0 2px 8px rgba(255,215,0,0.3)' }}>✔</span>
            Personal, one-on-one mentorship direct from Martin Cole
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4 mt-1" style={{ color: '#FFD700', textShadow: '0 2px 8px rgba(255,215,0,0.3)' }}>✔</span>
            Access to all live and recorded training sessions
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4 mt-1" style={{ color: '#FFD700', textShadow: '0 2px 8px rgba(255,215,0,0.3)' }}>✔</span>
            No long-term contracts – cancel anytime
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4 mt-1" style={{ color: '#FFD700', textShadow: '0 2px 8px rgba(255,215,0,0.3)' }}>✔</span>
            Regular updates and improvements to the indicator
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4 mt-1" style={{ color: '#FFD700', textShadow: '0 2px 8px rgba(255,215,0,0.3)' }}>✔</span>
            Includes insights you won&apos;t find anywhere else
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing/Offer */}
      <section className="py-12 px-4" style={{ background: '#fcfbf7', color: '#111' }}>
        <div className="flex items-center justify-center mb-8 sm:mb-10">
          <div className="flex-grow h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" style={{ maxWidth: '180px' }} />
          <span className="mx-4 flex items-center justify-center">
            <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 20L10 8L20 20L30 8L36 20" stroke="#FFD700" strokeWidth="2.5" strokeLinejoin="round"/>
              <circle cx="10" cy="8" r="2.5" fill="#FFD700"/>
              <circle cx="30" cy="8" r="2.5" fill="#FFD700"/>
              <circle cx="20" cy="20" r="2.5" fill="#FFD700"/>
              <path d="M8 24H32" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <div className="flex-grow h-0.5 bg-gradient-to-l from-transparent via-[#FFD700] to-transparent" style={{ maxWidth: '180px' }} />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 px-4">
          Your Investment in Professional Trading Success
        </h2>
        <div className="max-w-xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-12 text-center border-4" style={{ borderColor: '#FFD700', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}>
          <div className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-2">$97</div>
          <div className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 font-light">per month</div>
          <div className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">PAT Indicator + Unlimited Mentorship</div>
          <div className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 font-light">
            Most professional trading mentorship costs $5,000+ per month. You get the same level of personal attention for a fraction of the cost.
          </div>
          <div className="relative bg-[#fcfbf7] border-2 border-[#FFD700] rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-6 mb-8 sm:mb-10 flex flex-col items-center" style={{ minHeight: '100px' }}>
            <div className="absolute -top-5 sm:-top-7 left-1/2 -translate-x-1/2 bg-[#fcfbf7] rounded-full p-2 border-2 border-[#FFD700] shadow" style={{ boxShadow: '0 2px 8px rgba(255,215,0,0.10)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-8 sm:h-8">
                <path d="M12 2L20 6V11C20 16.25 16.25 20.25 12 22C7.75 20.25 4 16.25 4 11V6L12 2Z" fill="#FFD700" stroke="#bfa14a" strokeWidth="1.5"/>
                <path d="M12 8V13" stroke="#bfa14a" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="#bfa14a"/>
              </svg>
            </div>
            <div className="mt-4 sm:mt-6">
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">No-Risk Guarantee</h3>
              <div className="text-sm sm:text-base text-gray-700 font-light">Try PAT risk-free. If you&apos;re not completely satisfied, cancel anytime. No long-term commitment required.</div>
            </div>
          </div>
          <button className="inline-block bg-[#FFD700] text-black font-bold py-3 px-8 text-lg sm:text-xl tracking-wider transition-all duration-200 uppercase rounded-full hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5)] focus:outline-none" style={{ transition: 'all 0.2s cubic-bezier(.4,0,.2,1)' }}>
            <a href="https://martincole.thrivecart.com/pat-indicator-for-trading-view/" className="block w-full h-full">GET PAT INDICATOR + MENTORSHIP NOW</a>
          </button>
        </div>
      </section>

      {/* Urgency/Scarcity */}
      <section className="bg-black text-white py-8 sm:py-10 px-4 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 font-sans px-4">
          Why Wait? Your Trading Account Is At Risk Every Day
        </h3>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 font-light px-4">
          Every day you trade without the proper method or indicator is another day your capital is unnecessarily at risk.<br className="hidden sm:block" />
          The market doesn&apos;t wait for you to figure it out. Get the edge you need today.
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-white text-black py-8 sm:py-12 px-4 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 font-sans px-4">
          Ready to Trade Like a Professional?
        </h3>
        <p className="mb-6 font-light px-4">
          Get access to the original Market Makers Method and personal, one-on-one mentorship from its creator.
        </p>
        <button className="inline-block bg-[#FFD700] text-black font-bold py-3 px-8 text-lg sm:text-xl tracking-wider transition-all duration-200 uppercase rounded-full hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5)] focus:outline-none" style={{ transition: 'all 0.2s cubic-bezier(.4,0,.2,1)' }}>
          <a href="https://martincole.thrivecart.com/pat-indicator-for-trading-view/" className="block w-full h-full">Experience the power of<br className="hidden sm:block" />professional trader mentorship</a>
        </button>
      </section>
    </main>
  );
} 