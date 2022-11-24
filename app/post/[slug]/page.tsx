import { client } from 'lib/sanityClient';
import { groq } from 'next-sanity';

async function fetchData(slug: string) {
  return await client.fetch<Article>(postQuery, { slug });
}

export async function generateStaticParams() {
  return await client.fetch(
    groq`*[_type == "post"][] { "slug": slug.current }`
  );
}

export default async function Post({ params }) {
  const post = await fetchData(params.slug);
  return (
    <article>
      <h1>{post.title}</h1>
      <h2>Slug: /{post.slug}</h2>
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
