import { client, getDocumentSlugs } from 'lib/sanityClient';
import { groq } from 'next-sanity';
import { PostTeaser } from 'components';
import countryCodeEmoji from 'country-code-emoji';

async function fetchData(slug: string) {
  return await client.fetch<CountryWithRelatedPosts>(countryQuery, { slug });
}

export async function generateStaticParams() {
  return await getDocumentSlugs('country');
}

export default async function Country({ params }: { params: any }) {
  const country = await fetchData(params.slug);
  return (
    <div className="gap-16 px-5 mx-auto md:grid grid-cols-1/3 max-w-screen-2xl sm:px-12 md:px-16 2xl:px-5">
      <article>
        {country.countryCode && (
          <span className="c-h1" role="presentation">
            {countryCodeEmoji(country.countryCode)}
          </span>
        )}
        <h1 className="c-h1">{country.name}</h1>
      </article>
      <div className="grid gap-16">
        {country.posts.map((post) => (
          <PostTeaser key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
}

const countryQuery = groq`
  *[_type == "country" && slug.current == $slug][0] {
    _id,
    countryCode,
    name,
    "slug": slug.current,
    "posts": *[_type == "post" && references(^._id)][] {
      _id,
      title,
      mainImage,
      "slug": slug.current,
    },
  }
`;
