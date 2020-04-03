import { useState } from 'react'
import { useRouter } from 'next/router'
import { useKeyboardShortcut } from 'hooks'
// import useSound from 'use-sound'

import { COMPANY_NAME } from 'utils/config'

import { ProfileIcon as MoreIcon, CloseIcon } from 'components/UI/Icons'
import Tabs from './Tabs/Tabs'

import * as S from './Navbar.styled'

const Navbar = () => {
  const { push } = useRouter()
  const [showMore, setShowMore] = useState(false)

  // const [playSoundWidgetClose] = useSound('/sounds/card_deal.mp3')

  useKeyboardShortcut({
    b: () =>
      push(`/[company]/communities`, `/${COMPANY_NAME()}/communities`, {
        shallow: true,
      }),
  })

  const closeWidget = () => {
    // playSoundWidgetClose()
    window.parent.postMessage({ message: 'close-widget' }, '*')
  }

  const toCommunities = () => {
    push(`/[company]/communities`, `/${COMPANY_NAME()}/communities`, {
      shallow: true,
    })
  }

  return (
    <S.NavbarContainer>
      <S.IconsWrapper>
        <S.Icons>
          <S.IconBox last>
            <MoreIcon
              onClick={() => setShowMore(!showMore)}
              active={showMore}
            />
          </S.IconBox>
        </S.Icons>
      </S.IconsWrapper>

      <Tabs />

      <S.AddCommunity onClick={toCommunities} />

      <CloseIcon onClick={closeWidget} id="vs-close-widget" />
    </S.NavbarContainer>
  )
}

export default Navbar
