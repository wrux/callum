import { defineField, defineType } from 'sanity';
import { previewStructuredText } from 'studio/helpers/previewStructuredText';

const schema = defineType({
  type: 'object',
  name: 'textBlock',
  title: 'Text Block',
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
      };
    },
  },
});

export default schema;
