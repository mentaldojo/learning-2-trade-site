import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopNav from '../components/layout/TopNav'
import Footer from '../components/layout/Footer'
import AccessibilityWrapper from '../components/accessibility/AccessibilityWrapper'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

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
        {/* Defer Google Analytics until user interaction */}
        <Script id="defer-ga" strategy="lazyOnload">
          {`
            (function() {
              var loaded = false;
              function loadGA() {
                if (loaded) return;
                loaded = true;
                var script = document.createElement('script');
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-6RMP3C7SDE';
                script.async = true;
                document.head.appendChild(script);
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', 'G-6RMP3C7SDE');
              }
              window.addEventListener('click', loadGA, { once: true });
              window.addEventListener('scroll', loadGA, { once: true });
              window.addEventListener('keydown', loadGA, { once: true });
            })();
          `}
        </Script>
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
              "image": "https://learning2trade.com/images/pat-indicator.jpg",
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
                "url": "https://learning2trade.com",
                "hasMerchantReturnPolicy": {
                  "@type": "MerchantReturnPolicy",
                  "applicableCountry": "US",
                  "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                  "merchantReturnDays": 30,
                  "returnMethod": "https://schema.org/ReturnByMail",
                  "returnFees": "https://schema.org/FreeReturn"
                },
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "US"
                  },
                  "deliveryTime": {
                    "@type": "ShippingDeliveryTime",
                    "handlingTime": {
                      "@type": "QuantitativeValue",
                      "minValue": "0",
                      "maxValue": "1",
                      "unitCode": "DAY"
                    },
                    "transitTime": {
                      "@type": "QuantitativeValue",
                      "minValue": "0",
                      "maxValue": "1",
                      "unitCode": "DAY"
                    }
                  }
                }
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
        <AccessibilityWrapper />
        <TopNav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 