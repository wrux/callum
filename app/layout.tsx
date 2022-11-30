import '@fontsource/inter/variable.css';
import Script from 'next/script';
import 'styles/main.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
