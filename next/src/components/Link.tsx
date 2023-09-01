'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import NextLink from 'next/link';
import * as React from 'react';

import { cn } from '~/lib/utilities';

export type LinkVariantProps = VariantProps<typeof linkVariants>;

export interface LinkProps
  extends React.ComponentProps<typeof NextLink>,
    LinkVariantProps {
  className?: string;
}

const linkVariants = cva(['underline transition-colors underline-offset-4'], {
  variants: {
    variant: {
      default: [
        'decoration-current',
        'hover:text-brand',
        'focus:text-brand',
        'hover:decoration-transparent',
        'focus:decoration-transparent',
      ],
      reverse: [
        'decoration-transparent',
        'hover:text-brand',
        'focus:text-brand',
        'hover:decoration-current',
        'focus:decoration-current',
      ],
    },
    intent: {
      overlay: ['before:absolute', 'before:inset-0', 'before:block'],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, intent, variant, ...props }, ref) => (
    <NextLink
      ref={ref}
      className={cn(linkVariants({ intent, variant }), className)}
      {...props}
    />
  )
);

Link.displayName = 'link';
