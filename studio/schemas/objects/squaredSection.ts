export default {
  name: 'squaredSection',
  title: 'Section with Image and Text',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    },
    {
      name: 'flip',
      title: 'Flip',
      description: 'Set direction rigth to left',
      type: 'boolean',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'text',
      media: 'image',
    },
  },
}
