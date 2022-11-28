import { defineField, defineType } from 'sanity';
import { Image } from 'phosphor-react';

const schema = defineType({
  type: 'object',
  name: 'imageGalleryBlock',
  title: 'Image Gallery',
  fields: [
    defineField({
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        defineField({
          title: 'Image',
          name: 'image',
          type: 'image',
          validation: (rule) => rule.required(),
          // preview: {
          //   select: {
          //     image: 'image',
          //     title: 'title',
          //   },
          //   prepare({ image, title }) {
          //     return {
          //       title,
          //       media: image,
          //     };
          //   },
          // },
        }),
      ],
      validation: (rule) => rule.required(),
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
            ? `${images.length} ${
                images.length === 1 ? 'image' : 'images'
              } in the gallery`
            : 'No images in the gallery',
        subtitle: 'Image Gallery Block',
        media: Image,
      };
    },
  },
});

export default schema;
