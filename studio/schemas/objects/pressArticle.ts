export default {
  name: 'pressArticle',
  title: 'Article',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      validation: (Rule) =>
        Rule.error('You have to fill out the url of the article.').required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'slug.current',
    },
  },
}
