'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';

import useIntersectionObserver from '~/hooks/useIntersectionObserver';

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

const FadeInOnScroll: FC<PropsWithChildren> = ({ children }) => {
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

export default FadeInOnScroll;
