import { useRouter } from 'next/router'
import { COMPANY_NAME } from 'utils/config'

import Popup from 'components/UI/EmojisPopup'
import { DeleteIcon } from 'components/UI/Icons'
import plusIcon from 'public/icons/plus3.svg'

import * as S from './EmojiPopup.styled'

const EmojiPopup = ({ setBody, body, opened, close }) => {
  const {
    query: { community: communityUrl },
    push,
  } = useRouter()

  const items = [
    {
      label: 'New channel',
      icon: (
        <S.PlusIconWrapper>
          <use xlinkHref={`${plusIcon}#icon-plus3`} />
        </S.PlusIconWrapper>
      ),
      onClick: () =>
        push(
          `/[company]/[community]/new-channel`,
          `/${COMPANY_NAME()}/${communityUrl}/new-channel`,
          { shallow: true },
        ),
    },
    {
      label: 'Delete channel',
      icon: (
        <S.DeleteIconWrapper>
          <DeleteIcon />
        </S.DeleteIconWrapper>
      ),
      onClick: () => alert('delete channel'),
    },
  ]
  return <Popup body={body} setBody={setBody} opened={opened} close={close} items={items} />
}

export default EmojiPopup
