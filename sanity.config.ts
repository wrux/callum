import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard';
import { media } from 'sanity-plugin-media';
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list';
import { schemaTypes } from '~/sanity/schemas';
import { dataset, projectId } from '~/sanity/env';
import structure from '~/sanity/structure';
import { plausibleWidget } from '~/sanity/widgets';
import { visionTool } from '@sanity/vision';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  name: 'callum',
  title: 'callum.co.uk',
  plugins: [
    dashboardTool({
      widgets: [
        documentListWidget({
          title: 'Documents with unpublished changes',
          query: '*[_id in path("drafts.**")] | order(_updatedAt desc)',
          layout: { width: 'medium' },
        }),
        projectInfoWidget({
          layout: { width: 'medium' },
        }),
        projectUsersWidget(),
        plausibleWidget({
          auth: process.env.NEXT_PUBLIC_PLAUSIBLE_DASHBOARD_AUTH || '',
          domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || '',
        }),
      ],
    }),
    media(),
    deskTool({
      structure,
      name: 'content',
      title: 'Content',
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
