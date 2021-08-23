export default {
  name: 'carouselWithCategoryItem',
  title: 'Carousel with categories',
  type: 'object',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'projectImage',
      title: 'Projects Categories',
      type: 'array',
      of: [{ type: 'projectImage' }],
    },
  ],
  preview: {
    select: {
      title: 'category',
    },
  },
}
