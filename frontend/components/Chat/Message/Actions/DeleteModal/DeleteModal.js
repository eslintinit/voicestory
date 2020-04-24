import { useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { useKeyboardShortcut, useEscapeToClose } from 'hooks'

import { DELETE_MESSAGE, GET_MESSAGES } from 'apis/Message'
import { ParentMessage } from 'components/Chat/Message/Wrapper'
import { ButtonSubtle, ButtonDanger } from 'components/UI/Button'
import * as S from './DeleteModal.styled'

const MessageDeleteConfirmation = ({ message, close }) => {
  const router = useRouter()
  const { community: communityUrl, channel: channelUrl } = router.query

  const [deleteMessage] = useMutation(DELETE_MESSAGE, {
    update(
      cache,
      {
        data: {
          deleteMessage: { id: deletedMessageId },
        },
      },
    ) {
      const oldData = cache.readQuery({
        query: GET_MESSAGES,
        variables: {
          communityUrl,
          channelUrl,
        },
      })

      const newMessages = oldData.messages.filter(
        (m) => m.id !== deletedMessageId,
      )

      cache.writeQuery({
        query: GET_MESSAGES,
        variables: {
          communityUrl,
          channelUrl,
        },
        data: { messages: newMessages },
      })
    },
  })

  const onDelete = () => {
    deleteMessage({ variables: { id: message.id, type: 'DELETE' } })
    close()
  }

  useEscapeToClose(close)
  useKeyboardShortcut(
    {
      Enter: onDelete,
    },
    {
      modKey: null,
      eventType: 'keydown',
    },
  )

  return (
    <S.Overlay>
      <S.Modal>
        <S.Header>
          <S.Heading>Delete message</S.Heading>
          <S.Description>
            Are you sure you want to delete this message? This can’t be undone.
          </S.Description>
        </S.Header>
        <S.MessagePreview>
          <ParentMessage message={message} />
        </S.MessagePreview>
        <S.Footer>
          <ButtonSubtle onClick={close}>Cancel</ButtonSubtle>
          <ButtonDanger onClick={onDelete}>Delete</ButtonDanger>
        </S.Footer>
      </S.Modal>
    </S.Overlay>
  )
}

export default MessageDeleteConfirmation
