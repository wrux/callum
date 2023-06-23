import { FC } from 'react';

import { CountryList, CoverImage, Link } from '~/components';

const PostTeaser: FC<ArticleTeaser> = ({
  countries = [],
  excerpt,
  title,
  mainImage,
  slug,
}) => (
  <article className="relative flex flex-col gap-4 group">
    {countries && countries.length > 0 && (
      <CountryList className="relative z-10" countries={countries} />
    )}
    <h2 className="relative mb-2 transition-colors c-h3 group-hover:text-brand">
      {title}
    </h2>
    <div className="overflow-hidden">
      <CoverImage
        title={title}
        image={mainImage}
        className="transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    {/* Previously `excerpt` was a portable text type so prevent erorr: */}
    {excerpt && typeof excerpt === 'string' && (
      <p className="c-p max-w-prose">{excerpt}</p>
    )}
    <Link
      className="c-p"
      href={`/post/${slug}`}
      aria-label={`Continue reading: ${title}`}
      intent="overlay"
    >
      Continue Reading
    </Link>
  </article>
);

export default PostTeaser;
