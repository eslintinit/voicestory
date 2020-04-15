import { useState } from 'react'
import { UserIcon } from 'components/UI/Icons'
import MembersPortal from './MembersPortal'
import * as S from './Members.styled'

export default ({ membersCount }) => {
  const [showMembers, setShowMembers] = useState(false)

  return (
    <>
      <S.Members onClick={() => setShowMembers(!showMembers)}>
        <S.UserIcon>
          <UserIcon />
        </S.UserIcon>
        <S.MembersCount>{membersCount}</S.MembersCount>
      </S.Members>
      <MembersPortal show={showMembers} onClose={() => setShowMembers(false)} />
    </>
  )
}
