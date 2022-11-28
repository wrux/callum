'use client';

import { FC, useMemo, useState } from 'react';
import Image from 'next/image';
import { JustifiedGrid } from '@egjs/react-grid';
import FsLightbox from 'fslightbox-react';
import { SanityImageAssetDocument } from '@sanity/client';
import { ArrowsOut } from 'phosphor-react';
import { Section } from 'components';
import { urlForImage } from 'lib/sanityImage';

interface ImageGalleryBlockProps {
  images: Array<{
    caption?: string;
    image: SanityImageAssetDocument;
  }>;
}

const ImageGalleryBlock: FC<ImageGalleryBlockProps> = ({ images = [] }) => {
  const filteredImages = images.filter(({ image }) => image?.asset?._ref);

  return (
    <>
      <Section>
        <div className="flex col-span-12 gap-8 md:gap-12 lg:col-start-3">
          {filteredImages.map(({ caption, image }) => {
            const imageObject = urlForImage(image).width(680).url();

            return (
              <Image
                key={image._id}
                className="object-cover w-full h-auto"
                width={1280}
                height={1000}
                src={imageObject}
                sizes="100vw"
                // @TODO: Pull ALT text from image metadata
                alt={caption || ''}
              />
            );
          })}
        </div>
      </Section>
    </>
  );
};

export default ImageGalleryBlock;
