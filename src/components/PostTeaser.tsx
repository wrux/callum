import Link from 'next/link';
import { CountryList, CoverImage } from 'components';

export default function PostTeaser({
  countries = [],
  excerpt,
  title,
  mainImage,
  slug,
}: ArticleTeaser) {
  return (
    <article className="flex flex-col gap-4 link-overlay group/teaser">
      {countries && countries.length > 0 && (
        <CountryList countries={countries} />
      )}
      <h2 className="mb-2 c-h3 group-hover/teaser:text-primary">{title}</h2>
      <CoverImage title={title} image={mainImage} />
      {/* Previously `excerpt` was a portable text type so prevent erorr: */}
      {excerpt && typeof excerpt === 'string' && (
        <p className="c-p max-w-prose">{excerpt}</p>
      )}
      <Link
        className="c-p link link-overlay__link"
        href={`/post/${slug}`}
        aria-label={`Continue reading: ${title}`}
      >
        Continue Reading
      </Link>
    </article>
  );
}
