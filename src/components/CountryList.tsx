import { FC } from 'react';
import Link from 'next/link';
import cn from 'clsx';
import countryCodeEmoji from 'country-code-emoji';

export type CountryListProps = PropsWithClassName<{
  countries: Array<CountryTeaser>;
  large?: boolean;
}>;

const CountryList: FC<CountryListProps> = ({
  className,
  countries,
  large = false,
}) => (
  <p
    className={cn(
      'flex items-center leading-none',
      large ? 'gap-4' : 'gap-2',
      className
    )}
  >
    <span className="sr-only">Countries:</span>
    {countries.map((country) => (
      <Link
        key={country._id}
        href={`/countries/${country.slug}`}
        aria-label={`View all posts in ${country.name}`}
      >
        {country.countryCode ? (
          <span
            className={large ? 'text-step-3' : 'text-step-1'}
            role="presentation"
          >
            {countryCodeEmoji(country.countryCode)}
          </span>
        ) : (
          <span className="c-p-sm">{country.name}</span>
        )}
      </Link>
    ))}
  </p>
);

export default CountryList;
