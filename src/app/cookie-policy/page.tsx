import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Learning2Trade',
  description: 'Cookie policy for Learning2Trade services, explaining how we use cookies and similar technologies.',
  openGraph: {
    title: 'Cookie Policy | Learning2Trade',
    description: 'Cookie policy for Learning2Trade services, explaining how we use cookies and similar technologies.',
    url: 'https://learning2trade.com/cookie-policy',
    images: [
      {
        url: 'https://learning2trade.com/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Learning2Trade Cookie Policy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | Learning2Trade',
    description: 'Cookie policy for Learning2Trade services, explaining how we use cookies and similar technologies.',
    images: ['https://learning2trade.com/images/og-default.jpg']
  }
};

export default function CookiePolicy() {
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
          Cookie Policy
        </h1>

        <div className="space-y-8 text-gray-700">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Introduction</h2>
            <p className="text-lg leading-relaxed">
              This Cookie Policy explains how I use cookies and similar technologies on my website. By using my services, you agree to the use of cookies as described in this policy.
            </p>
          </section>

          {/* What Are Cookies */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>What Are Cookies</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website. They help me provide you with a better experience by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Remembering your preferences</li>
                <li>Understanding how you use my website</li>
                <li>Improving my services</li>
                <li>Providing personalized content</li>
              </ul>
            </div>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Types of Cookies</h2>
            <p className="text-lg leading-relaxed">
              I use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand user behavior</li>
              <li>Preference cookies to remember your settings</li>
              <li>Security cookies to protect your account</li>
            </ul>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Third-Party Cookies</h2>
            <p className="text-lg leading-relaxed">
              Some cookies are placed by third-party services that appear on my pages:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
              <li>Google Analytics for website analytics</li>
              <li>Stripe for payment processing</li>
              <li>TradingView for PAT Indicator functionality</li>
              <li>Social media platforms for sharing features</li>
            </ul>
          </section>

          {/* Managing Cookies */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Managing Cookies</h2>
            <p className="text-lg leading-relaxed">
              You can control and manage cookies in your browser settings. However, please note that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
              <li>Disabling cookies may affect website functionality</li>
              <li>Some features may not work without cookies</li>
              <li>You can delete cookies at any time</li>
              <li>Browser settings can be adjusted to block cookies</li>
            </ul>
          </section>

          {/* Updates to Policy */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Updates to Policy</h2>
            <p className="text-lg leading-relaxed">
              I may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Contact Me</h2>
            <p className="text-lg leading-relaxed">
              If you have any questions about this Cookie Policy, please contact me through the website&apos;s contact form or email support.
            </p>
          </section>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: March 19, 2024
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 