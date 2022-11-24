import { defineType, defineField } from 'sanity';
import { countryCodeEmoji } from 'country-code-emoji';
import countryListAlpha2 from './countryList';

const schema = defineType({
  name: 'country',
  type: 'document',
  title: 'Country',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Book title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'countryCode',
      type: 'string',
      title: 'Country Code',
      options: {
        list: countryListAlpha2,
      },
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
  ],
  preview: {
    select: {
      countryCode: 'countryCode',
      name: 'name',
    },
    prepare({ countryCode, name }) {
      return {
        title: name,
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
