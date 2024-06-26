import groq from 'groq';
import { sanityClient } from 'sanity:client';
import { imageFragment } from '../fragments';
import { articleCommonDataFragment } from '../fragments/articleCommonDataFragment';
import { articleTeaserFragment } from '../fragments/articleTeaserFragment';

export const getLatestPosts = async (limit: unknown | number = 9999) =>
  await sanityClient.fetch<ArticleTeaser[]>(
    groq`
    *[_type == "post"] | order(publishedAt desc, _updatedAt desc)[0...$limit] {
      ${articleTeaserFragment}
    }
  `,
    { limit },
  );

export const getPosts = async () =>
  await sanityClient.fetch<Article[]>(groq`
    *[_type == "post"] {
      content[] {
        ...,
        _type == "imageBlock" => {
          ${imageFragment('image')},
        },
        _type in ["imageGalleryBlock", "inlineImagesBlock"] => {
          images[] {
            _key,
            caption,
            ${imageFragment('image')},
          },
        },
      },
      "countries": countries[] -> {
        _id,
        countryCode,
        name,
        "slug": slug.current,
      },
      ${articleCommonDataFragment}
    }
  `);
