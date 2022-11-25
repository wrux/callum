import PageHead from 'components/PageHead';
import { getDocumentMeta } from 'lib/sanityClient';
import { groq } from 'next-sanity';

type Params = {
  slug: string;
};

export default async function Head({ params }: NextPage<Params>) {
  const { seo, additionalData } = await getDocumentMeta<
    Pick<Country, 'description' | 'name'>
  >(params.slug, groq`description, name`);

  return (
    <PageHead
      seo={seo}
      fallbacks={{
        metaTitle: additionalData?.name,
        metaDescription: additionalData?.description,
        sharingTitle: additionalData?.name,
        sharingDescription: additionalData?.description,
      }}
      path={`/countries/${params.slug}`}
    />
  );
}
