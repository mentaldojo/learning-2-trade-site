import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility | Learning2Trade',
  description: 'Learn about Learning2Trade\'s commitment to web accessibility and the features we implement to ensure an inclusive experience for all users.',
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />

      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-[#ffe066] via-[#FFD700] to-[#bfa14a]"></div>

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Shield icon */}
        <div className="flex justify-center mb-8">
          <svg
            className="w-16 h-16 text-[#FFD700] drop-shadow-lg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Accessibility Commitment
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#bfa14a]">Our Standards</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
              <p className="text-gray-700">
                Learning2Trade is committed to ensuring digital accessibility for people of all abilities. We strive to maintain compliance with the following standards:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
                <li>Americans with Disabilities Act (ADA) requirements</li>
                <li>EN 301 549 European accessibility standards</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#bfa14a]">Accessibility Features</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Keyboard Navigation</h3>
                <p className="text-gray-700">
                  Our website supports full keyboard navigation, allowing users to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Navigate through all interactive elements using Tab key</li>
                  <li>Access dropdown menus and navigation items</li>
                  <li>Use keyboard shortcuts for common actions</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Screen Reader Compatibility</h3>
                <p className="text-gray-700">
                  We ensure compatibility with screen readers through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Proper ARIA labels and roles</li>
                  <li>Semantic HTML structure</li>
                  <li>Descriptive alt text for images</li>
                  <li>Clear heading hierarchy</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Visual Accessibility</h3>
                <p className="text-gray-700">
                  Our visual design considers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>High contrast text options</li>
                  <li>Clear typography and readable font sizes</li>
                  <li>Consistent color schemes</li>
                  <li>Proper spacing and layout</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Responsive Design</h3>
                <p className="text-gray-700">
                  Our website is fully responsive and accessible across:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Desktop computers</li>
                  <li>Tablets</li>
                  <li>Mobile devices</li>
                  <li>Different screen sizes and orientations</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#bfa14a]">Continuous Improvement</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-700 mb-4">
                We are committed to continuously improving the accessibility of our website. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Regular accessibility audits</li>
                <li>User testing with people who have disabilities</li>
                <li>Implementation of feedback from users</li>
                <li>Ongoing staff training on accessibility best practices</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#bfa14a]">Contact Us</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-700 mb-4">
                If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Email: support@learning2trade.com</li>
                <li>Phone: [Your Phone Number]</li>
                <li>Hours: Monday - Friday, 9:00 AM - 5:00 PM EST</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 