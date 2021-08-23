export default {
  title: 'Home Page',
  name: 'home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'carousel',
      title: 'Carrousel with Images',
      type: 'array', 
      of: [{ type: 'mainImage'}]
    },
    {
      name: 'simpleTextSection',
      title: 'Simple Text Section',
      type: 'simpleBlockSection',
    },
    {
      name: 'carouselWithCategories',
      title: 'Carousel with Categories',
      type: 'array',
      of: [{type: 'carouselWithCategoryItem'}]
    },
    {
      name: 'squaredSection',
      title: 'Section with images and Text',
      type: 'array', 
      of: [{ type: 'squaredSection'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: slug?.current,
      }
    },
  },
}
