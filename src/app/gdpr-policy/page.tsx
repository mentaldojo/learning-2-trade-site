import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDPR Policy | Learning2Trade',
  description: 'Our GDPR Policy outlines how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation.',
  openGraph: {
    title: 'GDPR Policy | Learning2Trade',
    description: 'Our GDPR Policy outlines how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation.',
    url: 'https://learning2trade.com/gdpr-policy',
    images: [
      {
        url: 'https://learning2trade.com/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Learning2Trade GDPR Policy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GDPR Policy | Learning2Trade',
    description: 'Our GDPR Policy outlines how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation.',
    images: ['https://learning2trade.com/images/og-default.jpg']
  }
};

export default function GDPRPolicyPage() {
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
          GDPR Policy
        </h1>

        <div className="space-y-8 text-gray-700">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Introduction</h2>
            <p className="text-lg leading-relaxed">
              This GDPR Policy outlines how Learning2Trade collects, uses, and protects your personal data in compliance with the General Data Protection Regulation (GDPR). We are committed to ensuring that your privacy is protected and that your personal data is processed in accordance with applicable data protection laws.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Your Rights</h2>
            <p className="text-lg leading-relaxed mb-4">
              Under GDPR, you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Data We Collect</h2>
            <p className="text-lg leading-relaxed mb-4">
              We collect and process the following types of personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Contact information (name, email address)</li>
              <li>Account information for our services</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Usage data and preferences</li>
              <li>Communication records</li>
            </ul>
          </section>

          {/* Data Usage */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>How We Use Your Data</h2>
            <p className="text-lg leading-relaxed mb-4">
              We use your personal data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Providing and managing our services</li>
              <li>Processing your payments</li>
              <li>Communicating with you about our services</li>
              <li>Improving our services and user experience</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Data Security</h2>
            <p className="text-lg leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-lg">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Staff training on data protection</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Data Retention</h2>
            <p className="text-lg leading-relaxed">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. When we no longer need your data, we will securely delete or anonymize it.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Contact Us</h2>
            <p className="text-lg leading-relaxed">
              If you have any questions about this GDPR Policy or wish to exercise your rights, please contact us at:
            </p>
            <p className="text-lg mt-4">
              Email: <a href="mailto:privacy@learning2trade.com" className="text-[#FFD700] hover:text-[#bfa14a] transition-colors duration-200">privacy@learning2trade.com</a>
            </p>
          </section>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: March 20, 2024
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 