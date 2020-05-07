import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from 'context/UserContext'
import { AppContext } from 'context'
import { COMPANY_NAME } from 'utils/config'
import useDarkMode from 'use-dark-mode'
import { isOwner } from 'utils/permission'

import Toggle from 'components/UI/Toggle/Toggle'
import {
  SettingsIcon,
  UsersIcon,
  RolesIcon,
  DarkModeIcon,
} from 'components/UI/Icons'
import emojiIcon from 'public/icons/smile.svg'

import * as S from './ProfilePopup.styled'

const ModalMore = ({ opened, close }) => {
  const { user, logout } = useContext(UserContext)
  const { toggleShortcuts } = useContext(AppContext)
  const { value: isDarkMode, toggle: toggleDarkMode } = useDarkMode(false)
  const { push } = useRouter()

  useEffect(() => {
    const listener = document.body.addEventListener('click', (event) => {
      const modalContainer = event.target.closest('#modal-more')
      const profileIconContainer = event.target.closest('#profile-icon')
      if (!modalContainer && !profileIconContainer) {
        close()
      }
    })
    return () => document.body.removeEventListener('click', listener)
  }, [])

  const onLogout = () => {
    logout()
    close()
  }

  const toSettings = () => {
    push('/[company]/settings/profile', `/${COMPANY_NAME()}/settings/profile`)
    close()
  }
  const toRoles = () => {
    push('/[company]/settings/roles', `/${COMPANY_NAME()}/settings/roles`)
    close()
  }
  const toMembers = () => {
    push('/[company]/settings/members', `/${COMPANY_NAME()}/settings/members`)
    close()
  }

  return (
    <S.Container opened={opened} id="modal-more">
      {user && (
        <S.Header>
          <S.Avatar src={user.image} name={user.username} />
          <S.Info>
            <S.Fullname>{user.fullname}</S.Fullname>
            <S.Username>{`@${user.username}`}</S.Username>
          </S.Info>
        </S.Header>
      )}
      <S.Content style={!user ? { border: 'none' } : {}}>
        {user && (
          <S.MenuItem onClick={toMembers}>
            <S.UsersIcon>
              <UsersIcon />
            </S.UsersIcon>
            <span>Members</span>
          </S.MenuItem>
        )}
        {user && isOwner(user) && (
          <S.MenuItem onClick={toRoles}>
            <S.RolesIcon>
              <RolesIcon />
            </S.RolesIcon>
            <span>Roles</span>
          </S.MenuItem>
        )}
        {user && (
          <S.MenuItem onClick={toSettings}>
            <SettingsIcon />
            <span>Settings</span>
          </S.MenuItem>
        )}
        <S.MenuItem onClick={toggleShortcuts}>
          <S.EmojiIcon>
            <use xlinkHref={`${emojiIcon}#icon-smile`} />
          </S.EmojiIcon>
          <span>Shortcuts</span>
        </S.MenuItem>
        <S.MenuItem darkMode>
          <div>
            <DarkModeIcon />
            <span>Dark mode</span>
          </div>
          <Toggle value={isDarkMode} onChange={toggleDarkMode} />
        </S.MenuItem>
      </S.Content>
      {user && (
        <S.Footer onClick={onLogout}>
          <span>Log out</span>
        </S.Footer>
      )}
    </S.Container>
  )
}

export default ModalMore
