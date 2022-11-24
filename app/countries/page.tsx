import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from 'lib/sanityClient';

async function fetchData() {
  return await client.fetch<Array<Country>>(countryListQuery);
}

export default async function Countries() {
  const countries = await fetchData();

  return (
    <div>
      <h1>List Countries:</h1>
      <p>Number of countries: {countries.length}</p>
      <ul>
        {countries.map((country) => (
          <li key={country._id}>
            <Link href={`/countries/${country.slug}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
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
