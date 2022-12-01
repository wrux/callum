'use client';

import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { PostTeaser, Section } from 'components';
import useIntersectionObserver from 'hooks/useIntersectionObserber';

const variants: Variants = {
  visible: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0.5,
      easings: 'easeOut',
    },
  },
  hidden: {
    opacity: 0,
    y: '20%',
  },
};

const FadeOnScroll: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const hasScrolledPast =
    entry?.boundingClientRect?.y && entry?.boundingClientRect?.y < 0;

  const control = useAnimation();

  useEffect(() => {
    if (isVisible || hasScrolledPast) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, hasScrolledPast, isVisible]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

const FadeIn: FC<PropsWithChildren> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 0.75,
      duration: 0.75,
    }}
  >
    {children}
  </motion.div>
);

const PostTeaserWrapper: FC<
  PropsWithChildren<{
    featured?: boolean;
  }>
> = ({ children, featured = false }) =>
  featured ? (
    <Section>
      <div className="col-span-8 px-5 lg:col-start-3 lg:px-0">
        <FadeIn>{children}</FadeIn>
      </div>
    </Section>
  ) : (
    <Section>
      <div className="px-5 pt-6 border-t border-gray-300 md:col-span-6 md:col-start-2 lg:col-start-3 md:px-0 md:pt-8 lg:pt-12">
        <FadeOnScroll>{children}</FadeOnScroll>
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
