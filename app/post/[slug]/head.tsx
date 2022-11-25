import PageHead from 'components/PageHead';
import { getDocumentMeta } from 'lib/sanityClient';
import { groq } from 'next-sanity';

interface PostPageParams {
  params: {
    slug: string;
  };
}

export default async function Head({ params }: PostPageParams) {
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
