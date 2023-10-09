import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';

export const imageBuilder = imageUrlBuilder(client).fit('max').format('webp');
