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
      name: 'link',
      title: 'Link',
      type: 'url',
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

// stack is array reference to tech
//tech is {title, image, imageDark}
