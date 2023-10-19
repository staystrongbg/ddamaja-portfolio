export const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'stack',
          },
        },
      ],
    },
  ],
};
