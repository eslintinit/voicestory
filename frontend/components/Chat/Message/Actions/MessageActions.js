import { useState } from 'react'
import { useKeyboardShortcut } from 'hooks'
import { EditIcon, DeleteIcon } from 'components/UI/Icons'

import DeleteModal from './DeleteModal'
import * as S from './MessageActions.styled'

const MessageActions = ({ message, isEditing, setEditing }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  useKeyboardShortcut(
    {
      Backspace: () => !isEditing && setShowDeleteModal(true),
      d: () => !isEditing && setShowDeleteModal(true),
      e: () => !isEditing && setEditing(true),
    },
    {
      modKey: null,
      eventType: 'keydown',
    },
  )

  if (isEditing) return null

  return (
    <S.Actions className="vs-message-actions">
      <S.Action aria-label="Edit" onClick={() => setEditing(true)}>
        <S.EditIcon>
          <EditIcon />
        </S.EditIcon>
      </S.Action>

      <S.Action aria-label="Delete" onClick={() => setShowDeleteModal(true)}>
        <S.DeleteIcon>
          <DeleteIcon />
        </S.DeleteIcon>
        {showDeleteModal && (
          <DeleteModal
            message={message}
            close={() => setShowDeleteModal(false)}
          />
        )}
      </S.Action>
    </S.Actions>
  )
}

export default MessageActions
