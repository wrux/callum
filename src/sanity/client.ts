import { createClient } from '@sanity/client';
import { dataset, projectId } from './config';

export const sanityClient = createClient({
  apiVersion: '2024-01-01',
  dataset,
  projectId,
  useCdn: false,
});
