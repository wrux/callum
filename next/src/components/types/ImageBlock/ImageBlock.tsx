import { FC } from 'react';

import { Section } from '~/components';

import { ImageBlockImage } from './ImageBlockImage';

interface ImageBlockProps {
  caption?: string;
  image: ImageWithMeta;
}

const ImageBlock: FC<ImageBlockProps> = ({ caption, image }) =>
  image?.asset ? (
    <Section>
      <figure className="contents">
        <div className="col-span-12 lg:col-start-3">
          <ImageBlockImage caption={caption} image={image} />
        </div>
        {caption && (
          <figcaption className="px-5 mt-4 md:mt-0 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-3 md:px-0 c-emphasis">
            {caption}
          </figcaption>
        )}
      </figure>
    </Section>
  ) : null;

export default ImageBlock;
