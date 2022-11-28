'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Section } from 'components';

const Intro: FC = () => (
  <Section spacing="none">
    <div className="flex flex-col justify-center col-span-12 px-5 py-6 mb-16 md:py-0 lg:col-start-3 md:min-h-most lg:px-0 md:mb-0">
      <p className="text-step-5">
        <span className="inline-block wave animate-wave">👋🏻</span>
      </p>
      <h1 className="mb-4 c-h1">callum.co.uk</h1>
      <h2 className="max-w-2xl c-h4">
        My travel blog from many{' '}
        <Link href="/countries" className="link">
          countries
        </Link>{' '}
        all around the world.
      </h2>
    </div>
  </Section>
);

export default Intro;
