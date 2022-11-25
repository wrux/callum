import PageHead from 'components/PageHead';
import { client, getDocumentMeta } from 'lib/sanityClient';
import { groq } from 'next-sanity';

type Params = {
  slug: string;
};

export default async function Head({ params }: NextPage<Params>) {
  const seo = await getDocumentMeta(params.slug);
  const post = await client.fetch<
    Pick<Article, 'title' | 'excerpt' | 'mainImage'>
  >(query, { slug: params.slug });

  return (
    <PageHead
      seo={seo}
      fallbacks={{
        metaTitle: post.title,
        metaDescription: post.excerpt,
        sharingTitle: post.title,
        sharingDescription: post.excerpt,
        sharingImage: post.mainImage,
      }}
      path={`/post/${params.slug}`}
    />
  );
}

const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    excerpt,
    mainImage,
  }
`;
