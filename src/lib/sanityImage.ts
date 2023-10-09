import createImageUrlBuilder from '@sanity/image-url';
import { ImageProps } from 'next/image';

import { dataset, projectId } from '~/sanity/env';

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const getScaledHeight = (
  image: ImageWithMeta,
  scaledWidth: number
): number => scaledWidth / image.asset.metadata.dimensions.aspectRatio;

export const getImageProps = (
  image: ImageWithMeta,
  width: number,
  height?: number
): Pick<
  ImageProps,
  'alt' | 'src' | 'width' | 'height' | 'placeholder' | 'blurDataURL'
> => ({
  alt: image.asset?.alt,
  src: height
    ? urlForImage(image).format('webp').width(width).height(height).url()
    : urlForImage(image).format('webp').width(width).url(),
  width: width,
  // Assume that if height isn't parsed, then it should scale at the same aspect ratio.
  height: height || getScaledHeight(image, width),
  placeholder: image?.asset?.metadata?.lqip ? 'blur' : 'empty',
  blurDataURL: image?.asset?.metadata?.lqip,
});

export const urlForImage = (source: ImageWithMeta) =>
  imageBuilder.image(source).auto('format').fit('max');