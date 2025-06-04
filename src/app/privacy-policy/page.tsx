import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Learning2Trade',
  description: 'Privacy policy for Learning2Trade services, including data collection, usage, and protection practices.',
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>

        <div className="space-y-8 text-gray-700">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Introduction</h2>
            <p className="text-lg leading-relaxed">
              This Privacy Policy explains how I collect, use, and protect your personal information when you use my services, including the PAT Indicator and Trading Mentorship program.
            </p>
          </section>

          {/* Information Collection */}
          <section className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Information Collection</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                I collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Name and contact information</li>
                <li>TradingView account details for PAT Indicator access</li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Communication records and support interactions</li>
              </ul>
            </div>
          </section>

          {/* Information Usage */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Information Usage</h2>
            <p className="text-lg leading-relaxed">
              Your information is used to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
              <li>Provide access to the PAT Indicator and mentorship services</li>
              <li>Process payments and maintain your account</li>
              <li>Send important updates about your services</li>
              <li>Respond to your questions and support requests</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Data Protection</h2>
            <p className="text-lg leading-relaxed">
              I implement appropriate security measures to protect your personal information. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
              <li>Secure data storage and transmission</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
              <li>Secure payment processing through Stripe</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Third-Party Services</h2>
            <p className="text-lg leading-relaxed">
              I use the following third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
              <li>TradingView for PAT Indicator delivery</li>
              <li>Stripe for payment processing</li>
              <li>Email service providers for communications</li>
              <li>Analytics tools to improve service quality</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Your Rights</h2>
            <p className="text-lg leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
              <li>Access your personal information</li>
              <li>Request corrections to your data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Contact Me</h2>
            <p className="text-lg leading-relaxed">
              If you have any questions about this Privacy Policy or your data, please contact me through the website&apos;s contact form or email support.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 