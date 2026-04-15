import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-cormorant'
});

const ebGaramond = EB_Garamond({ 
  subsets: ["latin"],
  variable: '--font-eb-garamond' 
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: "HealersMeet · Learning Portal",
  description: "Decode Life Transformation and Advanced Healing Courses",
};

import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${ebGaramond.variable} ${montserrat.variable} body-text antialiased`}>
        {/* Navigation Bar */}
        <nav style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: 'rgba(7, 14, 39, 0.97)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          borderBottom: '2px solid var(--gold)',
          height: '60px'
        }}>
          <div style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--gold)', fontSize: '1.2rem', fontWeight: 700 }}>
            HealersMeet LMS
          </div>
          <div className="font-sans" style={{ display: 'flex', gap: '20px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
            <Link href="/" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Dashboard</Link>
            <Link href="/programs" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}>Programs</Link>
            <Link href="/account" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}>Account</Link>
          </div>
        </nav>

        {/* Main Content Payload */}
        <main style={{ paddingTop: '60px', minHeight: '100vh' }}>
          {children}
        </main>

      </body>
    </html>
  );
}
