import Navbar from 'components/Navbar'
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
      {/*
      <S.Content>
        {children}
        <div id="portal-root" style={{ width: '538px', minWidth: '538px', display: 'none' }} />
      </S.Content>
      <div id="alert-root" style={{ width: '538px', minWidth: '538px', display: 'none' }} />
      <div id="ReactModalPortal" style={{ width: '100%', minWidth: '100%' }} />
      */}
    </S.Layout>
  )
}

export default Layout
