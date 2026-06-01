import groq from 'groq';
import { sanityClient } from '~/sanity/client';
import { imageFragment } from '../fragments';
import { articleCommonDataFragment } from '../fragments/articleCommonDataFragment';
import { articleTeaserFragment } from '../fragments/articleTeaserFragment';

let latestPostsPromise: Promise<ArticleTeaser[]> | undefined;
let postsPromise: Promise<Article[]> | undefined;

const sortByPublishDate = <
  T extends { _updatedAt?: string; publishedAt?: string },
>(
  posts: T[],
) =>
  [...posts].sort((a, b) => {
    const publishedAt =
      new Date(b.publishedAt || 0).getTime() -
      new Date(a.publishedAt || 0).getTime();

    if (publishedAt !== 0) {
      return publishedAt;
    }

    return (
      new Date(b._updatedAt || 0).getTime() -
      new Date(a._updatedAt || 0).getTime()
    );
  });

const toArticleTeaser = (post: Article): ArticleTeaser => ({
  _id: post._id,
  countries: post.countries,
  excerpt: post.excerpt,
  mainImage: post.mainImage,
  readingTime: post.readingTime,
  slug: post.slug,
  title: post.title,
});

export const getLatestPosts = async (limit: number = 9999) => {
  try {
    if (import.meta.env.PROD) {
      const posts = await getPosts();

      return sortByPublishDate(posts).slice(0, limit).map(toArticleTeaser);
    }

    latestPostsPromise ??= sanityClient.fetch<ArticleTeaser[]>(
      groq`
      *[_type == "post"] | order(publishedAt desc, _updatedAt desc) {
        ${articleTeaserFragment}
      }
    `,
    );

    return (await latestPostsPromise).slice(0, limit);
  } catch (error) {
    console.error('Failed to fetch latest posts:', error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    postsPromise ??= sanityClient.fetch<Article[]>(groq`
      *[_type == "post"] | order(publishedAt desc, _updatedAt desc) {
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

    return await postsPromise;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    throw error;
  }
};
