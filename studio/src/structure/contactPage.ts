import S from '@sanity/desk-tool/structure-builder'
import { MdPhone } from '@react-icons/all-files/md/MdPhone'

const contactPage = S.documentListItem()
  .title('Contact Page')
  .schemaType('document')
  .icon(MdPhone)
  .child(
    S.document()
      .schemaType('contact')
      .documentId('contactPage')
      .views([S.view.form()]),
  )

export default contactPage
