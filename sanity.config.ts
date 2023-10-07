import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { media } from 'sanity-plugin-media';
import { visionTool } from '@sanity/vision';
import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard';
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { plausibleWidget } from '@wrux/sanity-analytics-dashboard-widgets';

import { dataset, projectId } from '~/sanity/config';
import schema from '~/sanity/schemas';
import { defaultDocumentNodeResolver, structure } from '~/sanity/structure';

export default defineConfig({
  name: 'callum',
  title: 'callum.co.uk',
  projectId,
  dataset,
  plugins: [
    dashboardTool({
      widgets: [
        documentListWidget({
          title: 'Documents with unpublished changes',
          query: '*[_id in path("drafts.**")] | order(_updatedAt desc)',
          layout: { width: 'medium' },
        }),
        projectInfoWidget({
          layout: { width: 'small' },
        }),
        projectUsersWidget(),
        plausibleWidget({
          auth: import.meta.env.PUBLIC_PLAUSIBLE_DASHBOARD_AUTH || '',
          domain: import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN || '',
        }),
      ],
    }),
    deskTool({
      structure,
      defaultDocumentNode: defaultDocumentNodeResolver,
    }),
    media(),
    visionTool(),
    unsplashImageAsset(),
  ],
  schema,
});
