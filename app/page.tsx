import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from 'lib/sanityClient';

async function fetchData() {
  return await client.fetch<Array<Article>>(postQuery);
}

export default async function Homepage() {
  const posts = await fetchData();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome to Bloke Blog</h1>
      <p>Posts: {posts.length}</p>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
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
