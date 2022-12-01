import { FC, PropsWithChildren, useEffect, useState } from 'react';
import {
  DashboardWidget,
  DashboardWidgetContainer,
  LayoutConfig,
} from '@sanity/dashboard';
import { Box, Text } from '@sanity/ui';

type FathomWidgetConfig = {
  domain: string;
  password?: string;
  siteID: string;
};

const WidgetFrame: FC<PropsWithChildren> = ({ children }) => (
  <DashboardWidgetContainer header="Fathom Analytics">
    <Box padding={3}>{children}</Box>
  </DashboardWidgetContainer>
);

async function digestMessage(message: string) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
}

const Widget = ({ domain, password, siteID }: FathomWidgetConfig) => {
  const [iframeUrl, setIframeUrl] = useState<string>();

  useEffect(() => {
    const getIframeUrl = async () => {
      let baseUrl = `https://app.usefathom.com/share/${siteID}/${domain}`;
      if (password) {
        const hashedPassword = await digestMessage(password);
        baseUrl = `${baseUrl}/?password=${hashedPassword}`;
      }
      setIframeUrl(baseUrl);
    };
    getIframeUrl();
  }, [domain, password, siteID]);

  if (!siteID) {
    return (
      <WidgetFrame>
        <Text size={1}>Please configure the widget</Text>
      </WidgetFrame>
    );
  }

  return (
    <WidgetFrame>
      {iframeUrl ? (
        <iframe
          src={iframeUrl}
          loading="lazy"
          style={{
            width: '1px',
            minWidth: '100%',
            height: '100rem',
          }}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </WidgetFrame>
  );
};

type fathomWidgetConfig = FathomWidgetConfig & {
  layout?: LayoutConfig;
};

export function fathomWidget(config: fathomWidgetConfig): DashboardWidget {
  return {
    name: 'analytics-widget',
    component: () => <Widget {...config} />,
    layout: config.layout ?? { width: 'full' },
  };
}
