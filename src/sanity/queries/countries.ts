import groq from 'groq';
import { sanityClient } from 'sanity:client';
import { articleTeaserFragment } from '../fragments/articleTeaserFragment';

export const getCountryList = async () =>
  await sanityClient.fetch<Country[]>(
    groq`*[_type == "country"] | order(name asc) {
      _id,
      countryCode,
      name,
      "slug": slug.current,
    }`,
  );

export const getCountries = async () =>
  await sanityClient.fetch<CountryWithPosts[]>(
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
