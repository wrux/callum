import { defineField, defineType } from 'sanity';
import { Article } from 'phosphor-react';
import { previewStructuredText } from 'studio/helpers/previewStructuredText';

const schema = defineType({
  type: 'object',
  name: 'textBlock',
  title: 'Text',
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