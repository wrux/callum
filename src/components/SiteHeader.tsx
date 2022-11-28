'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from 'components';

const SiteHeader: FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let oldValue = 0;
    let newValue = 0;

    const handleVisibility = () => {
      newValue = window.pageYOffset;
      if (window.pageYOffset < 500 || oldValue - newValue > 0) {
        setShow(true);
      } else if (oldValue - newValue < 0) {
        setShow(false);
      }
      oldValue = newValue;
    };

    window.addEventListener('scroll', handleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', handleVisibility);
  }, []);

  return (
    <header
      className="sticky top-0 py-2 transition-transform duration-500 bg-white bg-opacity-80 backdrop-blur-lg"
      style={{
        transform: `translateY(${show ? '0%' : '-100%'})`,
      }}
    >
      <Container>
        <div className="flex items-baseline justify-between w-full gap-8 md:justify-start">
          <Link href="/" className="c-p-lg link-reverse">
            callum.co.uk
          </Link>
          <nav className="flex gap-4">
            <Link href="/" className="c-p link-reverse">
              Home
            </Link>
            <Link href="/countries" className="c-p link-reverse">
              Countries
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default SiteHeader;
