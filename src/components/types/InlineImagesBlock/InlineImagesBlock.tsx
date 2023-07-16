import { FC } from 'react';

import { Section } from '~/components';

import { InlineImagesImage } from './InlineImagesImage';

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
      <div className="flex flex-col items-center col-span-12 gap-8 sm:flex-row md:gap-12 lg:col-start-3">
        {filteredImages.map(({ caption, image }) => (
          <InlineImagesImage key={image.id} caption={caption} image={image} />
        ))}
      </div>
    </Section>
  );
};

export default ImageGalleryBlock;
