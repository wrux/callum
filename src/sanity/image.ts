import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from 'sanity:client';

export const imageBuilder = imageUrlBuilder(sanityClient)
  .fit('max')
  .format('webp');
