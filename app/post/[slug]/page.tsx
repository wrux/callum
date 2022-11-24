import {
  Container,
  CountryList,
  CoverImage,
  Date,
  PortableText,
} from 'components';
import { client, getDocumentSlugs } from 'lib/sanityClient';
import { groq } from 'next-sanity';

async function fetchData(slug: string) {
  return await client.fetch<Article>(postQuery, { slug });
}

export async function generateStaticParams() {
  return await getDocumentSlugs('post');
}

interface PostPageParams {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostPageParams) {
  const post = await fetchData(params.slug);

  return (
    <article>
      <Container>
        <h1 className="mb-12 c-h1">{post.title}</h1>
        {post.countries && post.countries.length > 0 && (
          <CountryList className="mb-8" countries={post.countries} large />
        )}
        <CoverImage
          className="mb-8 md:mb-16"
          title={post.title}
          image={post.mainImage}
          priority
        />
        <div className="max-w-2xl mx-auto mb-6 text-lg">
          <Date dateString={post.publishedAt} />
        </div>
      </Container>
      <PortableText value={post.content} />
    </article>
  );
}

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    publishedAt,
    excerpt,
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
