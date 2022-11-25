import { FC } from 'react';
import Image from 'next/image';
import { SanityImageAssetDocument } from '@sanity/client';
import { Container } from 'components';
import { urlForImage } from 'lib/sanityImage';

interface ImageBlockProps {
  caption?: string;
  image: SanityImageAssetDocument;
}

const ImageBlock: FC<ImageBlockProps> = ({ caption, image }) =>
  image?.asset?._ref ? (
    <Container className="my-6 md:my-8 lg:my-12">
      <figure>
        <Image
          className="w-full h-auto"
          width={2000}
          height={1000}
          src={urlForImage(image).height(1000).width(2000).url()}
          sizes="100vw"
          // @TODO: Pull ALT text from image metadata
          alt={caption || ''}
        />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </Container>
  ) : null;

export default ImageBlock;
