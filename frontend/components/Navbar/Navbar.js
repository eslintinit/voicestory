import { useState } from 'react'
import { useRouter } from 'next/router'
import { useKeyboardShortcut, useDoubleKeyPress } from 'hooks'
import { useContext } from 'react'
import { UserContext } from 'context/UserContext'
import Cookies from 'js-cookie'

// Commented yet because it's causing console error
import useSound from 'use-sound'

import { COMPANY_NAME } from 'utils/config'

import { ProfileIcon as MoreIcon, CloseIcon } from 'components/UI/Icons'
import ProfilePopup from './ProfilePopup'
import Tabs from './Tabs'

import * as S from './Navbar.styled'

const Navbar = () => {
  const { user, logout } = useContext(UserContext)
  const { route, push } = useRouter()
  const [showProfilePopup, setShowProfilePopup] = useState(false)

  const [playSoundWidgetOpen] = useSound('/sounds/card_drop.mp3')
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

  const openWidget = () => {
    playSoundWidgetOpen()
    window.parent.postMessage({ message: 'open-widget' }, '*')
  }

  const closeWidget = () => {
    playSoundWidgetClose()
    window.parent.postMessage({ message: 'close-widget' }, '*')
  }

  if(user && user.blocked === '1') { 
    console.log(user);
    Cookies.remove('token')
    if (window) {
      window.localStorage.setItem('logout', Date.now())
      localStorage.removeItem('user')
    }
    location.reload()
    closeWidget()
  }

  useDoubleKeyPress({
    key: 'Enter',
    onDoublePress: openWidget,
  })

  useDoubleKeyPress({
    key: 'Escape',
    onDoublePress: closeWidget,
  })

  const startCommunity = () =>
    push(`/[company]/communities/new`, `/${COMPANY_NAME()}/$/communities/new`)

  useKeyboardShortcut(
    {
      '+': startCommunity,
    },
    {
      modKey: 'shiftKey',
    },
  )

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
              onClick={() => setShowProfilePopup(!showProfilePopup)}
              active={showProfilePopup}
            />
            {showProfilePopup && (
              <ProfilePopup
                opened={showProfilePopup}
                close={() => setShowProfilePopup(false)}
              />
            )}
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
