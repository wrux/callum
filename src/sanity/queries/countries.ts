import groq from 'groq';
import { sanityClient } from 'sanity:client';
import { articleTeaserFragment } from '../fragments/articleTeaserFragment';

export const getCountries = async () => {
  try {
    return await sanityClient.fetch<CountryWithPosts[]>(
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
