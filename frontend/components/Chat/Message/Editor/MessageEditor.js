import { useState } from 'react'
import { useKeyboardShortcut, useEscapeToClose } from 'hooks'
import { useMutation } from '@apollo/react-hooks'

import { EDIT_MESSAGE } from 'apis/Message'
import { ButtonPrimary, ButtonSubtle } from 'components/UI/Button'

import * as S from './MessageEditor.styled'

const MessageEditor = ({ message, close }) => {
  const [body, setBody] = useState(message.body)
  const [editMessageMutation] = useMutation(EDIT_MESSAGE)

  const editMessage = async () => {
    try {
      await editMessageMutation({ variables: { body, messageId: message.id } })
      close()
    } catch (error) {
      alert(error)
    }
  }

  useEscapeToClose(close)

  useKeyboardShortcut(
    {
      Enter: editMessage,
    },
    {
      modKey: null,
      eventType: 'keydown',
    },
  )

  return (
    <S.Container onSubmit={editMessage}>
      <S.EditInput
        value={body}
        onChange={(e) => setBody(e.target.value)}
        name="input"
        onClick={(e) => e.stopPropagation()}
        autoFocus
      />
      <S.Footer>
        <ButtonSubtle type="reset" compact onClick={close}>
          Cancel
        </ButtonSubtle>
        <ButtonPrimary
          type="submit"
          compact
          onClick={(e) => e.stopPropagation()}
        >
          Save changes
        </ButtonPrimary>
      </S.Footer>
    </S.Container>
  )
}

export default MessageEditor
