import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer Policy | Learning To Trade',
  description: 'Disclaimer Policy for Learning To Trade website. Important information regarding the use of our services and trading education.',
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 sm:py-24 px-4 text-center relative overflow-hidden">
        {/* Geometric backdrop */}
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translateX(25%)' }}>
            <defs>
              <linearGradient id="gold-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff9d1" />
                <stop offset="30%" stopColor="#FFD700" />
                <stop offset="70%" stopColor="#bfa14a" />
                <stop offset="100%" stopColor="#fff9d1" />
              </linearGradient>
              {/* Arrow marker definition */}
              <marker
                id="arrowhead"
                markerWidth="6"
                markerHeight="4"
                refX="0"
                refY="2"
                orient="auto"
              >
                <polygon
                  points="0 0, 6 2, 0 4"
                  fill="url(#gold-gradient)"
                  opacity="1"
                />
              </marker>
            </defs>
            {/* Ascending diagonal lines with arrowheads */}
            <line x1="0" y1="100" x2="30" y2="70" stroke="url(#gold-gradient)" strokeWidth="2" opacity="0.18" markerEnd="url(#arrowhead)" />
            <line x1="20" y1="100" x2="50" y2="70" stroke="url(#gold-gradient)" strokeWidth="2" opacity="0.22" markerEnd="url(#arrowhead)" />
            <line x1="40" y1="100" x2="70" y2="70" stroke="url(#gold-gradient)" strokeWidth="2" opacity="0.18" markerEnd="url(#arrowhead)" />
            <line x1="60" y1="100" x2="90" y2="70" stroke="url(#gold-gradient)" strokeWidth="2" opacity="0.22" markerEnd="url(#arrowhead)" />
            {/* Horizontal accent lines */}
            <line x1="0" y1="80" x2="100" y2="80" stroke="url(#gold-gradient)" strokeWidth="2" opacity="0.10" />
            <line x1="0" y1="60" x2="100" y2="60" stroke="url(#gold-gradient)" strokeWidth="2" opacity="0.10" />
          </svg>
        </div>
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6" style={{
          background: 'linear-gradient(to bottom, #fffbe6 0%, #ffe066 25%, #FFD700 50%, #bfa14a 75%, #fffbe6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          Disclaimer Policy
        </h1>
        <p className="text-lg sm:text-xl text-[#FFD700] mb-8 max-w-2xl mx-auto font-light">
          Important information about the use of the PAT Indicator and my mentoring services. Please read carefully before using this site or my services.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center font-serif" style={{
          background: 'linear-gradient(to bottom, #fffbe6 0%, #ffe066 25%, #FFD700 50%, #bfa14a 75%, #fffbe6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          Disclaimer Policy
        </h1>
        <div className="text-center mb-8 sm:mb-12">
          <Link href="/" className="text-[#FFD700] hover:text-[#bfa14a] transition-colors duration-200 text-lg">
            ← Back to Home
          </Link>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8">
            Welcome to Learning2Trade. This disclaimer policy outlines important information regarding the use of our Professional Activity Tracker (PAT) Indicator, trading mentorship services, and all related content. Please read this document carefully before using our services.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Not Financial Advice</h2>
          <p className="text-gray-700 mb-8">
            All content provided through Learning2Trade, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>The Professional Activity Tracker (PAT) Indicator</li>
            <li>Trading mentorship sessions</li>
            <li>Training portal materials</li>
            <li>Educational videos</li>
            <li>Blog posts and articles</li>
          </ul>
          <p className="text-gray-700 mb-8">
            is for informational and educational purposes only. None of this content constitutes personalized financial or investment advice.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Risk Warning</h2>
          <p className="text-gray-700 mb-8">
            Trading financial instruments involves significant risk. You should be aware of the following:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>You may lose some or all of your invested capital</li>
            <li>In certain trading scenarios (e.g., margin trading), losses may exceed your initial investment</li>
            <li>Past performance is not indicative of future results</li>
            <li>Trading is not suitable for all investors</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">User Responsibility</h2>
          <p className="text-gray-700 mb-8">
            You are solely responsible for your trading decisions. Before using our services or acting on any information provided, you should:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Conduct your own thorough research and due diligence</li>
            <li>Consult with a licensed financial advisor</li>
            <li>Understand the risks involved in trading</li>
            <li>Ensure trading aligns with your financial goals and risk tolerance</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">No Warranties</h2>
          <p className="text-gray-700 mb-8">
            All content and services are provided &quot;as is&quot; without any warranties, express or implied, including but not limited to warranties of accuracy, completeness, or fitness for a particular purpose. We disclaim all liability for any direct, indirect, or consequential damages arising from the use of our website, PAT Indicator, or mentorship services.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Intellectual Property</h2>
          <p className="text-gray-700 mb-8">
            The PAT Indicator, training materials, and all other content are proprietary and protected by copyright. Unauthorized reproduction, distribution, or use of these materials is strictly prohibited.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Trading-Specific Risks</h2>
          <p className="text-gray-700 mb-8">
            Electronic trading involves specific risks, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>System delays and technical failures</li>
            <li>Market volatility and liquidity issues</li>
            <li>Price slippage and execution delays</li>
            <li>Internet connectivity problems</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Governing Law</h2>
          <p className="text-gray-700 mb-8">
            These terms and conditions are governed by and construed in accordance with the laws of New Zealand. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of New Zealand.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Contact Information</h2>
          <p className="text-gray-700 mb-8">
            If you have any questions about this disclaimer policy, please contact us through our <Link href="/contact" className="text-[#FFD700] hover:text-[#bfa14a] transition-colors duration-200">contact page</Link>.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <div className="mt-4 sm:mt-6 bg-[#fcfbf7] w-full py-12 sm:py-16 shadow-[0_-6px_24px_0_rgba(191,161,74,0.18)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-grow h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" style={{ maxWidth: '180px' }} />
            <span className="mx-4 flex items-center justify-center">
              <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                <path d="M4 20L10 8L20 20L30 8L36 20" stroke="#FFD700" strokeWidth="2.5" strokeLinejoin="round"/>
                <circle cx="10" cy="8" r="2.5" fill="#FFD700"/>
                <circle cx="30" cy="8" r="2.5" fill="#FFD700"/>
                <circle cx="20" cy="20" r="2.5" fill="#FFD700"/>
                <path d="M8 24H32" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div className="flex-grow h-0.5 bg-gradient-to-l from-transparent via-[#FFD700] to-transparent" style={{ maxWidth: '180px' }} />
          </div>
          
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="/privacy-policy" className="text-[#bfa14a] hover:text-[#FFD700] transition-colors duration-200 font-medium">Privacy Policy</Link>
              <Link href="/terms" className="text-[#bfa14a] hover:text-[#FFD700] transition-colors duration-200 font-medium">Terms & Conditions</Link>
              <Link href="/cookies" className="text-[#bfa14a] hover:text-[#FFD700] transition-colors duration-200 font-medium">Cookie Policy</Link>
              <Link href="/accessibility" className="text-[#bfa14a] hover:text-[#FFD700] transition-colors duration-200 font-medium">Accessibility</Link>
            </div>
            <div>
              <Link href="/" className="text-[#bfa14a] hover:text-[#FFD700] transition-colors duration-200 text-lg font-medium">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 