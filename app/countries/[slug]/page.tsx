import { client, getDocumentSlugs } from 'lib/sanityClient';
import { groq } from 'next-sanity';

async function fetchData(slug: string) {
  return await client.fetch<CountryWithRelatedPosts>(countryQuery, { slug });
}

export async function generateStaticParams() {
  return await getDocumentSlugs('country');
}

export default async function Country({ params }) {
  const country = await fetchData(params.slug);
  return (
    <div>
      <article>
        <h1>{country.name}</h1>
        <h2>Slug: /{country.slug}</h2>
      </article>
      <p>Related posts: {country.posts.length}</p>
      <ul>
        {country.posts.map((country) => (
          <li key={country._id}>{country.title}</li>
        ))}
      </ul>
    </div>
  );
}

const countryQuery = groq`
  *[_type == "country" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    "posts": *[_type == "post" && references(^._id)][] {
      _id,
      title,
    },
  }
`;
