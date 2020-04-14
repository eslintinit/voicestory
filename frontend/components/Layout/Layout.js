import Navbar from 'components/Navbar'
import ShortcutPortal from 'components/UI/Portal/ShortcutPortal'
// import Loader from 'components/UI/Loader'

import * as S from './Layout.styled'

const Layout = ({ children, hideLayout }) => {
  if (hideLayout) {
    return children
  }

  return (
    <S.Layout data-hj-suppress>
      <Navbar />
      <S.Content>{children}</S.Content>
      <ShortcutPortal />
    </S.Layout>
  )
}

export default Layout
