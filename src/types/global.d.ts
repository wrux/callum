import { SanityDocument, SanityImageAssetDocument } from '@sanity/client';
import { PortableTextBlock } from '@portabletext/types';
import { Block } from 'sanity';

declare global {
  // TODO: Refactor when I find a type provided by Next
  type NextPage<T = any, S = any> = {
    params: T;
    searchParams: S;
  };

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
    countries: Array<CountryTeaser>;
    excerpt?: string;
    content: PortableTextBlock;
    mainImage: SanityImageAssetDocument;
    publishedAt: string;
    slug: string;
    title: string;
  }

  type ArticleTeaser = Pick<
    Article,
    '_id' | 'countries' | 'excerpt' | 'mainImage' | 'slug' | 'title'
  >;

  interface MetaData {
    metaDescription?: string;
    metaTitle?: string;
    sharingDescription?: string;
    sharingImage?: SanityImageAssetDocument;
    sharingTitle?: string;
  }
}

export {};
