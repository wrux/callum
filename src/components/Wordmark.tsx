import { FC } from 'react';
import cn from 'clsx';

const sizes = [
  'inherit',
  'text-step-0',
  'text-step-1',
  'text-step-2',
  'text-step-3',
  'text-step-4',
  'text-step-5',
] as const;

type WordmarkProps = PropsWithClassName<{
  size?: keyof typeof sizes;
}>;

const Wordmark: FC<WordmarkProps> = ({ className, size = 0 }) => (
  <span
    className={cn(
      'wordmark font-extrabold',
      sizes[size] || sizes[0],
      className
    )}
  >
    callum<span style={{ fontSize: '0.5em' }}>.co.uk</span>
  </span>
);

export default Wordmark;
