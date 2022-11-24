import Link from 'next/link';
import 'styles/main.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <p>
            <Link href="/">Bloke Blog</Link>
          </p>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/countries">Countries</Link>
            </li>
          </ul>
        </header>
        <hr />
        <hr />
        <main>{children}</main>
        <hr />
        <hr />
        <footer>
          <p>
            <Link href="/">Bloke Blog</Link>
          </p>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/countries">Countries</Link>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
