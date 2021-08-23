import S from '@sanity/desk-tool/structure-builder'
import { MdSync } from '@react-icons/all-files/md/MdSync'

const header = S.documentListItem()
  .title('Header')
  .schemaType('document')
  .icon(MdSync)
  .child(
    S.document()
      .schemaType('header')
      .documentId('headerSection')
      .views([S.view.form()]),
  )

export default header
