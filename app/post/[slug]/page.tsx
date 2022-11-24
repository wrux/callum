import { Container, CountryList, CoverImage, Date } from 'components';
import { client, getDocumentSlugs } from 'lib/sanityClient';
import { groq } from 'next-sanity';

async function fetchData(slug: string) {
  return await client.fetch<Article>(postQuery, { slug });
}

export async function generateStaticParams() {
  return await getDocumentSlugs('post');
}

export default async function Post({ params }) {
  const post = await fetchData(params.slug);
  return (
    <article>
      <Container>
        <h1 className="mb-12 text-6xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl md:leading-none md:text-left">
          {post.title}
        </h1>
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
    </article>
  );
}

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
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
