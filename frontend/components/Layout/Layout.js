import Navbar from 'components/Navbar'
import ShortcutsWindow from 'components/UI/Shortcuts/ShortcutsWindow'
// import Loader from 'components/UI/Loader'

import * as S from './Layout.styled'

const Layout = ({ children, hideLayout }) => {
  if (hideLayout) {
    return children
  }

  return (
    <S.Layout data-hj-suppress>
      <Navbar />
      <S.Content>
        {children}

        {/* Done for members portal. Let's find a more elegent solution later */}
        <div
          id="portal-root"
          // style={{ width: '538px', minWidth: '538px', display: 'none' }}
          style={{ width: '25%', minWidth: '25%', display: 'none' }}
        />
      </S.Content>
      <ShortcutsWindow />
    </S.Layout>
  )
}

export default Layout
