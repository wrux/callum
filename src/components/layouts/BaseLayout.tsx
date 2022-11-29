import { SiteFooter, SiteHeader } from 'components';
import { FC, PropsWithChildren } from 'react';

type BaseLayoutProps = PropsWithChildren<{
  hideSiteHeader?: boolean;
}>;

const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  hideSiteHeader = false,
}) => (
  <>
    {!hideSiteHeader && <SiteHeader />}
    <main>{children}</main>
    <SiteFooter />
  </>
);

export default BaseLayout;
