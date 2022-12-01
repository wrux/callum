import { FC, PropsWithChildren } from 'react';
import {
  DashboardWidget,
  DashboardWidgetContainer,
  LayoutConfig,
} from '@sanity/dashboard';
import { Box, Text, useTheme } from '@sanity/ui';

type PlausibleWidgetConfig = {
  auth: string;
  domain: string;
};

const WidgetFrame: FC<PropsWithChildren> = ({ children }) => (
  <DashboardWidgetContainer header="Plausible analytics dasbboard">
    <Box padding={3}>{children}</Box>
  </DashboardWidgetContainer>
);

const Widget = ({ auth, domain }: PlausibleWidgetConfig) => {
  const theme = useTheme();

  if (!auth && !domain) {
    return (
      <WidgetFrame>
        <Text size={1}>Please configure the widget</Text>
      </WidgetFrame>
    );
  }

  const iframeUrl = new URL(`https://plausible.io/share/${domain}`);
  iframeUrl.searchParams.append('auth', auth);
  iframeUrl.searchParams.append('embed', 'true');
  iframeUrl.searchParams.append(
    'theme',
    theme?.sanity?.color?.dark ? 'dark' : 'light'
  );
  iframeUrl.searchParams.append(
    'background',
    theme?.sanity?.color?.base?.bg || 'transparent'
  );

  return (
    <WidgetFrame>
      <iframe
        name="Plausible analytics dasbboard"
        plausible-embed="true"
        src={iframeUrl.toString()}
        loading="lazy"
        style={{
          width: '1px',
          minWidth: '100%',
          height: '100rem',
        }}
      />
    </WidgetFrame>
  );
};

type plausibleWidgetConfig = PlausibleWidgetConfig & {
  layout?: LayoutConfig;
};

export function plausibleWidget(
  config: plausibleWidgetConfig
): DashboardWidget {
  return {
    name: 'analytics-widget',
    component: () => <Widget {...config} />,
    layout: config.layout ?? { width: 'full' },
  };
}
