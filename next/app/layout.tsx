import '~/styles/main.css';

import { Inter } from 'next/font/google';
import Script from 'next/script';

const env = process.env.NODE_ENV || 'dev';

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${sans.variable}`} suppressHydrationWarning>
      <head>
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>{children}</body>
      {env === 'production' && (
        <Script
          src="/stats/js/script.js"
          strategy="afterInteractive"
          data-api="/stats/api/event"
          data-domain="callum.co.uk"
        />
      )}
    </html>
  );
}
