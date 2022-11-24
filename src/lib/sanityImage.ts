import { SanityImageAssetDocument } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from 'lib/sanityClient';

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: SanityImageAssetDocument) =>
  imageBuilder.image(source).auto('format').fit('max');
