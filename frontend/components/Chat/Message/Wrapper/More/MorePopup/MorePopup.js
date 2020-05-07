import { useContext } from 'react'
import { useRouter } from 'next/router'
import { COMPANY_NAME } from 'utils/config'
import { UserContext } from 'context/UserContext'

import Popup from 'components/UI/Popup'
import { DeleteIcon } from 'components/UI/Icons'
import plusIcon from 'public/icons/plus3.svg'

import * as S from './MorePopup.styled'

const MorePopup = ({ toggleUserBlock, toggleUserBlockFromChannel, toggleUserBlockFromCommunity, message, opened, close }) => {
  const { user } = useContext(UserContext);
  console.log(user.roles);
  // console.log(message.auther);
  const {
    query: { community: communityUrl },
    push,
  } = useRouter()

  const items = [
    {
      label: `${message.author.blocked === '1' ? 'Unblock' : 'Block'} ${message.author.fullname}`,
      // icon: (
      //   <S.PlusIconWrapper>
      //     <use xlinkHref={`${plusIcon}#icon-plus3`} />
      //   </S.PlusIconWrapper>
      // ),
      onClick: () => {
        toggleUserBlock(message.author, message.author.blocked === '1' ? '0' : '1');
        close();
      }
        
    },
    {
      label: `Block from Channel`,
      // icon: (
      //   <S.PlusIconWrapper>
      //     <use xlinkHref={`${plusIcon}#icon-plus3`} />
      //   </S.PlusIconWrapper>
      // ),
      onClick: () => {
        if(confirm("Are you sure?")) {
          close();
          // alert('')
        }
      }
        
    },
    {
      label: `Block from Community`,
      // icon: (
      //   <S.PlusIconWrapper>
      //     <use xlinkHref={`${plusIcon}#icon-plus3`} />
      //   </S.PlusIconWrapper>
      // ),
      onClick: () => {
        if(confirm("Are you sure?")) {
          close();
          // alert('')
        }
      }
        
    },
  ]
  return <Popup opened={opened} close={close} items={items} />
}

export default MorePopup
