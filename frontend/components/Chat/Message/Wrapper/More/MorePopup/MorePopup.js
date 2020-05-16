import { useContext } from 'react'
import { useRouter } from 'next/router'
import { COMPANY_NAME } from 'utils/config'
import { UserContext } from 'context/UserContext'
import { isBlocked, isBlockedFromChannel, isBlockedFromCommunity } from 'utils/permission'

import MessageActionPopup from 'components/UI/MessageActionPopup'
import { DeleteIcon } from 'components/UI/Icons'
import plusIcon from 'public/icons/plus3.svg'

import * as S from './MorePopup.styled'

const MorePopup = ({ toggleUserBlock, toggleUserBlockFromChannel, toggleUserBlockFromCommunity, message, opened, close }) => {
  const { user } = useContext(UserContext);
  // console.log(message.auther);
  const {
    query: { community: communityUrl, channel: channelUrl },
    push,
  } = useRouter()

  const items = [
    {
      label: `${isBlocked(message.author) ? 'Unblock' : 'Block'} ${message.author.fullname}`,
      // icon: (
      //   <S.PlusIconWrapper>
      //     <use xlinkHref={`${plusIcon}#icon-plus3`} />
      //   </S.PlusIconWrapper>
      // ),
      onClick: () => {
        toggleUserBlock(message.author, isBlocked(message.author) ? '0' : '1');
        // close();
      }
        
    },
    {
      label: `${isBlockedFromChannel(message.author, channelUrl, communityUrl) ? 'Unblock' : 'Block'} from Channel`,
      // icon: (
      //   <S.PlusIconWrapper>
      //     <use xlinkHref={`${plusIcon}#icon-plus3`} />
      //   </S.PlusIconWrapper>
      // ),
      onClick: () => {
        toggleUserBlockFromChannel(message.author, isBlockedFromChannel(message.author, channelUrl, communityUrl) ? '0' : '1');
      }
        
    },
    {
      label: `${isBlockedFromCommunity(message.author, communityUrl) ? 'Unblock' : 'Block'} from Community`,
      // icon: (
      //   <S.PlusIconWrapper>
      //     <use xlinkHref={`${plusIcon}#icon-plus3`} />
      //   </S.PlusIconWrapper>
      // ),
      onClick: () => {
        toggleUserBlockFromCommunity(message.author, isBlockedFromCommunity(message.author, communityUrl) ? '0' : '1');
      }
        
    },
  ]
  return <MessageActionPopup opened={opened} close={close} items={items} />
}

export default MorePopup
