import { groq } from 'next-sanity';

import { Link, Section } from '~/components';
import { FadeIn } from '~/components/animations';
import { client } from '~/sanity/lib/client';

export const revalidate = 300;

export const dynamic = 'force-static';

export default async function Countries() {
  const countries = await client.fetch<Array<Country>>(countryListQuery);

  return (
    <Section spacing="md">
      <div className="px-5 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-3 md:px-0">
        <FadeIn delay={0.25} duration={0.75}>
          <div className="mb-8 space-y-4 md:mb-16 lg:mb-16">
            <h1 className="c-h1">Countries</h1>
            <p className="c-p-lg">Countries mentioned in the blog.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.75} duration={0.75}>
          <div className="gap-2">
            {countries.map((country) => (
              <h3 key={country._id} className="mb-5">
                <Link
                  href={`/countries/${country.slug}`}
                  className="mb-3 text-3xl leading-snug"
                  variant="reverse"
                  rel="bookmark"
                >
                  {country.name}
                </Link>
              </h3>
            ))}
          </div>
        </FadeIn>
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
