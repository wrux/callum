// async function fetchData() {
//   const res = await fetch(`https://.../data`, { cache: 'no-store' });
//   const data = await res.json();

//   return data;
// }

export default async function Post({ params }) {
  // const data = await fetchData();
  return (
    <article>
      <h1>This is an article!</h1>
      <h2>Slug: /{params.slug}</h2>
    </article>
  );
}
