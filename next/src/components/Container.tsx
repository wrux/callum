import cn from 'clsx';
import { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => (
  <div className={cn('container mx-auto px-5 lg:px-0', className)}>
    {children}
  </div>
);

export default Container;
