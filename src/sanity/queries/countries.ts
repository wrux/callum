import groq from 'groq';
import { sanityFetch } from '~/sanity/client';
import { articleTeaserFragment } from '../fragments/articleTeaserFragment';

export const getCountries = async () => {
  try {
    return await sanityFetch<CountryWithPosts[]>(
      groq`*[_type == "country"] {
        _id,
        countryCode,
        name,
        "slug": slug.current,
        "posts":
          *[_type == "post" && references(^._id)] | order(publishedAt desc, _updatedAt desc)[] {
            ${articleTeaserFragment}
          },
      }`,
    );
  } catch (error) {
    console.error('Failed to fetch countries:', error);
    throw error;
  }
};
