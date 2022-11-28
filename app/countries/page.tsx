import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from 'lib/sanityClient';
import { Section } from 'components';

export default async function Countries() {
  const countries = await client.fetch<Array<Country>>(countryListQuery);

  return (
    <Section spacing="md">
      <div className="px-5 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-3 md:px-0">
        <div className="mb-8 space-y-4 md:mb-16 lg:mb-16">
          <h1 className="c-h1">Countries</h1>
          <p className="c-p-lg">List of all countries mentioned in the blog.</p>
        </div>
        <div>
          {countries.map((country) => (
            <h3 key={country._id} className="mb-5">
              <Link
                href={`/countries/${country.slug}`}
                className="mb-3 text-3xl leading-snug link"
                rel="bookmark"
              >
                {country.name}
              </Link>
            </h3>
          ))}
        </div>
      </div>
    </Section>
  );
}

const countryListQuery = groq`
  *[_type == "country"] | order(name asc) {
    _id,
    countryCode,
    name,
    "slug": slug.current,
  }
`;
