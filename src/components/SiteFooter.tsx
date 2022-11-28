'use client';

import { FC } from 'react';
import Link from 'next/link';
import cn from 'clsx';
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { Container } from 'components';

const WruxLogo: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="1em"
    height="1em"
    viewBox="0 0 312 216"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M311.7 0L241.6 216H181L251.2 0H311.7ZM190.5 0L120.4 216H59.8L130 0H190.5ZM64.2 0H0.300003V61.2H64.2V0Z"
      fill="currentColor"
    />
  </svg>
);

interface IconLinkProps {
  href: string;
  icon: any;
  label: string;
  noFollow?: boolean;
  wruxBrand?: boolean;
}

const IconLink: FC<IconLinkProps> = ({
  href,
  icon: Icon,
  label,
  noFollow = false,
  wruxBrand = false,
}) => (
  <a
    href={href}
    title={label}
    aria-label={label}
    target="_blank"
    rel={noFollow ? 'noreferrer nofollow' : 'noreferrer'}
    className={cn(
      'transition-colors',
      wruxBrand
        ? 'hover:text-wrux focus:text-wrux'
        : 'hover:text-brand focus:text-brand'
    )}
  >
    <Icon className="text-step-2" />
  </a>
);

const SiteFooter: FC = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="py-16 text-white bg-black">
      <Container>
        <p className="mb-8 md:mb-16 c-h4">callum.co.uk</p>
        <div className="grid gap-y-16 gap-x-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1">
            <p className="mb-6 c-h5">Navigation</p>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link href="/" className="c-p link-reverse">
                Home
              </Link>
              <Link href="/countries" className="c-p link-reverse">
                Countries
              </Link>
            </nav>
          </div>
          <aside className="col-span-1">
            <p className="mb-6 c-h5">Links</p>
            <nav aria-label="External links" className="flex gap-2">
              <IconLink
                href="https://wrux.com"
                icon={WruxLogo}
                label="View my professional website wrux.com"
                noFollow
                wruxBrand
              />
              <IconLink
                href="https://www.instagram.com/etocallum"
                icon={InstagramLogo}
                label="Follow me on Instagram"
                noFollow
              />
              <IconLink
                href="https://github.com/wrux"
                icon={GithubLogo}
                label="View my Github profile"
                noFollow
              />
              <IconLink
                href="https://www.linkedin.com/in/callum-bonnyman"
                icon={LinkedinLogo}
                label="Find me on LinkedIn"
                noFollow
              />
            </nav>
          </aside>
          <aside className="col-span-2">
            <p className="mb-6 c-h5">Like this website?</p>
            <p className="c-p">
              If you like this website,{' '}
              <a
                href="https://github.com/wrux/bloke"
                target="_blank"
                className="link"
                rel="noreferrer nofollow"
              >
                view the source code
              </a>
              , fork the project and take whatever you like.
            </p>
          </aside>
          <div className="col-span-2 lg:col-span-4">
            <p className="mb-4 c-p-sm">
              Copyright &copy;{' '}
              <a
                href="https://wrux.com"
                target="_blank"
                className="link"
                aria-label="View my professional profile at wrux.com"
                rel="noreferrer"
              >
                Callum Bonnyman
              </a>{' '}
              {thisYear}.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default SiteFooter;
