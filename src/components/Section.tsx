import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';

type spacing = 'sm' | 'md' | 'lg' | 'none';

interface SectionProps extends PropsWithChildren {
  className?: string;
  spacing?: spacing;
}

const spacingValues: Record<spacing, string> = {
  sm: 'my-6 md:my-8 lg:my-12',
  md: 'my-8 md:my-12 lg:my-16',
  lg: 'my-12 md:my-24 lg:my-32',
  none: '',
};

const Section: FC<SectionProps> = ({ children, className, spacing = 'sm' }) => (
  <section
    className={cn(
      'mx-auto md:grid md:grid-cols-12 gap-4 max-w-screen-2xl',
      spacingValues[spacing],
      className
    )}
  >
    {children}
  </section>
);

export default Section;
