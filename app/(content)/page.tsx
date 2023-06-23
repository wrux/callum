import { groq } from 'next-sanity';

import { Intro, ListPosts } from '~/components';
import { imageFragment } from '~/lib/fragments';
import { client } from '~/sanity/lib/client';

export const revalidate = 300;

export const dynamic = 'force-static';

export default async function Homepage() {
  const posts = await client.fetch<Array<Article>>(postQuery);

  return (
    <>
      <Intro />
      <ListPosts posts={posts} />
    </>
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
