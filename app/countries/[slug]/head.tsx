import PageHead from 'components/PageHead';
import { client, getDocumentMeta } from 'lib/sanityClient';
import { groq } from 'next-sanity';

type Params = {
  slug: string;
};

export default async function Head({ params }: NextPage<Params>) {
  const seo = await getDocumentMeta(params.slug);
  const country = await client.fetch<Pick<Country, 'description' | 'name'>>(
    query,
    { slug: params.slug }
  );

  return (
    <PageHead
      seo={seo}
      fallbacks={{
        metaTitle: country?.name,
        metaDescription: country?.description,
        sharingTitle: country?.name,
        sharingDescription: country?.description,
      }}
      path={`/countries/${params.slug}`}
    />
  );
}

const query = groq`
  *[_type == "country" && slug.current == $slug][0] {
    description,
    name,
  }
`;
