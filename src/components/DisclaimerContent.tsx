'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: 'easeOut' }
};

export default function DisclaimerContent() {
  return (
    <>
      {/* Title and first section shown immediately */}
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 font-serif text-center px-4" style={{
          background: 'linear-gradient(to bottom, #fffbe6 0%, #ffe066 25%, #FFD700 50%, #bfa14a 75%, #fffbe6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 1px 1px rgba(191,161,74,0.08)'
        }}>
          Disclaimer Policy
        </h1>

        <section className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
          <h2 className="text-2xl font-bold mb-4 text-black font-sans">Introduction</h2>
          <p className="text-lg font-light leading-relaxed">
            Welcome to Learning2Trade. This disclaimer policy outlines important information regarding the use of our Professional Activity Tracker (PAT) Indicator, trading mentorship services, and all related content. Please read this document carefully before using our services.
          </p>
        </section>
      </div>

      {/* Animated sections */}
      <div className="space-y-8 text-gray-700 mt-8">
        <motion.section {...fadeInUp} className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
          <h2 className="text-2xl font-bold mb-4 text-black font-sans">Not Financial Advice</h2>
          <p className="text-lg font-light leading-relaxed mb-4">
            All content provided through Learning2Trade, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg font-light">
            <li>The Professional Activity Tracker (PAT) Indicator</li>
            <li>Trading mentorship sessions</li>
            <li>Training portal materials</li>
            <li>Educational videos</li>
            <li>Blog posts and articles</li>
          </ul>
          <p className="text-lg font-light leading-relaxed mt-4">
            is for informational and educational purposes only. None of this content constitutes personalized financial or investment advice.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
          <h2 className="text-2xl font-bold mb-4 text-black font-sans">Risk Warning</h2>
          <p className="text-lg font-light leading-relaxed mb-4">
            Trading financial instruments involves significant risk. You should be aware of the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg font-light">
            <li>You may lose some or all of your invested capital</li>
            <li>In certain trading scenarios (e.g., margin trading), losses may exceed your initial investment</li>
            <li>Past performance is not indicative of future results</li>
            <li>Trading is not suitable for all investors</li>
          </ul>
        </motion.section>

        <motion.section {...fadeInUp} className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
          <h2 className="text-2xl font-bold mb-4 text-black font-sans">User Responsibility</h2>
          <p className="text-lg font-light leading-relaxed">
            You are solely responsible for your trading decisions. Before using our services or acting on any information provided, you should:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg font-light mt-4">
            <li>Conduct your own thorough research and due diligence</li>
            <li>Consult with a licensed financial advisor</li>
            <li>Understand the risks involved in trading</li>
            <li>Ensure trading aligns with your financial goals and risk tolerance</li>
          </ul>
        </motion.section>

        <motion.section {...fadeInUp} className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
          <h2 className="text-2xl font-bold mb-4 text-black font-sans">No Warranties</h2>
          <p className="text-lg font-light leading-relaxed">
            All content and services are provided "as is" without any warranties, express or implied, including but not limited to warranties of accuracy, completeness, or fitness for a particular purpose. We disclaim all liability for any direct, indirect, or consequential damages arising from the use of our website, PAT Indicator, or mentorship services.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
          <h2 className="text-2xl font-bold mb-4 text-black font-sans">Intellectual Property</h2>
          <p className="text-lg font-light leading-relaxed">
            The PAT Indicator, training materials, and all other content are proprietary and protected by copyright. Unauthorized reproduction, distribution, or use of these materials is strictly prohibited.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
          <h2 className="text-2xl font-bold mb-4 text-black font-sans">Trading-Specific Risks</h2>
          <p className="text-lg font-light leading-relaxed mb-4">
            Electronic trading involves specific risks, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg font-light">
            <li>System delays and technical failures</li>
            <li>Market volatility and liquidity issues</li>
            <li>Price slippage and execution delays</li>
            <li>Internet connectivity problems</li>
          </ul>
        </motion.section>

        <motion.section {...fadeInUp} className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
          <h2 className="text-2xl font-bold mb-4 text-black font-sans">Governing Law</h2>
          <p className="text-lg font-light leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of New Zealand. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of New Zealand.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="bg-white rounded-2xl shadow-xl p-8 border-t-4" style={{ borderTopColor: '#FFD700' }}>
          <h2 className="text-2xl font-bold mb-4 text-black font-sans">Contact Information</h2>
          <p className="text-lg font-light leading-relaxed">
            If you have any questions about this disclaimer policy, please contact us through our <a href="/contact" className="text-[#FFD700] hover:text-[#bfa14a] transition-colors duration-200">contact page</a>.
          </p>
        </motion.section>
      </div>
    </>
  );
} 