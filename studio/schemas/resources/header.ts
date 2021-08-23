export default {
  name: 'header',
  title: 'Header Section',
  type: 'document',
  fields: [
    {
      name: 'brand',
      title: 'Brand',
      type: 'brand',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'link' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subTitle: 'slug.current',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: slug?.current,
      }
    },
  },
}
