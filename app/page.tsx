import { groq } from 'next-sanity';
import { client } from 'lib/sanityClient';
import { Intro, ListPosts } from 'components';
import BaseLayout from './countries/layout';
import { imageFragment } from 'lib/fragments';

export default async function Homepage() {
  const posts = await client.fetch<Array<Article>>(postQuery);

  return (
    <BaseLayout hideSiteHeader>
      <Intro />
      <ListPosts posts={posts} />
    </BaseLayout>
  );
}

const postQuery = groq`
  *[_type == "post"] | order(publishedAt desc, _updatedAt desc) {
    _id,
    title,
    publishedAt,
    excerpt,
    "countries": countries[] -> {
      _id,
      countryCode,
      name,
      "slug": slug.current,
    },
    "slug": slug.current,
    mainImage { ${imageFragment} },
  }
`;
