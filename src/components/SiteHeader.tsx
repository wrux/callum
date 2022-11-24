import { FC } from 'react';
import Link from 'next/link';
import { Container, Logo } from 'components';

const SiteHeader: FC = () => (
  <header>
    <Container>
      <h2 className="flex items-baseline mt-8 mb-20 c-h4">
        <Logo className="self-center mr-3 text-step-3" />
        <Link href="/" className="link-reverse">
          Callum.
        </Link>
        <Link href="/countries" className="ml-4 c-p-lg link-reverse">
          Countries
        </Link>
      </h2>
    </Container>
  </header>
);

export default SiteHeader;
