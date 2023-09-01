'use client';

import Image from 'next/image';
import { FC } from 'react';

import { getImageProps } from '~/lib/sanityImage';

interface ImageBlockImageProps {
  caption?: string;
  image: ImageWithMeta;
}

export const ImageBlockImage: FC<ImageBlockImageProps> = ({
  caption,
  image,
}) => {
  return (
    <Image
      className="w-full h-auto"
      {...getImageProps(image, 1280)}
      alt={image.asset?.alt || caption}
      sizes="100vw"
    />
  );
};
