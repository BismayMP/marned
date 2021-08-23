import S from '@sanity/desk-tool/structure-builder'
import { MdSync } from '@react-icons/all-files/md/MdSync'

const footer = S.documentListItem()
  .title('Footer')
  .schemaType('document')
  .icon(MdSync)
  .child(
    S.document()
      .schemaType('footer')
      .documentId('footerSection')
      .views([S.view.form()]),
  )

export default footer
