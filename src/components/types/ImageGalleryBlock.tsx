'use client';

import { FC, useMemo, useState } from 'react';
import Image from 'next/image';
import { JustifiedGrid } from '@egjs/react-grid';
import FsLightbox from 'fslightbox-react';
import { SanityImageAssetDocument } from '@sanity/client';
import { ArrowsOut } from 'phosphor-react';
import cn from 'clsx';
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
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const imageURLs = useMemo(
    () =>
      filteredImages.map(({ image }) => urlForImage(image).width(1280).url()),
    [filteredImages]
  );

  const openLightboxOnSlide = (slide: number) =>
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide,
    });

  return (
    <>
      <Section>
        <div
          className={cn(
            'col-span-12',
            imageURLs.length > 5 ? 'lg:col-start-0' : 'lg:col-start-3'
          )}
        >
          <JustifiedGrid
            gap={32}
            defaultDirection={'end'}
            align="start"
            columnRange={[1, 3]}
            rowRange={0}
            sizeRange={[200, 1280]}
            isCroppedSize={false}
            displayedRow={-1}
          >
            {filteredImages.map(({ caption, image }, index) => (
              <button
                key={image._id}
                aria-label={`Open image gallery on image ${index + 1}`}
                className="relative overflow-hidden cursor-pointer group"
                onClick={() => openLightboxOnSlide(index + 1)}
              >
                <Image
                  className="object-cover w-full h-auto transition-transform duration-300 ease-out hover:scale-105"
                  width={2000}
                  height={1000}
                  src={imageURLs[index]}
                  sizes="100vw"
                  // @TODO: Pull ALT text from image metadata
                  alt={caption || ''}
                />
                <ArrowsOut className="absolute p-1 transition-opacity duration-300 bg-white rounded-md shadow-md top-4 right-4 text-step-1 group-hover:opacity-0" />
              </button>
            ))}
          </JustifiedGrid>
        </div>
      </Section>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={imageURLs}
        slide={lightboxController.slide}
      />
    </>
  );
};

export default ImageGalleryBlock;
