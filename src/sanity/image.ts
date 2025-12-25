import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityClient } from 'sanity:client';

export const imageBuilder = createImageUrlBuilder(sanityClient)
  .fit('max')
  .format('webp');
