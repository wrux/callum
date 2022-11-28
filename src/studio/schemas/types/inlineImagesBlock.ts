import { defineField, defineType } from 'sanity';
import { Image } from 'phosphor-react';

const schema = defineType({
  type: 'object',
  name: 'inlineImagesBlock',
  title: 'Inline Images',
  fields: [
    defineField({
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        defineField({
          title: 'Item',
          name: 'item',
          type: 'object',
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
              caption: 'caption',
              media: 'image',
              title: 'image.title',
            },
            prepare({ caption, media, title }) {
              return {
                title: caption || title,
                media,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      images: 'images',
    },
    prepare({ images = [] }) {
      return {
        title:
          images.length && images.length > 0
            ? `${images.length} ${images.length === 1 ? 'image' : 'images'}`
            : 'No images',
        subtitle: 'Inline Images Block',
        media: Image,
      };
    },
  },
});

export default schema;
