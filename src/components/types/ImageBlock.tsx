import { FC } from 'react';
import Image from 'next/image';
import { SanityImageAssetDocument } from '@sanity/client';
import { Section } from 'components';
import { urlForImage } from 'lib/sanityImage';

interface ImageBlockProps {
  caption?: string;
  image: SanityImageAssetDocument;
}

const ImageBlock: FC<ImageBlockProps> = ({ caption, image }) =>
  image?.asset?._ref ? (
    <Section>
      <figure className="contents">
        <div className="col-span-12 lg:col-start-3">
          <Image
            className="w-full h-auto"
            width={2000}
            height={1000}
            src={urlForImage(image).height(1000).width(2000).url()}
            sizes="100vw"
            // @TODO: Pull ALT text from image metadata
            alt={caption || ''}
          />
        </div>
        {caption && (
          <figcaption className="px-5 mt-4 md:mt-0 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-3 md:px-0">
            {caption}
          </figcaption>
        )}
      </figure>
    </Section>
  ) : null;

export default ImageBlock;
