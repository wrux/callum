'use client';

import { FC, useMemo, useState } from 'react';
import Image from 'next/image';
import { JustifiedGrid } from '@egjs/react-grid';
import FsLightbox from 'fslightbox-react';
import { ArrowsOut } from 'phosphor-react';
import cn from 'clsx';
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
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const imageData = useMemo(
    () => filteredImages.map(({ image }) => getImageProps(image, 1280)),
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
            imageData.length > 5 ? 'lg:col-start-0' : 'lg:col-start-3'
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
                  {...imageData[index]}
                  alt={image.asset.alt || caption || ''}
                  sizes="100vw"
                />
                <ArrowsOut className="absolute p-1 transition-opacity duration-300 bg-white rounded-md shadow-md top-4 right-4 text-step-1 group-hover:opacity-0" />
              </button>
            ))}
          </JustifiedGrid>
        </div>
      </Section>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={imageData.map(({ src }) => src as string)}
        slide={lightboxController.slide}
      />
    </>
  );
};

export default ImageGalleryBlock;
