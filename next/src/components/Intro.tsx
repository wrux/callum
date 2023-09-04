import { FC } from 'react';

import { Link, Section, Wordmark } from '~/components';

import { FadeIn } from './animations';

const Intro: FC = () => (
  <FadeIn delay={0.25} duration={0.75}>
    <Section spacing="md">
      <div className="flex flex-col justify-center col-span-12 px-5 py-6 mb-16 lg:col-start-3 lg:px-0 md:mb-0">
        <p className="text-step-5">
          <span className="inline-block origin-[70% 70%] leading-none animate-wave">
            👋🏻
          </span>
        </p>
        <h1 className="mb-4">
          <Wordmark size={6} />
        </h1>
        <h2 className="max-w-2xl c-p-lg">
          My travel blog from many <Link href="/countries">countries</Link> all
          around the world.
        </h2>
      </div>
    </Section>
  </FadeIn>
);

export default Intro;