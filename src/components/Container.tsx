import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={cn('container mx-auto px-5', className)}>{children}</div>
);

export default Container;
