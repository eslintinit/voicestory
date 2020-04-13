import { transformMessage } from 'utils/helper'

import Wrapper from './Wrapper'

import * as S from './Message.styled'

const Message = ({ message, isChild }) => {
  return (
    <S.Container>
      <Wrapper message={message} isChild={isChild}>
        <S.Body child={isChild}>{transformMessage(message.body)}</S.Body>
      </Wrapper>
    </S.Container>
  )
}

export default Message
