import { FC } from 'react';
import Link from 'next/link';
import { Logo } from 'components';

const Intro: FC = () => (
  <section className="mt-16 mb-16 md:items-baseline md:justify-between md:mb-12">
    <Logo className="mb-4 text-6xl lg:text-8xl md:mb-8" />
    <h1 className="mb-4 text-6xl font-bold leading-tight tracking-tight md:mb-8 md:text-8xl md:pr-8">
      Callum.co.uk
    </h1>
    <h4 className="text-lg md:text-left md:text-2xl">
      My travel blog from many{' '}
      <Link href="/countries" className="link">
        Countries
      </Link>{' '}
      all around the world.
    </h4>
  </section>
);

export default Intro;
