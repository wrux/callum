import { defineField } from 'sanity';

const link = defineField({
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
    },
  ],
});

export default link;
