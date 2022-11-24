import { FC } from 'react';
import Link from 'next/link';
import { Container, Logo } from 'components';

const SiteHeader: FC = () => (
  <header>
    <Container>
      <h2 className="flex items-baseline mt-8 mb-20 font-bold leading-tight tracking-tight md:tracking-tighter">
        <Logo className="self-center mr-3 text-2xl md:text-4xl" />
        <span className="text-2xl md:text-4xl">
          <Link href="/" className="link">
            Callum.co.uk
          </Link>
          .
        </span>
        <Link href="/countries" className="ml-4 text-xl md:text-2xl link">
          Countries
        </Link>
      </h2>
    </Container>
  </header>
);

export default SiteHeader;
