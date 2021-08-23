export default {
  name: 'footer',
  title: 'Footer Section',
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
    {
      name: 'contact',
      title: 'Contact infomation',
      type: 'blockContent',
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
