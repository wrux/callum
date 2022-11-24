import Image from 'next/image';
import { SanityImageAssetDocument } from '@sanity/client';
import { urlForImage } from 'lib/sanityImage';

interface CoverImageProps {
  title: string;
  image: SanityImageAssetDocument;
  priority?: boolean;
}

export default function CoverImage(props: CoverImageProps) {
  const { title, image: source, priority } = props;
  return source?.asset?._ref ? (
    <Image
      className="w-full h-auto"
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={urlForImage(source).height(1000).width(2000).url()}
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );
}
