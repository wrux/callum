import { createClient } from '@sanity/client';
import { dataset, projectId } from './config';

// Used for image URL building (no network requests).
export const sanityClient = createClient({
  apiVersion: '2024-01-01',
  dataset,
  projectId,
  useCdn: import.meta.env.PROD,
  perspective: 'published',
});

// Production builds query the CDN endpoint: it is faster than the live API
// and the responses are cached at the edge. Dev uses the live API so content
// edits show up immediately.
const apiHost = import.meta.env.PROD
  ? `${projectId}.apicdn.sanity.io`
  : `${projectId}.api.sanity.io`;

// Query over plain fetch rather than sanityClient.fetch: the client's
// node-http transport intermittently dies with ECONNRESET during `astro
// build`, which slowed builds down with retry backoff or killed them
// outright. Native fetch has proven reliable, and a transparent retry mops up
// anything transient that remains.
export const sanityFetch = async <T>(query: string): Promise<T> => {
  const url =
    `https://${apiHost}/v2024-01-01/data/query/${dataset}` +
    `?query=${encodeURIComponent(query)}&perspective=published&returnQuery=false`;
  const attempts = 3;

  for (let attempt = 1; ; attempt++) {
    try {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(15_000),
      });

      if (response.status >= 500 || response.status === 429) {
        throw new Error(
          `Sanity query failed: ${response.status} ${response.statusText}`,
        );
      }

      if (!response.ok) {
        // Client errors (bad query, auth) will not succeed on retry.
        throw Object.assign(
          new Error(
            `Sanity query failed: ${response.status} ${response.statusText}`,
          ),
          { permanent: true },
        );
      }

      const { result } = (await response.json()) as { result: T };
      return result;
    } catch (error) {
      if (attempt >= attempts || (error as { permanent?: boolean }).permanent) {
        throw error;
      }
      console.warn(
        `Sanity fetch failed (attempt ${attempt}/${attempts}), retrying...`,
        (error as { code?: string }).code ??
          (error as { cause?: { code?: string; message?: string } }).cause
            ?.code ??
          (error as { cause?: { message?: string } }).cause?.message ??
          (error as Error).message,
      );
    }
  }
};
