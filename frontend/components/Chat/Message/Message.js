import { useContext } from 'react'
import { ChatContext } from 'context'

import Actions from './Actions'
import { ChildMessage, ParentMessage } from './Wrapper'

import * as S from './Message.styled'

const Message = ({ message, isChild, index }) => {
  const { focusedMessageIndex, focusMessage, unfocusMessage } = useContext(
    ChatContext,
  )

  const tabIndex = index + 1

  const isFocused = focusedMessageIndex === tabIndex

  return (
    <S.Container
      tabIndex={tabIndex}
      id={`message-${tabIndex}`}
      onMouseEnter={() => focusMessage(tabIndex)}
      onMouseLeave={() => unfocusMessage(tabIndex)}
    >
      {isChild ? (
        <ChildMessage message={message} />
      ) : (
        <ParentMessage message={message} />
      )}

      {isFocused && <Actions />}
    </S.Container>
  )
}

export default Message
