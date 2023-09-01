import { createClient } from '@sanity/client';
import { groq } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const getDocumentSlugs = async (documentType: string) =>
  await client.fetch<string[]>(
    groq`*[_type == $documentType][] { "slug": slug.current }`,
    { documentType }
  );

export const getDocumentMeta = async <T extends object>(
  slug: string,
  additionalData: string = ''
): Promise<{
  seo: MetaData;
  additionalData: T;
}> => {
  const query = groq`*[slug.current == $slug][0] { seo, ${additionalData} }`;
  const { seo, ...data } = await client.fetch(query, { slug });
  return { seo, additionalData: data };
};
