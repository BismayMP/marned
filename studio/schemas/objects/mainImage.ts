export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      validation: (Rule) =>
        Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL',
      description: 'This is to add onClick funtionality to the image',
      options: {
        isHighlighted: true,
      },
    },
  ],

  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt',
    },
    prepare({ title, imageUrl }) {
      return {
        title: title,
        subtitle: 'Image',
        imageUrl: imageUrl,
      }
    },
  },
}
