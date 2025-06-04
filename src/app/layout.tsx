import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopNav from '../components/layout/TopNav'
import Footer from '../components/layout/Footer'
import KeyboardNavigation from '../components/accessibility/KeyboardNavigation'
import ScreenReaderSupport from '../components/accessibility/ScreenReaderSupport'
import HighContrastToggle from '../components/accessibility/HighContrastToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Trading Success | Market Makers Method & PAT Indicator',
  description: 'Transform your trading with the original Market Makers Method. Get the PAT Indicator for TradingView and professional mentorship from Martin Cole, a 35+ year trading veteran. Learn how institutional traders move markets.',
  keywords: 'trading success, professional trading, market makers method, PAT indicator, TradingView indicator, trading mentorship, institutional trading, forex trading, stock trading, trading education',
  openGraph: {
    title: 'Professional Trading Success | Market Makers Method & PAT Indicator',
    description: 'Transform your trading with the original Market Makers Method. Get the PAT Indicator for TradingView and professional mentorship from Martin Cole, a 35+ year trading veteran.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Trading Success | Market Makers Method & PAT Indicator',
    description: 'Transform your trading with the original Market Makers Method. Get the PAT Indicator for TradingView and professional mentorship.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Learning2Trade",
              "url": "https://learning2trade.com",
              "logo": "https://learning2trade.com/logo.png",
              "description": "Professional trading education and mentorship program offering the Market Makers Method and PAT Indicator.",
              "founder": {
                "@type": "Person",
                "name": "Martin Cole",
                "jobTitle": "Professional Trader",
                "description": "35+ years of professional trading experience"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "supportpat@learningtotrade.com",
                "availableLanguage": "English"
              },
              "offers": {
                "@type": "Offer",
                "name": "PAT Indicator + Professional Trading Mentorship",
                "description": "Professional trading system including the PAT Indicator for TradingView and unlimited mentorship from Martin Cole.",
                "price": "97",
                "priceCurrency": "USD",
                "priceValidUntil": "2024-12-31",
                "availability": "https://schema.org/InStock",
                "url": "https://learning2trade.com",
                "offeredBy": {
                  "@type": "Organization",
                  "name": "Learning2Trade"
                }
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "PAT Indicator + Professional Trading Mentorship",
              "description": "Professional trading system including the PAT Indicator for TradingView and unlimited mentorship from Martin Cole.",
              "brand": {
                "@type": "Brand",
                "name": "Learning2Trade"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "Learning2Trade"
              },
              "offers": {
                "@type": "Offer",
                "price": "97",
                "priceCurrency": "USD",
                "priceValidUntil": "2024-12-31",
                "availability": "https://schema.org/InStock",
                "url": "https://learning2trade.com"
              },
              "featureList": [
                "PAT (Professional Activity Tracker) Indicator for TradingView",
                "Unlimited personal and group mentorship",
                "Access to all live and recorded training sessions",
                "No long-term contracts",
                "Regular updates and improvements",
                "Exclusive trading insights"
              ],
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Mike"
                },
                "reviewBody": "After years of struggling with traditional trading indicators, the PAT Indicator finally showed me how to spot institutional money flow. Martin's mentorship helped me develop a consistent trading edge."
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <KeyboardNavigation />
        <ScreenReaderSupport />
        <HighContrastToggle />
        <TopNav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 