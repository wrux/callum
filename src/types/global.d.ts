import { SanityDocument, SanityImageAssetDocument } from '@sanity/client';

declare global {
  interface Country extends SanityDocument {
    countryCode: string;
    name: string;
    slug: string;
  }

  interface Article extends SanityDocument {
    _id: string;
    title: string;
    publishedAt: any;
    excerpt?: string;
    countries: Array<Pick<Country, '_id' | 'countryCode' | 'name' | 'string'>>;
    slug: string;
    mainImage: SanityImageAssetDocument;
  }
}

export {};
