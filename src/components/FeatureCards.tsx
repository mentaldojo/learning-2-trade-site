"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCards() {
  return (
    <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white rounded-2xl shadow-xl flex-1 px-10 py-12 border-t-4"
        style={{ borderTopColor: '#FFD700', fontFamily: 'Montserrat, sans-serif' }}
      >
        <h3 className="text-2xl font-bold mb-4 text-black font-sans">Professional Trading Method</h3>
        <p className="text-lg text-gray-700 font-light leading-relaxed font-sans">
          Learn the exact method used by institutional traders to move markets. Developed from 35+ years of professional trading experience, not theory.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white rounded-2xl shadow-xl flex-1 px-10 py-12 border-t-4"
        style={{ borderTopColor: '#FFD700', fontFamily: 'Montserrat, sans-serif' }}
      >
        <h3 className="text-2xl font-bold mb-4 text-black font-sans">Advanced Trading Indicator</h3>
        <p className="text-lg text-gray-700 font-light leading-relaxed font-sans">
          The PAT Indicator reveals institutional money flow before price moves. Get the same edge professional traders use to identify high-probability setups.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white rounded-2xl shadow-xl flex-1 px-10 py-12 border-t-4"
        style={{ borderTopColor: '#FFD700', fontFamily: 'Montserrat, sans-serif' }}
      >
        <h3 className="text-2xl font-bold mb-4 text-black font-sans">Expert Trading Mentorship</h3>
        <p className="text-lg text-gray-700 font-light leading-relaxed font-sans">
          Get personal, one-on-one guidance from a professional trader. Learn proven strategies, risk management, and how to develop a consistent trading edge with direct support.
        </p>
      </motion.div>
    </div>
  );
} 