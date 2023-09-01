import { NewspaperClipping } from 'phosphor-react';
import { defineField, defineType } from 'sanity';

const schema = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  icon: () => (
    <>
      <NewspaperClipping style={{ fontSize: '2rem', lineHeight: '1' }} />
    </>
  ),
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'metadata',
      title: 'SEO & metadata',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'content',
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
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'countries',
      type: 'array',
      title: 'Countries',
      of: [{ type: 'reference', to: { type: 'country' } }],
      group: 'content',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      group: 'content',
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
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'metadata',
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
