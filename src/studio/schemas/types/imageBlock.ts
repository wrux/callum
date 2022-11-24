import { defineField, defineType } from 'sanity';

const schema = defineType({
  type: 'object',
  name: 'imageBlock',
  title: 'Image Block',
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Caption',
      name: 'caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      media: 'image',
      title: 'caption',
    },
    prepare({ media, title = 'No Caption' }) {
      return {
        title,
        subtitle: 'Image Block',
        media,
      };
    },
  },
});

export default schema;
