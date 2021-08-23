import { FaAlignCenter } from '@react-icons/all-files/fa/FaAlignCenter'
import { FaAlignJustify } from '@react-icons/all-files/fa/FaAlignJustify'
import { FaAlignLeft } from '@react-icons/all-files/fa/FaAlignLeft'
import { FaAlignRight } from '@react-icons/all-files/fa/FaAlignRight'

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          {
            title: 'Align center',
            value: 'AlignCenter',
            blockEditor: {
              icon: FaAlignCenter,
            },
          },
          {
            title: 'Align justify',
            value: 'AlignJustify',
            blockEditor: {
              icon: FaAlignJustify,
            },
          },
          {
            title: 'Align left',
            value: 'AlignLeft',
            blockEditor: {
              icon: FaAlignLeft,
            },
          },
          {
            title: 'Align right',
            value: 'AlignRight',
            blockEditor: {
              icon: FaAlignRight,
            },
          },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          { name: 'color', title: 'Color', type: 'color' },
        ],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
    {
      type: 'button',
    },
  ],
}
