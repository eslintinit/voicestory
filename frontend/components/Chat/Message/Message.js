import { transformMessage } from 'utils/helper'

import Wrapper from './Wrapper'

import * as S from './Message.styled'

const Message = ({ currentShowMorePopupMessageId, setCurrentShowMorePopupMessageId, toggleUserBlock, toggleUserBlockFromChannel, toggleUserBlockFromCommunity, user, message, isChild }) => {
  return (
    <S.Container>
      <Wrapper currentShowMorePopupMessageId={currentShowMorePopupMessageId} setCurrentShowMorePopupMessageId={setCurrentShowMorePopupMessageId} toggleUserBlock={toggleUserBlock} toggleUserBlockFromChannel={toggleUserBlockFromChannel} toggleUserBlockFromCommunity={toggleUserBlockFromCommunity} user={user} message={message} isChild={isChild}>
        <S.Body child={isChild}>{transformMessage(message.body)}</S.Body>
      </Wrapper>
    </S.Container>
  )
}

export default Message
