import { useState } from 'react'
import { useRouter } from 'next/router'
import { useKeyboardShortcut } from 'hooks'
// Commented yet because it's causing console error
import useSound from 'use-sound'

import { COMPANY_NAME } from 'utils/config'

import { ProfileIcon as MoreIcon, CloseIcon } from 'components/UI/Icons'
import Tabs from './Tabs'

import * as S from './Navbar.styled'

const Navbar = () => {
  const { route, push } = useRouter()
  const [showMore, setShowMore] = useState(false)

  const [playSoundWidgetClose] = useSound('/sounds/card_deal.mp3')

  useKeyboardShortcut({
    t: () => {
      // If we are at communities page, we use this shortcut to create
      // new community
      if (route !== '/[company]/communities') {
        push(`/[company]/communities`, `/${COMPANY_NAME()}/communities`, {
          shallow: true,
        })
      }
    },
  })

  const closeWidget = () => {
    playSoundWidgetClose()
    window.parent.postMessage({ message: 'close-widget' }, '*')
  }

  const toCommunities = () => {
    push(`/[company]/communities`, `/${COMPANY_NAME()}/communities`, {
      shallow: true,
    })
  }

  return (
    <S.Container>
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
    </S.Container>
  )
}

export default Navbar
