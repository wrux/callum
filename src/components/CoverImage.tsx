import cn from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { getImageProps } from '~/lib/sanityImage';

type CoverImageProps = PropsWithClassName<{
  title: string;
  image: ImageWithMeta;
  priority?: boolean;
}>;

const CoverImage: FC<CoverImageProps> = ({
  className,
  title,
  image: source,
  priority,
}) =>
  source?.asset ? (
    <Image
      className={cn('w-full h-auto', className)}
      {...getImageProps(source, 1024, 576)}
      alt={source.asset?.alt || `Cover Image for ${title}`}
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div
      className={className}
      style={{ paddingTop: '50%', backgroundColor: '#ddd' }}
    />
  );

export default CoverImage;
