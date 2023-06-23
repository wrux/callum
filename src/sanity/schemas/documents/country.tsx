import { countryCodeEmoji } from 'country-code-emoji';
import { GlobeHemisphereWest } from 'phosphor-react';
import { defineField, defineType } from 'sanity';

import countryListAlpha2 from './countryList';

const schema = defineType({
  name: 'country',
  type: 'document',
  title: 'Country',
  icon: () => (
    <>
      <GlobeHemisphereWest style={{ fontSize: '2rem', lineHeight: '1' }} />
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
      name: 'name',
      type: 'string',
      title: 'Name',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'countryCode',
      type: 'string',
      title: 'Country Code',
      options: {
        list: countryListAlpha2,
      },
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
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
      countryCode: 'countryCode',
      description: 'description',
      name: 'name',
    },
    prepare({ countryCode, description, name }) {
      return {
        title: name,
        subtitle: description,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {countryCode ? countryCodeEmoji(countryCode) : '🌍'}
          </span>
        ),
      };
    },
  },
});

export default schema;
