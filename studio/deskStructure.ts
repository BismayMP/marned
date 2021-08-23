import S from '@sanity/desk-tool/structure-builder'
import homePage from './src/structure/homePage'
import header from './src/structure/header'
import footer from './src/structure/footer'
import contactPage from './src/structure/contactPage'

const hiddenDocTypes = (listItem) =>
  ![
    'projectImage',
    'seo',
    'mainImage',
    'brand',
    'link',
    'blockContent',
    'button',
    'squaredSection',
    'carouselWithCategoryItem',
    'simpleBlockSection',
    'pressArticle',
    //resources
    'header',
    'footer',
    // pages
    'home',
    'contact',
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      header,
      footer,
      homePage,
      contactPage,
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
