import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';

const Container: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => (
  <div className={cn('container mx-auto px-5 lg:px-0', className)}>
    {children}
  </div>
);

export default Container;
