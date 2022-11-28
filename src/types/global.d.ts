import { SanityDocument, SanityImageAssetDocument } from '@sanity/client';
import { PortableTextBlock } from '@portabletext/types';
import { Block } from 'sanity';

declare global {
  type PropsWithClassName<T = unknwon> = T & {
    className?: string;
  };

  interface ImageWithMeta extends SanityImageAssetDocument {
    alt?: string;
  }

  type Country<T> = SanityDocument<
    T & {
      countryCode: string;
      name: string;
      slug: string;
    }
  >;

  type CountryTeaser = Pick<Country, '_id' | 'countryCode' | 'name' | 'slug'>;

  type Article = SanityDocument<{
    content: PortableTextBlock;
    countries: Array<CountryTeaser>;
    excerpt?: string;
    mainImage: ImageWithMeta;
    publishedAt: string;
    slug: string;
    title: string;
  }>;

  type ArticleTeaser = Pick<
    Article,
    '_id' | 'countries' | 'excerpt' | 'mainImage' | 'slug' | 'title'
  >;

  interface MetaData {
    metaDescription?: string;
    metaTitle?: string;
    sharingDescription?: string;
    sharingImage?: ImageWithMeta;
    sharingTitle?: string;
  }
}

export {};
