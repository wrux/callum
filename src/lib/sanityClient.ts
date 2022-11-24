import { createClient, groq } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: typeof document !== 'undefined',
});

export const getDocumentSlugs = async (documentType: string) =>
  await client.fetch(
    groq`*[_type == $documentType][] { "slug": slug.current }`,
    { documentType }
  );
