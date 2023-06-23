import countryCodeEmoji from 'country-code-emoji';
import { groq } from 'next-sanity';

import { ListPosts, Section } from '~/components';
import { FadeIn } from '~/components/animations';
import { imageFragment } from '~/lib/fragments';
import { client, getDocumentSlugs } from '~/sanity/lib/client';

export const revalidate = 300;

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return await getDocumentSlugs('country');
}

interface CountryPageParams {
  params: {
    slug: string;
  };
}

export default async function Country({ params }: CountryPageParams) {
  const country = await client.fetch<CountryWithPosts>(countryQuery, {
    slug: params.slug,
  });

  return (
    <>
      <article>
        <FadeIn delay={0.25} duration={0.75}>
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
        </FadeIn>
      </article>
      <ListPosts posts={country.posts} />
    </>
  );
}

const countryQuery = groq`
  *[_type == "country" && slug.current == $slug][0] {
    _id,
    countryCode,
    name,
    "slug": slug.current,
    "posts": *[_type == "post" && references(^._id)]|order(publishedAt desc, _updatedAt desc)[] {
      _id,
      excerpt,
      title,
      mainImage { ${imageFragment} },
      "slug": slug.current,
    },
  }
`;
