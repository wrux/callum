import { FC } from 'react';
import Link from 'next/link';
import cn from 'clsx';
import countryCodeEmoji from 'country-code-emoji';

export type CountryListProps = {
  className?: string;
  countries: Array<CountryTeaser>;
  large?: boolean;
};

const CountryList: FC<CountryListProps> = ({
  className,
  countries,
  large = false,
}) => (
  <p
    className={cn(
      'flex items-center leading-none',
      large ? 'text-4xl md:text-6xl gap-4' : 'text-4xl gap-2',
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
          <span role="presentation">
            {countryCodeEmoji(country.countryCode)}
          </span>
        ) : (
          country.name
        )}
      </Link>
    ))}
  </p>
);

export default CountryList;
