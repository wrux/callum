import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard';
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list';
import { schemaTypes } from './schemas';
import { dataset, projectId } from './config';

export default defineConfig({
  basePath: '/studio',
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
      ],
    }),
    deskTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
