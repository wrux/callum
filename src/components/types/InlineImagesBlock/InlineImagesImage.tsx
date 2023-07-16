'use client';

import Image from 'next/image';
import { FC } from 'react';

import { getImageProps } from '~/lib/sanityImage';

export interface InlineImagesImageProps {
  caption?: string;
  image: ImageWithMeta;
}

export const InlineImagesImage: FC<InlineImagesImageProps> = ({
  caption,
  image,
}) => {
  return (
    <Image
      key={image._id}
      className="object-cover w-full h-auto"
      {...getImageProps(image, 680)}
      alt={image.asset.alt || caption || ''}
      sizes="100vw"
    />
  );
};
