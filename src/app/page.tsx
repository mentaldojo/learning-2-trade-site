import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';
import FeatureCards from '../components/FeatureCards';

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center bg-black py-24 px-4 text-center overflow-hidden">
        {/* Gold X backdrop */}
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
            <line x1="0" y1="0" x2="100" y2="100" stroke="url(#gold-gradient)" strokeWidth="8" opacity="0.12" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="url(#gold-gradient)" strokeWidth="8" opacity="0.08" />
          </svg>
        </div>
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-sans"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            background: 'linear-gradient(to bottom, #fffbe6 0%, #ffe066 25%, #FFD700 50%, #bfa14a 75%, #fffbe6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 1px 1px rgba(191,161,74,0.08)'
          }}>
          Master the Original Market Makers<br />Method
        </h1>
        <p className="relative z-10 text-base sm:text-lg text-white mb-3 font-light font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Get the PAT (Professional Activity Tracker) Indicator for TradingView<br />
          Plus Unlimited Personal Mentorship
        </p>
        <p className="relative z-10 text-base font-bold mb-8 font-light font-sans text-[#FFD700]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          From Martin Cole – 35+ Years Professional Trading Experience
        </p>
        <button className="relative z-10 bg-[#FFD700] text-black font-bold px-8 py-4 shadow-lg text-lg transition-all duration-200 uppercase font-sans rounded-full hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5)] focus:outline-none" style={{ fontFamily: 'Montserrat, sans-serif', transition: 'all 0.2s cubic-bezier(.4,0,.2,1)' }}>
          START YOUR PROFESSIONAL JOURNEY
        </button>
      </section>

      {/* Problem Statement */}
      <section className="bg-white text-black py-16 px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-900 font-serif" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
          Tired of Trading Indicators That Don't Work?
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-6 font-light text-gray-700 font-serif" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            Most trading indicators are based on outdated theories that ignore how the market really moves.
          </p>
          <p className="text-xl mb-6 font-light text-gray-700 font-serif" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            They're designed by academics who've never risked their own money in the markets.
          </p>
          <p className="text-xl font-light text-gray-700 font-serif" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            That's why 97% of traders lose money – they're using the wrong tools.
          </p>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-[#faf9f6] py-20 px-4 text-center">
        <h3 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-900 font-serif" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
          Finally - An Indicator Based on How Markets Actually Work
        </h3>
        <FeatureCards />
      </section>

      {/* About/Origin Story */}
      <section className="bg-white text-black py-24 px-4 text-center">
        <h3 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-900 font-serif" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
          The Market Makers Method - My Original Creation
        </h3>
        <div className="max-w-5xl mx-auto mb-14 mt-10">
          <p className="text-xl font-light font-serif italic text-gray-500 mb-6" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            Early on in my 35+ years as a professional trader, I discovered something that changed everything...
          </p>
          <p className="text-xl font-light font-serif text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            Financial markets are not random.
            <br />
            They move with precision and follow patterns that institutional traders purposefully create. These created market movements are used to accumulate and distribute their massive positions.
          </p>
        </div>
        <div className="max-w-5xl mx-auto bg-black text-white rounded-3xl shadow-lg p-16 text-center mb-16 border-4 flex flex-col justify-center items-center" style={{ borderColor: '#FFD700' }}>
          <h4 className="font-extrabold text-3xl mb-8" style={{ color: '#FFD700', fontFamily: 'Georgia, Times New Roman, serif' }}>
            I Am The Original Creator of the Market Makers Method
          </h4>
          <div className="space-y-8 w-full max-w-3xl mx-auto">
            <p className="text-2xl font-light font-serif leading-relaxed" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
              What you see being taught by others today started with my research and real-world trading experience.
            </p>
            <p className="text-2xl font-light font-serif leading-relaxed" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
              This isn't theory - it's battle-tested trading method that's made wealthy traders.
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl font-light font-serif text-gray-700" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            The PAT Indicator translates this method into clear, actionable signals on your TradingView charts.
          </p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="bg-black text-white py-12 px-4">
        <h3 className="text-4xl sm:text-5xl font-bold mb-12 font-serif text-center" style={{
          fontFamily: 'Georgia, Times New Roman, serif',
          background: 'linear-gradient(to bottom, #fffbe6 0%, #ffe066 25%, #FFD700 50%, #bfa14a 75%, #fffbe6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 1px 1px rgba(191,161,74,0.08)'
        }}>
          What You Get With PAT Membership
        </h3>
        <ul className="max-w-3xl mx-auto text-left space-y-6 text-xl font-light font-serif" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
          <li className="flex items-start">
            <span className="text-2xl mr-4 mt-1" style={{ color: '#FFD700', textShadow: '0 2px 8px rgba(255,215,0,0.3)' }}>✔</span>
            PAT (Professional Activity Tracker) Indicator for TradingView
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4 mt-1" style={{ color: '#FFD700', textShadow: '0 2px 8px rgba(255,215,0,0.3)' }}>✔</span>
            Unlimited personal and group mentorship direct from Martin Cole
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
            Includes insights you won't find anywhere else
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing/Offer */}
      <section className="bg-white text-black py-12 px-4">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Your Investment in Professional Trading Success
        </h3>
        <div className="max-w-md mx-auto bg-white border border-[#FFD700] rounded-xl shadow p-8 text-center font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <div className="text-4xl font-bold text-gray-900 mb-2 font-sans">$97</div>
          <div className="text-sm text-gray-700 mb-4 font-light font-sans">per month</div>
          <div className="font-semibold mb-4 font-sans">PAT Indicator + Unlimited Mentorship</div>
          <p className="text-gray-700 mb-6 text-sm font-light font-sans">Try PAT risk-free. If you're not completely satisfied, cancel anytime. Nothing long-term required.</p>
          <button className="bg-[#FFD700] text-black font-bold px-8 py-4 shadow-lg text-lg transition-all duration-200 uppercase font-sans rounded-full hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5)] focus:outline-none" style={{ fontFamily: 'Montserrat, sans-serif', transition: 'all 0.2s cubic-bezier(.4,0,.2,1)' }}>
            GET PAT INDICATOR + MENTORSHIP NOW
          </button>
        </div>
      </section>

      {/* Urgency/Scarcity */}
      <section className="bg-black text-white py-10 px-4 text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Why Wait? Your Trading Account Is At Risk Every Day
        </h3>
        <p className="max-w-2xl mx-auto text-gray-300 font-light font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Every day you trade without the proper method or indicator is another day your capital is unnecessarily at risk.<br />
          The market doesn't wait for you to figure it out. Get the edge you need today.
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-white text-black py-12 px-4 text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Ready to Trade Like a Professional?
        </h3>
        <p className="mb-6 font-light font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Join the traders who have access to the original Market Makers Method and unlimited mentorship from its creator.
        </p>
        <button className="bg-[#FFD700] text-black font-bold px-8 py-4 shadow-lg text-lg transition-all duration-200 uppercase font-sans rounded-full hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5)] focus:outline-none" style={{ fontFamily: 'Montserrat, sans-serif', transition: 'all 0.2s cubic-bezier(.4,0,.2,1)' }}>
          START YOUR PAT MEMBERSHIP TODAY
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-6 text-xs border-t border-gray-800 font-light font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div>© 2024 Martin Cole – Professional Trading Education</div>
        <div className="mt-1">Not a licensed financial trading organization.</div>
      </footer>
    </main>
  );
} 