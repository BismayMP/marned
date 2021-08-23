export default {
  name: 'projectImage',
  title: 'Add Project',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    },
    {
      name: 'info',
      title: 'Info',
      type: 'blockContent',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button',
    },
  ],
  preview: {
    select: {
      title: 'info',
      media: 'image',
      subtitle: 'button.slug.current',
    },
  },
}
