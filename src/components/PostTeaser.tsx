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
    <article className="flex flex-col gap-2">
      <CoverImage title={title} image={mainImage} />
      <h2 className="c-h2">{title}</h2>
      {countries && countries.length > 0 && (
        <CountryList countries={countries} />
      )}
      {/* Previously `excerpt` was a portable text type so prevent erorr: */}
      {excerpt && typeof excerpt === 'string' && (
        <div className="max-w-prose">
          <p className="c-p">{excerpt}</p>
        </div>
      )}
      <Link
        className="c-p link"
        href={`/post/${slug}`}
        aria-label={`Continue reading: ${title}`}
      >
        Continue Reading
      </Link>
    </article>
  );
}
