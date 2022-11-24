import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from 'lib/sanityClient';

async function fetchData() {
  return await client.fetch<Array<Country>>(countryListQuery);
}

export default async function Countries() {
  const countries = await fetchData();

  return (
    <div className="items-baseline gap-16 mb-10 md:grid grid-cols-1/3 md:mb-16">
      <div>
        <h1 className="md:w-1/2 lg:w-5/12">Countries</h1>
      </div>
      <div>
        {countries.map((country) => (
          <h3 key={country._id} className="mb-5">
            <Link
              href={`/countries/${country}`}
              className="mb-3 text-3xl leading-snug link"
              rel="bookmark"
            >
              {country.name}
            </Link>
          </h3>
        ))}
      </div>
    </div>
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
