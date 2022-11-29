import { FC } from 'react';
import Link from 'next/link';
import { Section, Wordmark } from 'components';

const Intro: FC = () => (
  <Section spacing="md">
    <div className="flex flex-col justify-center col-span-12 px-5 py-6 mb-16 lg:col-start-3 lg:px-0 md:mb-0">
      <p className="text-step-5">
        <span className="inline-block wave animate-wave">👋🏻</span>
      </p>
      <h1 className="mb-4">
        <Wordmark size={6} />
      </h1>
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
