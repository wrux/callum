import Link from 'next/link';
import CoverImage from './CoverImage';

export default function PostTeaser({
  excerpt,
  title,
  mainImage,
  slug,
}: ArticleTeaser) {
  return (
    <article>
      <CoverImage title={title} image={mainImage} />
      <h2>{title}</h2>
      {/* Previously `excerpt` was a portable text type so prevent erorr: */}
      {excerpt && typeof excerpt === 'string' && <p>{excerpt}</p>}
      <Link href={`/post/${slug}`} aria-label={`Continue reading: ${title}`}>
        Continue Reading
      </Link>
    </article>
  );
}
