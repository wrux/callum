import { client, getDocumentSlugs } from 'lib/sanityClient';
import { groq } from 'next-sanity';
import { ListPosts, Section } from 'components';
import countryCodeEmoji from 'country-code-emoji';

export async function generateStaticParams() {
  return await getDocumentSlugs('country');
}

interface CountryPageParams {
  params: {
    slug: string;
  };
}

export default async function Country({ params }: CountryPageParams) {
  const country = await client.fetch<CountryWithRelatedPosts>(countryQuery, {
    slug: params.slug,
  });

  return (
    <>
      <article>
        <Section spacing="none">
          <div className="flex flex-col col-span-8 px-5 py-8 lg:col-start-3 lg:px-0 md:py-16 lg:py-24">
            {country.countryCode && (
              <span className="c-h1" role="presentation">
                {countryCodeEmoji(country.countryCode)}
              </span>
            )}
            <h1 className="c-h1">{country.name}</h1>
          </div>
        </Section>
      </article>
      <ListPosts
        posts={country.posts}
        title={`Latest posts in ${country.name}`}
      />
    </>
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
      excerpt,
      title,
      mainImage,
      "slug": slug.current,
    },
  }
`;
