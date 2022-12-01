import { FC, PropsWithChildren } from 'react';
import {
  DashboardWidget,
  DashboardWidgetContainer,
  LayoutConfig,
} from '@sanity/dashboard';
import { Box, Text, useTheme } from '@sanity/ui';

const widgetTitle = 'Plausible Analytics';

type PlausibleWidgetConfig = {
  auth: string;
  domain: string;
};

const WidgetFrame: FC<PropsWithChildren> = ({ children }) => (
  <DashboardWidgetContainer header={widgetTitle}>
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
      <div style={{ overflow: 'hidden' }}>
        <div style={{ marginTop: '-2.5rem ' }}>
          <iframe
            name={widgetTitle}
            plausible-embed="true"
            scrolling="no"
            frameBorder="0"
            src={iframeUrl.toString()}
            loading="lazy"
            style={{
              width: '1px',
              minWidth: '100%',
              height: '100rem',
            }}
          />
        </div>
      </div>
      <script async src="https://plausible.io/js/embed.host.js"></script>
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
