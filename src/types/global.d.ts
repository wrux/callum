import { SanityDocument, SanityImageAssetDocument } from '@sanity/client';

declare global {
  interface Country extends SanityDocument {
    countryCode: string;
    name: string;
    slug: string;
  }

  type CountryTeaser = Pick<Country, '_id' | 'countryCode' | 'name' | 'slug'>;

  interface CountryWithRelatedPosts extends Country {
    posts: Array<ArticleTeaser>;
  }

  interface Article extends SanityDocument {
    _id: string;
    title: string;
    publishedAt: string;
    excerpt?: string;
    countries: Array<CountryTeaser>;
    slug: string;
    mainImage: SanityImageAssetDocument;
  }

  type ArticleTeaser = Pick<
    Article,
    '_id' | 'countries' | 'excerpt' | 'mainImage' | 'slug' | 'title'
  >;
}

export {};
