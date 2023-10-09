import { Article } from '@phosphor-icons/react';
import { defineField, defineType } from 'sanity';

import { previewStructuredText } from '~/sanity/helpers/previewStructuredText';

const schema = defineType({
  type: 'object',
  name: 'textBlock',
  title: 'Text',
  icon: Article,
  fields: [
    defineField({
      title: 'Content',
      name: 'content',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({ content }) {
      return {
        title: previewStructuredText(content) || 'No content',
        subtitle: 'Text Block',
        media: Article,
      };
    },
  },
});

export default schema;
