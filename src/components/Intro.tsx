import { FC } from 'react';
import Link from 'next/link';
import { Logo } from 'components';

const Intro: FC = () => (
  <section className="mt-16 mb-16 md:items-baseline md:justify-between md:mb-12">
    <Logo className="mb-4 md:mb-8 text-step-5" />
    <h1 className="mb-4 md:mb-8 c-h1">Callum.co.uk</h1>
    <h2 className="c-h4">
      My travel blog from many{' '}
      <Link href="/countries" className="link">
        Countries
      </Link>{' '}
      all around the world.
    </h2>
  </section>
);

export default Intro;
