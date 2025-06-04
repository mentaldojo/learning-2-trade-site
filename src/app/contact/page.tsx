import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Me | Learning2Trade',
  description: 'Get in touch with Learning2Trade for personalized trading mentorship and support.'
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] relative">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />

      {/* Gold accent line at top */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-24 relative">
        {/* Envelope Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" 
                stroke="#FFD700" 
                strokeWidth="1.5"
                fill="none"
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
          Contact Me
        </h1>

        <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Have questions about our trading mentorship? I&apos;m here to help. Fill out the form below and I&apos;ll get back to you within 24 hours.
          </p>

          <ContactForm />
        </div>
      </div>
    </main>
  );
} 