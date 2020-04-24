import { useState, useContext } from 'react'
import { ChatContext } from 'context'

import Actions from './Actions'
import { ChildMessage, ParentMessage } from './Wrapper'

import * as S from './Message.styled'

const Message = ({ message, isChild, index }) => {
  const [isEditing, setEditing] = useState(false)
  const { focusedMessageIndex, focusMessage, unfocusMessage } = useContext(
    ChatContext,
  )

  const tabIndex = index + 1

  const isFocused = focusedMessageIndex === tabIndex
  // const isFocused = tabIndex === 1

  // onFocusOut={() => unfocusMessage(tabIndex)}
  return (
    <S.Container
      tabIndex={tabIndex}
      id={`message-${tabIndex}`}
      onMouseEnter={() => focusMessage(tabIndex)}
      onMouseLeave={() => unfocusMessage(tabIndex)}
    >
      {isChild ? (
        <ChildMessage
          message={message}
          isEditing={isEditing}
          setEditing={setEditing}
        />
      ) : (
        <ParentMessage
          message={message}
          isEditing={isEditing}
          setEditing={setEditing}
        />
      )}

      {isFocused && (
        <Actions
          message={message}
          isEditing={isEditing}
          setEditing={setEditing}
        />
      )}
    </S.Container>
  )
}

export default Message
