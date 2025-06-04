import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility | Learning2Trade',
  description: 'Accessibility statement for Learning2Trade services, outlining our commitment to making our website accessible to all users.',
};

export default function Accessibility() {
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
          Accessibility
        </h1>

        <div className="space-y-8 text-gray-700">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Introduction</h2>
            <p className="text-lg leading-relaxed">
              I am committed to ensuring that my website is accessible to all users, regardless of their abilities or disabilities. This accessibility statement outlines my commitment to making my services available to everyone.
            </p>
          </section>

          {/* Standards Compliance */}
          <section className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Standards Compliance</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                My website aims to comply with the following accessibility standards:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Web Content Accessibility Guidelines (WCAG) 2.1</li>
                <li>Level AA compliance standards</li>
                <li>ADA (Americans with Disabilities Act) requirements</li>
                <li>EN 301 549 European accessibility standards</li>
              </ul>
            </div>
          </section>

          {/* Accessibility Features */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Accessibility Features</h2>
            <p className="text-lg leading-relaxed">
              My website includes the following accessibility features:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>High contrast text options</li>
              <li>Alt text for images</li>
              <li>Responsive design for all devices</li>
            </ul>
          </section>

          {/* Ongoing Improvements */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Ongoing Improvements</h2>
            <p className="text-lg leading-relaxed">
              I continuously work to improve accessibility by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
              <li>Regular accessibility audits</li>
              <li>User feedback implementation</li>
              <li>Staff training on accessibility</li>
              <li>Testing with assistive technologies</li>
            </ul>
          </section>

          {/* Known Limitations */}
          <section className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Known Limitations</h2>
            <p className="text-lg leading-relaxed">
              While I strive to ensure accessibility, some limitations may exist:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
              <li>Some third-party content may not be fully accessible</li>
              <li>Older content may not meet current standards</li>
              <li>Some complex trading charts may be difficult to navigate</li>
              <li>Video content may require additional accessibility features</li>
            </ul>
          </section>

          {/* Feedback and Support */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Feedback and Support</h2>
            <p className="text-lg leading-relaxed">
              I welcome your feedback on accessibility. If you encounter any issues or have suggestions for improvement, please contact me through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
              <li>Website contact form</li>
              <li>Email support</li>
              <li>Phone support</li>
              <li>Social media channels</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif" style={{ color: '#bfa14a' }}>Contact Me</h2>
            <p className="text-lg leading-relaxed">
              If you have any questions about accessibility or need assistance, please contact me through the website's contact form or email support.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 