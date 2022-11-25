import { createClient, groq } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || '';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: typeof document !== 'undefined',
});

export const getDocumentSlugs = async (documentType: string) =>
  await client.fetch<string[]>(
    groq`*[_type == $documentType][] { "slug": slug.current }`,
    { documentType }
  );

export const getDocumentMeta = async (slug: string) =>
  await client.fetch<MetaData>(groq`*[slug.current == $slug][0].seo`, { slug });
