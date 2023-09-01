'use client';

import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

type FadeInProps = PropsWithChildren<{
  delay?: number;
  duration?: number;
}>;

const FadeIn: FC<FadeInProps> = ({
  children,
  delay = 0.75,
  duration = 0.75,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay,
      duration,
    }}
  >
    {children}
  </motion.div>
);

export default FadeIn;
