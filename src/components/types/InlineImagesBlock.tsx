'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Section } from 'components';
import { getImageProps } from 'lib/sanityImage';

interface ImageGalleryBlockProps {
  images: Array<{
    caption?: string;
    image: ImageWithMeta;
  }>;
}

const ImageGalleryBlock: FC<ImageGalleryBlockProps> = ({ images = [] }) => {
  const filteredImages = images.filter(({ image }) => image?.asset);

  return (
    <Section>
      <div className="flex col-span-12 gap-8 md:gap-12 lg:col-start-3">
        {filteredImages.map(({ caption, image }) => (
          <Image
            key={image._id}
            className="object-cover w-full h-auto"
            {...getImageProps(image, 680)}
            alt={image.asset.alt || caption || ''}
            sizes="100vw"
          />
        ))}
      </div>
    </Section>
  );
};

export default ImageGalleryBlock;
