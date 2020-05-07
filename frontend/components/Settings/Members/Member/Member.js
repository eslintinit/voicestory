import { useState, useEffect, useContext } from 'react'
import { MoreIcon } from 'components/UI/Icons'
import { UserContext } from 'context/UserContext'
import MorePopup from './MorePopup'
import * as S from './Member.styled'
import { isOwner, canManageRole } from 'utils/permission'

export default ({ user, roles, toggleUserBlock, toggleUserRole }) => {
  const me = useContext(UserContext).user;

  return (
    <S.Member key={user.id}>
      <S.User>
        <S.Avatar src={user.image} name={user.username} />
        <S.UserInfo>
          <S.Name>{user.fullname}</S.Name>
          <S.OnlineStatus online={user.isOnline} />
          <S.Username>{`@${user.username}`}</S.Username>
        </S.UserInfo>
      </S.User>
      <S.Options>
        <Roles me={me} user={user} />
        <More me={me} user={user} roles={roles} toggleUserBlock={toggleUserBlock} toggleUserRole={toggleUserRole} />
      </S.Options>
    </S.Member>
  )
}



const Roles = ({ me, user }) => {
  if(me.id === user.id) {
    return (
      <S.Role></S.Role>
    )
  }
  else if(isOwner(user)) {
    return (
      <S.Role>Owner</S.Role>
    )
  }
  else {
    return (
      user.roles.sort().map((role) => (
        <S.Role key={role.id}>
          <S.RoleColor color={role.color} />
          {role.title}
        </S.Role>
      ))
    )
  }
}

const More = ({ me, user, roles, toggleUserBlock, toggleUserRole }) => {
  const [showPopup, setShowPopup] = useState(false)
  // const isOwner = user.owner === '1'
  // const isOwner = false

  useEffect(() => {
    const listener = document.body.addEventListener('click', (event) => {
      const popupContainer = event.target.closest('.vs-popup')
      const moreIconContainer = event.target.closest('.vs-more-icon')
      if (!popupContainer && !moreIconContainer) {
        setShowPopup(false)
      }
    })
    return () => document.body.removeEventListener('click', listener)
  }, [])
  
  return (
    (
      ( isOwner(me) && me.id !== user.id ) ||
      ( !isOwner(me) && canManageRole(me) && me.id !== user.id )
    ) && !isOwner(user) &&
    (
      <>
        <MoreIcon
          active={showPopup}
          onClick={() => setShowPopup(!showPopup)}
          style={{ marginLeft: 24, transform: 'rotate(-90deg)' }}
        />
        <MorePopup
          show={showPopup}
          close={() => setShowPopup(false)}
          me={me}
          user={user}
          roles={roles}
          toggleUserBlock={toggleUserBlock}
          toggleUserRole={toggleUserRole}
        />
      </>
    )
  )
}
