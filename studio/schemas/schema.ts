// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import seo from './objects/seo'
import home from './pages/home'
import footer from './resources/footer'
import header from './resources/header'
import mainImage from './objects/mainImage'
import brand from './objects/brand'
import link from './objects/link'
import blockContent from './objects/blockContent'
import button from './objects/button'
import squaredSection from './objects/squaredSection'
import carouselWithCategoryItem from './objects/carouselWithCategoryItem'
import simpleBlockSection from './objects/simpleBlockSection'
import projectImage from './objects/projectImage'
import project from './pages/project'
import contact from './pages/contact'
import pressArticle from './objects/pressArticle'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Objects */
    projectImage,
    seo,
    link,
    blockContent,
    button,
    squaredSection,
    carouselWithCategoryItem,
    simpleBlockSection,
    pressArticle,
    //image holders
    mainImage,
    brand,
    /* resources */
    footer,
    header,
    /*pages*/
    home,
    project,
    contact,
  ]),
})
