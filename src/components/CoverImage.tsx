import Image from 'next/image';
import cn from 'clsx';
import { SanityImageAssetDocument } from '@sanity/client';
import { urlForImage } from 'lib/sanityImage';

interface CoverImageProps {
  className?: string;
  title: string;
  image: SanityImageAssetDocument;
  priority?: boolean;
}

export default function CoverImage({
  className,
  title,
  image: source,
  priority,
}: CoverImageProps) {
  return source?.asset?._ref ? (
    <Image
      className={cn('w-full h-auto', className)}
      width={1280}
      height={640}
      alt={`Cover Image for ${title}`}
      src={urlForImage(source).height(640).width(1280).url()}
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div
      className={className}
      style={{ paddingTop: '50%', backgroundColor: '#ddd' }}
    />
  );
}
