import { groq } from 'next-sanity';
import { client } from 'lib/sanityClient';
import { Intro, PostTeaser, SiteFooter } from 'components';

export default async function Homepage() {
  const posts = await client.fetch<Array<Article>>(postQuery);

  return (
    <>
      <div className="gap-16 px-5 mx-auto md:grid grid-cols-1/3 max-w-screen-2xl sm:px-12 md:px-16 2xl:px-5">
        <div className="relative">
          <div className="md:sticky md:top-24 md:mb-48">
            <Intro />
          </div>
        </div>
        <div className="grid gap-4 md:gap-8 md:py-16">
          {posts.map((post) => (
            <PostTeaser key={post._id} {...post} />
          ))}
        </div>
      </div>
      <SiteFooter />
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
