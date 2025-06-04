"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="bg-white text-black py-20 px-4">
      <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center font-serif" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
        Real Traders, Real Results
      </h2>
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative bg-white rounded-3xl shadow-2xl p-10 text-center mb-4 border-l-4"
          style={{
            borderLeftColor: '#FFD700',
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12), 0 -2px 8px 0 rgba(0,0,0,0.04)'
          }}
        >
          <span className="absolute left-8 top-6 text-4xl" style={{ color: '#FFD700' }}>&ldquo;</span>
          <p className="italic text-lg font-light font-serif leading-relaxed mb-8" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            &ldquo;After years of struggling with traditional trading indicators, the PAT Indicator finally showed me how to spot institutional money flow. Martin&apos;s mentorship helped me develop a consistent trading edge. This is the professional trading education I&apos;ve been looking for.&rdquo;
          </p>
          <div className="font-bold text-lg font-serif" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            - Mike, Full-Time Trader
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative bg-white rounded-3xl shadow-2xl p-10 text-center border-l-4"
          style={{
            borderLeftColor: '#FFD700',
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12), 0 -2px 8px 0 rgba(0,0,0,0.04)'
          }}
        >
          <span className="absolute left-8 top-6 text-4xl" style={{ color: '#FFD700' }}>&ldquo;</span>
          <p className="italic text-lg font-light font-serif leading-relaxed mb-8" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            &ldquo;The Market Makers Method is different from everything else I&apos;ve tried. It&apos;s not just another trading indicator - it&apos;s a complete professional trading system. Martin&apos;s mentorship has been invaluable in helping me understand how to trade like the institutions.&rdquo;
          </p>
          <div className="font-bold text-lg font-serif" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            - Sarah, Professional Trader
          </div>
        </motion.div>
      </div>
    </section>
  );
} 