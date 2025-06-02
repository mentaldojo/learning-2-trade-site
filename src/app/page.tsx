import React from 'react';

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center bg-black py-24 px-4 text-center overflow-hidden">
        {/* Gold X backdrop */}
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gold-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#bfa14a" />
                <stop offset="100%" stopColor="#FFD700" />
              </linearGradient>
            </defs>
            <line x1="0" y1="0" x2="100" y2="100" stroke="url(#gold-gradient)" strokeWidth="8" opacity="0.12" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="url(#gold-gradient)" strokeWidth="8" opacity="0.08" />
          </svg>
        </div>
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-sans" style={{ fontFamily: 'Montserrat, sans-serif', background: 'linear-gradient(90deg, #FFD700 0%, #bfa14a 50%, #FFD700 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
          Master the Original Market Makers<br />Method
        </h1>
        <p className="relative z-10 text-base sm:text-lg text-white mb-3 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Get the PAT (Professional Activity Tracker) Indicator for TradingView<br />
          Plus Unlimited Personal Mentorship
        </p>
        <p className="relative z-10 text-base font-bold mb-8 font-sans text-[#FFD700]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          From Martin Cole – 35+ Years Professional Trading Experience
        </p>
        <button className="relative z-10 bg-[#FFD700] hover:bg-yellow-400 text-black font-bold px-8 py-4 shadow-lg text-lg transition-all duration-200 uppercase font-sans rounded-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          START YOUR PROFESSIONAL JOURNEY
        </button>
      </section>

      {/* Problem Statement */}
      <section className="bg-white text-black py-12 px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Tired of Trading Indicators That Don't Work?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-base sm:text-lg font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Most trading indicators are based on outdated theories that ignore how the market really moves.<br />
          They're designed by academics who've never risked their own money in the markets.<br />
          That's why 97% of traders lose money – they're using the wrong tools.
        </p>
      </section>

      {/* Feature Highlights */}
      <section className="bg-gray-50 py-12 px-4">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Finally – An Indicator Based on How Markets Actually Work
        </h3>
        <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 flex-1 text-center border-t-4" style={{ borderTopColor: '#FFD700', fontFamily: 'Montserrat, sans-serif' }}>
            <h4 className="font-bold text-lg mb-2 font-sans">Market Makers Method</h4>
            <p className="text-gray-700 text-sm font-sans">A unique approach to trading, derived exclusively from institutional-level research, not retail speculation theories.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex-1 text-center border-t-4" style={{ borderTopColor: '#FFD700', fontFamily: 'Montserrat, sans-serif' }}>
            <h4 className="font-bold text-lg mb-2 font-sans">PAT Indicator</h4>
            <p className="text-gray-700 text-sm font-sans">Professional Activity Tracker for TradingView – gives you the real edge, not just another lagging tool.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex-1 text-center border-t-4" style={{ borderTopColor: '#FFD700', fontFamily: 'Montserrat, sans-serif' }}>
            <h4 className="font-bold text-lg mb-2 font-sans">Personal Mentorship</h4>
            <p className="text-gray-700 text-sm font-sans">You get direct access to 28+ years of professional experience, not a support ticket system.</p>
          </div>
        </div>
      </section>

      {/* About/Origin Story */}
      <section className="bg-white text-black py-12 px-4 border-t border-gray-200">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          The Market Makers Method – My Original Creation
        </h3>
        <p className="max-w-2xl mx-auto text-center text-gray-700 mb-6 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          After 28+ years as a professional trader, I discovered something that changed everything...<br />
          The market doesn't move randomly. There's a repeatable, underlying process that institutional market makers use to accumulate and distribute the market positions.
        </p>
        <div className="max-w-xl mx-auto bg-black text-[#FFD700] rounded-lg shadow p-6 text-center mb-6 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <h4 className="font-bold mb-2 font-sans">I Am The Original Creator of the Market Makers Method</h4>
          <p className="text-sm font-sans">
            What you're being taught by other trading educators are my research and trading methods repackaged as their own theory – but the real method is entirely my hard-won proprietary work.
          </p>
        </div>
        <p className="max-w-2xl mx-auto text-center text-gray-700 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          The PAT Indicator teaches this method live, attached right on your TradingView charts.<br />
          But the indicator is just the beginning…
        </p>
      </section>

      {/* Membership Benefits */}
      <section className="bg-black text-white py-12 px-4">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          What You Get With PAT Membership
        </h3>
        <ul className="max-w-2xl mx-auto text-left space-y-3 text-base font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <li className="flex items-start"><span className="text-[#FFD700] mr-2 mt-1">✔</span>PAT (Professional Activity Tracker) Indicator for TradingView</li>
          <li className="flex items-start"><span className="text-[#FFD700] mr-2 mt-1">✔</span>Unlimited personal and group mentorship direct from Martin Cole</li>
          <li className="flex items-start"><span className="text-[#FFD700] mr-2 mt-1">✔</span>Access to all live and recorded training sessions</li>
          <li className="flex items-start"><span className="text-[#FFD700] mr-2 mt-1">✔</span>No long-term contracts – cancel anytime</li>
          <li className="flex items-start"><span className="text-[#FFD700] mr-2 mt-1">✔</span>Regular updates and improvements to the indicator</li>
          <li className="flex items-start"><span className="text-[#FFD700] mr-2 mt-1">✔</span>Includes insights you won't find anywhere else</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-white text-black py-12 px-4">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          What Professional Traders Are Saying
        </h3>
        <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-l-4 rounded-lg p-6 flex-1 shadow text-gray-800 font-sans" style={{ borderLeftColor: '#FFD700', fontFamily: 'Montserrat, sans-serif' }}>
            <p className="mb-2 italic font-sans">"Martin's Market Makers Method completely transformed my trading. The PAT indicator now actually helps me fully see how money is being... After years of struggling with other systems, this is the one that actually works consistently."</p>
            <p className="text-sm font-semibold font-sans">– Elite career portfolio manager</p>
          </div>
          <div className="bg-yellow-50 border-l-4 rounded-lg p-6 flex-1 shadow text-gray-800 font-sans" style={{ borderLeftColor: '#FFD700', fontFamily: 'Montserrat, sans-serif' }}>
            <p className="mb-2 italic font-sans">"I tried every indicator out there. PAT is different because Martin actually understands how institutions move money. Now I finally trade with confidence."</p>
            <p className="text-sm font-semibold font-sans">– Full-time Trader</p>
          </div>
        </div>
      </section>

      {/* Pricing/Offer */}
      <section className="bg-white text-black py-12 px-4">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Your Investment in Professional Trading Success
        </h3>
        <div className="max-w-md mx-auto bg-white border border-[#FFD700] rounded-xl shadow p-8 text-center font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <div className="text-4xl font-bold text-gray-900 mb-2 font-sans">$97</div>
          <div className="text-sm text-gray-700 mb-4 font-sans">per month</div>
          <div className="font-semibold mb-4 font-sans">PAT Indicator + Unlimited Mentorship</div>
          <p className="text-gray-700 mb-6 text-sm font-sans">Try PAT risk-free. If you're not completely satisfied, cancel anytime. Nothing long-term required.</p>
          <button className="bg-[#FFD700] hover:bg-yellow-400 text-black font-bold px-8 py-4 shadow-lg text-lg transition-all duration-200 uppercase font-sans rounded-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            GET PAT INDICATOR + MENTORSHIP NOW
          </button>
        </div>
      </section>

      {/* Urgency/Scarcity */}
      <section className="bg-black text-white py-10 px-4 text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Why Wait? Your Trading Account Is At Risk Every Day
        </h3>
        <p className="max-w-2xl mx-auto text-gray-300 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Every day you trade without the proper method or indicator is another day your capital is unnecessarily at risk.<br />
          The market doesn't wait for you to figure it out. Get the edge you need today.
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-white text-black py-12 px-4 text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Ready to Trade Like a Professional?
        </h3>
        <p className="mb-6 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Join the traders who have access to the original Market Makers Method and unlimited mentorship from its creator.
        </p>
        <button className="bg-[#FFD700] hover:bg-yellow-400 text-black font-bold px-8 py-4 shadow-lg text-lg transition-all duration-200 uppercase font-sans rounded-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          START YOUR PAT MEMBERSHIP TODAY
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-6 text-xs border-t border-gray-800 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div>© 2024 Martin Cole – Professional Trading Education</div>
        <div className="mt-1">Not a licensed financial trading organization.</div>
      </footer>
    </main>
  );
} 