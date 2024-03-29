import { NewspaperClipping } from '@phosphor-icons/react';
import { defineField, defineType } from 'sanity';

const schema = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  icon: NewspaperClipping,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'countries',
      type: 'array',
      title: 'Countries',
      of: [{ type: 'reference', to: { type: 'country' } }],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'imageBlock' },
        { type: 'imageGalleryBlock' },
        { type: 'inlineImagesBlock' },
        { type: 'textBlock' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'excerpt',
      media: 'mainImage',
    },
  },
});

export default schema;
