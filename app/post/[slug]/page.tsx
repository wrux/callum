import {
  CountryList,
  CoverImage,
  Date,
  PortableText,
  Section,
} from 'components';
import { client, getDocumentSlugs } from 'lib/sanityClient';
import { groq } from 'next-sanity';

export const revalidate = 300;

export async function generateStaticParams() {
  return await getDocumentSlugs('post');
}

interface PostPageParams {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostPageParams) {
  const post = await client.fetch<Article>(postQuery, { slug: params.slug });

  return (
    <article>
      <Section spacing="none">
        <div className="flex flex-col col-span-8 gap-8 px-5 py-8 lg:col-start-3 lg:px-0 md:py-16">
          {post?.countries && post?.countries.length > 0 && (
            <CountryList countries={post.countries} large />
          )}
          <h1 className="c-h2">{post.title}</h1>
          <p className="c-p-sm">
            <Date dateString={post.publishedAt} />
          </p>
        </div>
      </Section>
      <Section spacing="none">
        <div className="col-span-12 lg:col-span-8 lg:col-start-3">
          <CoverImage
            className="mx-auto mb-8 md:mb-16 max-w-screen-2xl"
            title={post.title}
            image={post.mainImage}
            priority
          />
        </div>
      </Section>
      <PortableText value={post.content} />
    </article>
  );
}

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    publishedAt,
    content,
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
