import { SanityDocument, SanityImageAssetDocument } from '@sanity/client';
import { PortableTextBlock } from '@portabletext/types';
import { Block } from 'sanity';

declare global {
  /**
   * Base React types
   */
  type PropsWithClassName<T = unknwon> = T & {
    className?: string;
  };

  /**
   * Sanity
   */
  interface ImageWithMeta extends SanityImageAssetDocument {
    alt?: string;
  }

  /**
   * Content type definitions
   */
  type Country<T = {}> = SanityDocument<
    T & {
      countryCode: string;
      description?: string;
      name: string;
      seo: MetaData;
      slug: string;
    }
  >;

  type CountryWithPosts = Country<{ posts: Array<ArticleTeaser> }>;

  type CountryTeaser = Pick<Country, '_id' | 'countryCode' | 'name' | 'slug'>;

  type Article<T = {}> = SanityDocument<
    T & {
      content: PortableTextBlock;
      countries: Array<CountryTeaser>;
      excerpt?: string;
      mainImage: ImageWithMeta;
      publishedAt: string;
      seo: MetaData;
      slug: string;
      title: string;
    }
  >;

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
