import { FC } from 'react';
import { urlForImage } from 'lib/sanityImage';

interface PageHeadProps {
  fallbacks?: MetaData;
  path: string;
  seo?: MetaData;
}

const defaultSeo: MetaData = {
  metaTitle: 'My personal travel blog',
  metaDescription: 'My travel blog from many Countries all around the world.',
  sharingTitle: 'My personal travel blog',
  sharingDescription:
    'My travel blog from many Countries all around the world.',
};

const findVar = <T extends keyof MetaData>(
  key: T,
  vars: MetaData[]
): MetaData[T] => vars.find((meta) => meta?.[key])?.[key];

const PageHead: FC<PageHeadProps> = ({ fallbacks = {}, path, seo = {} }) => {
  const meta = [seo, fallbacks, defaultSeo];

  const title = findVar('metaTitle', meta);
  const desc = findVar('metaDescription', meta);
  const sTitle = findVar('sharingTitle', meta);
  const sDesc = findVar('sharingDescription', meta);
  const sImg = findVar('sharingImage', meta);

  const domain = process.env.NEXT_PUBLIC_VERCEL_URL || 'https://localhost:3000';
  const url = `${domain}${path}`;

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <title>{`${title} | Callum.co.uk`}</title>
      <meta name="description" content={desc} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={sTitle} />
      <meta property="og:description" content={sDesc} />
      {sImg && (
        <meta
          property="og:image"
          content={urlForImage(sImg).height(630).width(1200).url()}
        />
      )}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={sTitle} />
      <meta property="twitter:description" content={sDesc} />
      {sImg && (
        <meta
          property="twitter:image"
          content={urlForImage(sImg).height(600).width(1200).url()}
        />
      )}
    </>
  );
};

export default PageHead;
