import { FC, PropsWithChildren } from 'react';
import { groq } from 'next-sanity';
import { client } from 'lib/sanityClient';
import { Intro, ListPosts, PostTeaser, Section } from 'components';

export default async function Homepage() {
  const posts = await client.fetch<Array<Article>>(postQuery);

  return (
    <>
      <Intro />
      <ListPosts posts={posts} title="Latest Posts" />
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
    mainImage,
  }
`;
