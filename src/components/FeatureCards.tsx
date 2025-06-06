"use client";
import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ["400", "700"], display: 'swap' });

export default function FeatureCards() {
  return (
    <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
      <div
        className={`bg-white rounded-2xl shadow-xl flex-1 px-10 py-12 border-t-4 ${montserrat.className}`}
        style={{ borderTopColor: '#FFD700' }}
      >
        <h3 className="text-2xl font-bold mb-4 text-black font-sans">Professional Trading Method</h3>
        <p className="text-lg text-gray-700 font-light leading-relaxed font-sans">
          Learn the exact method used by institutional traders to move markets. Developed from 35+ years of professional trading experience, not theory.
        </p>
      </div>
      <div
        className={`bg-white rounded-2xl shadow-xl flex-1 px-10 py-12 border-t-4 delay-200 ${montserrat.className}`}
        style={{ borderTopColor: '#FFD700' }}
      >
        <h3 className="text-2xl font-bold mb-4 text-black font-sans">Advanced Trading Indicator</h3>
        <p className="text-lg text-gray-700 font-light leading-relaxed font-sans">
          The PAT Indicator reveals institutional money flow before price moves. Get the same edge professional traders use to identify high-probability setups.
        </p>
      </div>
    </div>
  );
} 