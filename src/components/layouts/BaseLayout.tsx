import { SiteFooter, SiteHeader } from 'components';
import { FC, PropsWithChildren } from 'react';

const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <SiteHeader />
    <main>{children}</main>
    <SiteFooter />
  </>
);

export default BaseLayout;
