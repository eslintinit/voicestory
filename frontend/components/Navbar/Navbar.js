import { useState } from 'react'
import { useRouter } from 'next/router'
import { useKeyboardShortcut, useDoubleKeyPress } from 'hooks'
// Commented yet because it's causing console error
import useSound from 'use-sound'

import { COMPANY_NAME } from 'utils/config'

import { ProfileIcon as MoreIcon, CloseIcon } from 'components/UI/Icons'
import PlusSVG from 'public/icons/new-plus-community.svg'
import ProfilePopup from './ProfilePopup'
import Tabs from './Tabs'

import * as S from './Navbar.styled'

const Navbar = () => {
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

  useDoubleKeyPress({
    key: 'Enter',
    onDoublePress: openWidget,
  })

  useDoubleKeyPress({
    key: 'Escape',
    onDoublePress: closeWidget,
  })

  const toCommunities = () => {
    push(`/[company]/communities`, `/${COMPANY_NAME()}/communities`, {
      shallow: true,
    })
  }

  // TODO: Only run if input is not active and not on communities page
  // On communities page '+' should trigger creating new community
  useKeyboardShortcut(
    {
      '+': toCommunities,
    },
    {
      modKey: 'shiftKey',
    },
  )

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

      <S.AddCommunityButton onClick={toCommunities} n>
        <S.AddCommunityIconWrapper>
          <use xlinkHref={`${PlusSVG}#icon-plus`} />
        </S.AddCommunityIconWrapper>
      </S.AddCommunityButton>

      <CloseIcon onClick={closeWidget} id="vs-close-widget" />
    </S.Container>
  )
}

export default Navbar
