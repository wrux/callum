import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';

type spacing = 'sm' | 'md';

interface SectionProps extends PropsWithChildren {
  spacing?: spacing;
}

const spacingValues: Record<spacing, string> = {
  sm: 'my-6 md:my-8 lg:my-12',
  md: 'my-8 md:my-12 lg:my-16',
};

const Section: FC<SectionProps> = ({ children, spacing = 'sm' }) => (
  <section
    className={cn(
      'md:grid md:grid-cols-12 gap-4 max-w-screen-2xl',
      spacingValues[spacing]
    )}
  >
    {children}
  </section>
);

export default Section;
