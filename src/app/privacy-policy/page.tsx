import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Learning To Trade',
  description: 'Privacy Policy for Learning To Trade website. Learn about how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 sm:py-24 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6" style={{
          background: 'linear-gradient(to bottom, #fffbe6 0%, #ffe066 25%, #FFD700 50%, #bfa14a 75%, #fffbe6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          Privacy Policy
        </h1>
        <p className="text-lg sm:text-xl text-[#FFD700] mb-8 max-w-2xl mx-auto font-light">
          Learn how your information is collected, used, and protected. Your privacy and trust are important to me.
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
          Privacy Policy
        </h1>
        <div className="text-center mb-8 sm:mb-12">
          <Link href="/" className="text-[#FFD700] hover:text-[#bfa14a] transition-colors duration-200 text-lg">
            ← Back to Home
          </Link>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8">
            Learning To Trade website is owned by MJC Training Trust, which is a data controller of your personal data.
          </p>

          <p className="text-gray-700 mb-8">
            We have adopted this Privacy Policy, which determines how we are processing the information collected by Learning To Trade, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using Learning To Trade website.
          </p>

          <p className="text-gray-700 mb-8">
            We take care of your personal data and undertake to guarantee its confidentiality and security.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Personal Information We Collect</h2>
          <p className="text-gray-700 mb-8">
            When you visit the Learning To Trade, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically collected information as &quot;Device Information.&quot; Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfil the agreement.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Why Do We Process Your Data?</h2>
          <p className="text-gray-700 mb-8">
            Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.
          </p>

          <p className="text-gray-700 mb-8">
            You can visit the website without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website&apos;s features, or you wish to receive our newsletter or provide other details by filling out a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organisation, telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website&apos;s features. For example, you won&apos;t be able to receive our Newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us via support@learningtotrade.com.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Your Rights</h2>
          <p className="text-gray-700 mb-8">
            If you are a European resident, you have the following rights related to your personal data:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>The right to be informed.</li>
            <li>The right of access.</li>
            <li>The right to rectification.</li>
            <li>The right to erasure.</li>
            <li>The right to restrict processing.</li>
            <li>The right to data portability.</li>
            <li>The right to object.</li>
            <li>Rights in relation to automated decision-making and profiling.</li>
          </ul>

          <p className="text-gray-700 mb-8">
            If you would like to exercise this right, please contact us through the contact information below.
          </p>

          <p className="text-gray-700 mb-8">
            Additionally, if you are a European resident, we note that we are processing your information in order to fulfil contracts we might have with you (for example, if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information might be transferred outside of Europe, including Canada and the United States.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Links to Other Websites</h2>
          <p className="text-gray-700 mb-8">
            Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Information Security</h2>
          <p className="text-gray-700 mb-8">
            We secure the information you provide on computer servers in a controlled, secure environment, protected from unauthorised access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorised access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Legal Disclosure</h2>
          <p className="text-gray-700 mb-8">
            We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Contact Information</h2>
          <p className="text-gray-700 mb-8">
            If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may email support@learningtotrade.com.
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
              <Link href="/disclaimer" className="text-[#bfa14a] hover:text-[#FFD700] transition-colors duration-200 font-medium">Disclaimer Policy</Link>
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