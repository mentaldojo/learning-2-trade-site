import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | Learning2Trade',
  description: 'Important disclaimer information for Learning2Trade services, including trading risks and educational content.',
  openGraph: {
    title: 'Disclaimer | Learning2Trade',
    description: 'Important disclaimer information for Learning2Trade services, including trading risks and educational content.',
    url: 'https://learning2trade.com/disclaimer',
    images: [
      {
        url: 'https://learning2trade.com/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Learning2Trade Disclaimer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer | Learning2Trade',
    description: 'Important disclaimer information for Learning2Trade services, including trading risks and educational content.',
    images: ['https://learning2trade.com/images/og-default.jpg']
  }
};

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-[#faf9f6] relative">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />

      {/* Gold accent line at top */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-24 relative">
        {/* Shield Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M12 2L20 6V11C20 16.25 16.25 20.25 12 22C7.75 20.25 4 16.25 4 11V6L12 2Z" 
                stroke="#FFD700" 
                strokeWidth="1.5"
                fill="none"
                className="drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]"
              />
              <path d="M12 8V13" 
                stroke="#FFD700" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                className="drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]"
              />
              <circle cx="12" cy="16" r="1" 
                fill="#FFD700"
                className="drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center font-serif" style={{
          background: 'linear-gradient(to bottom, #fffbe6 0%, #ffe066 25%, #FFD700 50%, #bfa14a 75%, #fffbe6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          Disclaimer
        </h1>

        <div className="space-y-8 text-gray-700">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Introduction</h2>
            <p className="text-lg leading-relaxed">
              This disclaimer outlines important information regarding the use of my trading services, including the PAT Indicator and Trading Mentorship program. Please read this carefully before using any of my services.
            </p>
          </section>

          {/* Trading Risks */}
          <section className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Trading Risks</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Trading in financial markets involves significant risk. You should be aware of the following risks:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>You can lose some or all of your invested capital</li>
                <li>Past performance is not indicative of future results</li>
                <li>Market conditions can change rapidly and unexpectedly</li>
                <li>Trading decisions should be made based on your own research and risk tolerance</li>
              </ul>
            </div>
          </section>

          {/* Educational Content */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Educational Content</h2>
            <p className="text-lg leading-relaxed">
              The content provided through my services is for educational purposes only. It is not intended to be financial advice. You should:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
              <li>Conduct your own research before making trading decisions</li>
              <li>Understand that no trading strategy guarantees profits</li>
              <li>Consider your personal financial situation and risk tolerance</li>
              <li>Consult with a financial advisor if needed</li>
            </ul>
          </section>

          {/* No Guarantees */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>No Guarantees</h2>
            <p className="text-lg leading-relaxed">
              I do not guarantee any specific results from using my services. Trading outcomes depend on various factors including market conditions, your trading decisions, and risk management practices.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Limitation of Liability</h2>
            <p className="text-lg leading-relaxed">
              I am not liable for any losses or damages that may result from using my services. This includes but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
              <li>Financial losses from trading</li>
              <li>Missed trading opportunities</li>
              <li>Technical issues or service interruptions</li>
              <li>Decisions made based on the information provided</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Contact Me</h2>
            <p className="text-lg leading-relaxed">
              If you have any questions about this disclaimer, please contact me through the website&apos;s contact form or email support.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 