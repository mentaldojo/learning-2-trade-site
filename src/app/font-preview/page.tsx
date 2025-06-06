import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ["400", "700"], display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ["400", "700"], display: 'swap' });

export default function FontPreview() {
  return (
    <main style={{ padding: '2rem', background: '#faf9f6', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Font Comparison: Inter vs Montserrat</h1>
      <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 320, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '2rem' }}>
          <h2 className={inter.className} style={{ fontSize: '2rem', marginBottom: '1rem' }}>Inter Heading</h2>
          <p className={inter.className} style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            This is Inter, a modern, highly readable sans-serif font designed for user interfaces and digital content. It is neutral, professional, and widely used in tech and finance websites. Notice the clean lines and excellent legibility at all sizes.
          </p>
          <h3 className={inter.className} style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Subheading (Bold)</h3>
          <p className={inter.className} style={{ fontSize: '1rem', lineHeight: 1.7 }}>
            The quick brown fox jumps over the lazy dog. 1234567890. <br />
            <span style={{ fontWeight: 700 }}>This is bold text in Inter.</span>
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 320, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '2rem' }}>
          <h2 className={montserrat.className} style={{ fontSize: '2rem', marginBottom: '1rem' }}>Montserrat Heading</h2>
          <p className={montserrat.className} style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            This is Montserrat, a geometric sans-serif font with a modern, distinctive look. It is often used for headings and branding, but can be used for body text as well. Notice the rounder shapes and slightly more &quot;designed&quot; feel.
          </p>
          <h3 className={montserrat.className} style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Subheading (Bold)</h3>
          <p className={montserrat.className} style={{ fontSize: '1rem', lineHeight: 1.7 }}>
            The quick brown fox jumps over the lazy dog. 1234567890. <br />
            <span style={{ fontWeight: 700 }}>This is bold text in Montserrat.</span>
          </p>
        </div>
      </div>
    </main>
  );
} 