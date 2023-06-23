import Script from 'next/script';
import { Inter } from 'next/font/google';

import '~/styles/main.css';

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
      <body>{children}</body>
      <Script
        src="/stats/js/script.js"
        strategy="afterInteractive"
        data-api="/stats/api/event"
        data-domain="callum.co.uk"
      />
    </html>
  );
}
