import { FC, PropsWithChildren } from 'react';
import { groq } from 'next-sanity';
import { client } from 'lib/sanityClient';
import { Intro, PostTeaser, Section } from 'components';

const PostTeaserWrapper: FC<PropsWithChildren<{ featured?: boolean }>> = ({
  children,
  featured = false,
}) =>
  featured ? (
    <Section>
      <div className="col-span-12 px-5 lg:col-start-3 lg:px-0">{children}</div>
    </Section>
  ) : (
    <Section>
      <div className="px-5 pt-6 border-t border-gray-300 md:col-span-8 md:col-start-2 lg:col-start-3 md:px-0 md:pt-8 lg:pt-12">
        {children}
      </div>
    </Section>
  );

export default async function Homepage() {
  const posts = await client.fetch<Array<Article>>(postQuery);

  return (
    <>
      <Intro />
      <Section>
        <div className="col-span-12 px-5 lg:col-start-3 lg:px-0">
          <h2 className="mb-8 c-h3">Latest Posts</h2>
        </div>
      </Section>
      {posts.map((post, index) => (
        <PostTeaserWrapper key={post._id} featured={index === 0}>
          <PostTeaser {...post} />
        </PostTeaserWrapper>
      ))}
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
