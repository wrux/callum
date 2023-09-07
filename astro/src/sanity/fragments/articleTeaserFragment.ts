import groq from 'groq';
import { articleCommonDataFragment } from './articleCommonDataFragment';

export const articleTeaserFragment = groq`
  "countries": countries[] -> {
    _id,
    countryCode,
    name,
    "slug": slug.current,
  },
  ${articleCommonDataFragment}
`;
