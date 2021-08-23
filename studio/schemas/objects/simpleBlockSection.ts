export default {
  name: 'simpleBlockSection',
  title: 'Section with title and body',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'blockContent',
    },
    {
      name: 'body',
      title: 'Body Text',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'body',
    },
  },
}
