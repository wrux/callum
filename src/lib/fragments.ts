import { groq } from 'next-sanity';

export const imageFragment = groq`
  ...,
  asset -> {
    ...,
    "alt": altText,
    metadata,
  },
`;
