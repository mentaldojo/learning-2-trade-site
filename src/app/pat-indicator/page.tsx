import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PAT Indicator & Mentoring | Learning2Trade',
  description: 'Discover the PAT Indicator for TradingView and our comprehensive mentoring and training portal. Consistency, clarity, and confidence for every trader.',
  openGraph: {
    title: 'PAT Indicator & Mentoring | Learning2Trade',
    description: 'Discover the PAT Indicator for TradingView and our comprehensive mentoring and training portal. Consistency, clarity, and confidence for every trader.',
    url: 'https://learning2trade.com/pat-indicator',
    images: [
      {
        url: 'https://learning2trade.com/images/pat-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PAT Indicator for TradingView'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PAT Indicator & Mentoring | Learning2Trade',
    description: 'Discover the PAT Indicator for TradingView and our comprehensive mentoring and training portal. Consistency, clarity, and confidence for every trader.',
    images: ['https://learning2trade.com/images/pat-og.jpg']
  }
};

export default function PatSalesPage() {
  return (
    <main className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "PAT Indicator + Professional Trading Mentorship",
        "image": [
          "https://learning2trade.com/images/pat-og.jpg"
        ],
        "description": "Professional trading system including the PAT Indicator for TradingView and unlimited mentorship from Martin Cole.",
        "brand": {
          "@type": "Brand",
          "name": "Learning2Trade"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.learning2trade.com/pat-indicator",
          "priceCurrency": "USD",
          "price": "97.00",
          "availability": "https://schema.org/InStock"
        }
      }) }} />
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
          P.A.T. – Indicator for TradingView
        </h1>
        <p className="text-lg sm:text-xl text-[#FFD700] mb-8 max-w-2xl mx-auto font-light">
          Discover the Professional Activity Tracker (PAT) Indicator—consistency, clarity, and confidence for your trading journey. Includes personal one-on-one mentoring.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-b from-[#FFD700] via-[#bfa14a] to-[#b8860b] bg-clip-text text-transparent drop-shadow">Why Choose PAT?</h2>
        <div className="max-w-2xl mx-auto text-left text-lg sm:text-xl text-gray-700 font-light space-y-6">
          <p>
            The PAT Indicator is designed for traders who want to stop guessing and start trading with confidence. Here&apos;s why it stands out from the crowd:
          </p>
          <ul className="space-y-4 mt-6">
            <li className="flex items-start"><span className="text-[#FFD700] text-2xl mr-3 mt-1">✔</span> Consistent, reliable signals&mdash;no more second-guessing your trades</li>
            <li className="flex items-start"><span className="text-[#FFD700] text-2xl mr-3 mt-1">✔</span> Simple, intuitive visuals&mdash;see market activity at a glance</li>
            <li className="flex items-start"><span className="text-[#FFD700] text-2xl mr-3 mt-1">✔</span> Works on Forex, Crypto, Stocks, and more&mdash;adaptable to your style</li>
            <li className="flex items-start"><span className="text-[#FFD700] text-2xl mr-3 mt-1">✔</span> Developed by a professional trader with decades of experience</li>
            <li className="flex items-start"><span className="text-[#FFD700] text-2xl mr-3 mt-1">✔</span> Includes personal, one-on-one mentoring to help you master the tool</li>
            <li className="flex items-start"><span className="text-[#FFD700] text-2xl mr-3 mt-1">✔</span> No hype&mdash;just a proven edge and real results</li>
          </ul>
        </div>
      </section>

      {/* How PAT Works */}
      <section className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900 bg-gradient-to-b from-[#FFD700] via-[#bfa14a] to-[#b8860b] bg-clip-text text-transparent drop-shadow">How PAT Works</h2>
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li>Tracks professional activity and market sentiment in real time</li>
              <li>Highlights high-probability trade setups with clear visual cues</li>
              <li>Customizable overlays for your trading style</li>
              <li>Easy integration with TradingView</li>
            </ul>
          </div>
          <div className="h-40 bg-gradient-to-br from-[#ffe066] to-[#bfa14a] flex items-center justify-center rounded-xl text-white font-bold opacity-70">PAT Feature Visual</div>
        </div>
      </section>

      {/* Mentoring & Training Portal */}
      <section className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900 bg-gradient-to-b from-[#FFD700] via-[#bfa14a] to-[#b8860b] bg-clip-text text-transparent drop-shadow">Mentoring & Training Portal</h2>
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li>Personal, one-on-one mentoring directly from me</li>
              <li>Step-by-step video library: basics to advanced</li>
              <li>Direct answers to your questions and ongoing guidance</li>
              <li>All resources in one easy-access portal</li>
            </ul>
          </div>
          <div className="h-40 bg-gradient-to-br from-[#ffe066] to-[#bfa14a] flex items-center justify-center rounded-xl text-white font-bold opacity-70">Mentoring Portal Visual</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900 bg-gradient-to-b from-[#FFD700] via-[#bfa14a] to-[#b8860b] bg-clip-text text-transparent drop-shadow">What Our Users Say</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 text-center border-l-4" style={{ borderLeftColor: '#FFD700' }}>
            <span className="absolute left-8 top-6 text-4xl" style={{ color: '#FFD700' }}>&ldquo;</span>
            <p className="italic text-lg font-light leading-relaxed mb-8">PAT changed my trading forever. I finally feel in control and confident in my decisions.</p>
            <div className="font-bold text-gray-900">— Satisfied Trader</div>
          </div>
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 text-center border-l-4" style={{ borderLeftColor: '#FFD700' }}>
            <span className="absolute left-8 top-6 text-4xl" style={{ color: '#FFD700' }}>&ldquo;</span>
            <p className="italic text-lg font-light leading-relaxed mb-8">The mentoring and training portal is worth its weight in gold. Highly recommended!</p>
            <div className="font-bold text-gray-900">— New Consistent Trader</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900 bg-gradient-to-b from-[#FFD700] via-[#bfa14a] to-[#b8860b] bg-clip-text text-transparent drop-shadow">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Is PAT compatible with my TradingView account?</h3>
            <p className="text-gray-700">Yes! PAT is designed for seamless integration with TradingView. I&apos;ll guide you through the setup process.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Do I get mentoring with my purchase?</h3>
            <p className="text-gray-700">Absolutely. Every PAT user receives personal, one-on-one mentoring directly from me, plus access to my full training portal.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">What markets does PAT work on?</h3>
            <p className="text-gray-700">PAT works on Forex, Crypto, Stocks, Indices, and more — anywhere you use TradingView.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">How do I get started?</h3>
            <p className="text-gray-700">Click the button below to get started. You&apos;ll receive setup instructions and instant access to the portal.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="max-w-4xl mx-auto px-4 py-16 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-b from-[#FFD700] via-[#bfa14a] to-[#b8860b] bg-clip-text text-transparent drop-shadow">Ready to Trade with Confidence?</h2>
        <p className="text-lg text-gray-700 mb-8">Get instant access to the PAT Indicator, personal one-on-one mentoring from me, and my full training portal.</p>
        <Link href="https://martincole.thrivecart.com/pat-indicator-for-trading-view/" className="bg-[#FFD700] text-black font-bold px-10 py-5 rounded-full text-xl shadow-lg hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5)] transition-all duration-200 uppercase">Get PAT Now</Link>
      </section>
    </main>
  );
} 