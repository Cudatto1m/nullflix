import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';

const interfont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NULLFLIX - Phim không giới hạn',
  description: 'NULLFLIX: Phim không giới hạn',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'NULLFLIX',
    statusBarStyle: 'black-translucent'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#141414',
};

export default function rootlayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={interfont.className}>
        <div id="loader-screen" className="loader-overlay" aria-hidden="true">
          <div className="loader-inner">
            <div className="loader-logo">
              <span>N</span>ULLFLIX
            </div>
            <div className="loader-bar">
              <div className="loader-bar-fill"></div>
            </div>
          </div>
        </div>
        {children}

        {/* Quảng cáo */}
        <Script src="https://pl29585950.effectivecpmnetwork.com/b4/f6/6d/b4f66d8164cde77c4a65e7b5308db2df.js" strategy="afterInteractive" />
        <Script src="https://pl29585951.effectivecpmnetwork.com/dbdc7ee407ca465e1a9aabcfb3811f80/invoke.js" strategy="afterInteractive" />
        <div id="container-dbdc7ee407ca465e1a9aabcfb3811f80" style={{ textAlign: 'center' }}></div>
        <a href="https://www.effectivecpmnetwork.com/hnfbydp6y?key=3ea438eb6477bd24b02155b23ad25e74" target="_blank" style={{ display: 'none' }}>Ad Link</a>
        <Script src="https://pl29585959.effectivecpmnetwork.com/8b/ff/43/8bff438a1dd469d893d21e7c258d7d92.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
