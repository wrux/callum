import { FC, PropsWithChildren } from 'react';
import { PostTeaser, Section } from 'components';

const PostTeaserWrapper: FC<
  PropsWithChildren<{
    featured?: boolean;
  }>
> = ({ children, featured = false }) =>
  featured ? (
    <Section>
      <div className="col-span-8 px-5 lg:col-start-3 lg:px-0">{children}</div>
    </Section>
  ) : (
    <Section>
      <div className="px-5 pt-6 border-t border-gray-300 md:col-span-6 md:col-start-2 lg:col-start-3 md:px-0 md:pt-8 lg:pt-12">
        {children}
      </div>
    </Section>
  );

interface ListPostsProps {
  posts: Array<ArticleTeaser>;
  title?: string;
}

const ListPosts: FC<ListPostsProps> = ({ posts, title }) => (
  <div className="mb-8 md:mb-12 lg:mb-16">
    {title && (
      <Section>
        <div className="col-span-12 px-5 lg:col-start-3 lg:px-0">
          <h2 className="mb-8 c-h3">{title}</h2>
        </div>
      </Section>
    )}
    {posts.map((post, index) => (
      <PostTeaserWrapper key={post._id} featured={index === 0}>
        <PostTeaser {...post} />
      </PostTeaserWrapper>
    ))}
  </div>
);

export default ListPosts;
