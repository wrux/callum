import PageHead from 'components/PageHead';
import { getDocumentMeta } from 'lib/sanityClient';
import { groq } from 'next-sanity';

type Params = {
  slug: string;
};

export default async function Head({ params }: NextPage<Params>) {
  const { seo, additionalData } = await getDocumentMeta<
    Pick<Article, 'title' | 'excerpt' | 'mainImage'>
  >(params.slug, groq`title, excerpt, mainImage`);

  return (
    <PageHead
      seo={seo}
      fallbacks={{
        metaTitle: additionalData?.title,
        metaDescription: additionalData?.excerpt,
        sharingTitle: additionalData?.title,
        sharingDescription: additionalData?.excerpt,
        sharingImage: additionalData?.mainImage,
      }}
      path={`/post/${params.slug}`}
    />
  );
}
