import { MdDescription } from '@react-icons/all-files/md/MdDescription'

export default {
  title: 'Project Pages',
  name: 'project',
  type: 'document',
  icon: MdDescription,
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
      name: 'heroImage',
      title: 'Hero image',
      type: 'mainImage',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
    },
    {
      name: 'hoverImage',
      title: 'Hover image',
      type: 'mainImage',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) =>
        Rule.error('You have to add a category.').required(),
      options: {
        borderradius: {
          outer: '100%',
          inner: '100%',
        },
        list: [
          { title: 'RESIDENTIAL', value: 'residential' },
          { title: 'COMMERCIAL', value: 'commercial' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'awards',
      title: 'Awards',
      type: 'string',
    },
    {
      name: 'featuredIn',
      title: 'Featured In',
      type: 'string',
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'mainImage' }, { type: 'squaredSection' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'mainImage',
    },
    prepare({ title, slug, media }) {
      return {
        title,
        subtitle: slug?.current,
        media,
      }
    },
  },
}
