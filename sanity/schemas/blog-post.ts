export const post = {
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'tags',
      title: 'tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'tag',
          },
        },
      ],
    },
  ],
};
