import { cva, type VariantProps } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

import { cn } from '~/lib/utilities';

export type SectionVariantProps = VariantProps<typeof sectionVariants>;

const sectionVariants = cva(
  ['mx-auto', 'md:grid', 'md:grid-cols-12', 'gap-4', 'max-w-screen-2xl'],
  {
    variants: {
      spacing: {
        sm: ['my-6', 'md:my-8', 'lg:my-12'],
        md: ['my-8', 'md:my-12', 'lg:my-16'],
        lg: ['my-12', 'md:my-24', 'lg:my-32'],
        none: [],
      },
    },
    defaultVariants: {
      spacing: 'sm',
    },
  }
);

const Section: FC<
  PropsWithChildren<PropsWithClassName<SectionVariantProps>>
> = ({ children, className, spacing }) => (
  <section className={cn(sectionVariants({ spacing }), className)}>
    {children}
  </section>
);

export default Section;
