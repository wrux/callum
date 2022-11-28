import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from 'lib/sanityClient';

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: ImageWithMeta) =>
  imageBuilder.image(source).auto('format').fit('max');
