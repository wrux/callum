import PageHead from 'components/PageHead';
import { getDocumentMeta } from 'lib/sanityClient';
import { groq } from 'next-sanity';

interface CountriesPageParams {
  params: {
    slug: string;
  };
}

export default async function Head({ params }: CountriesPageParams) {
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
