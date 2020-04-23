// import Reply from './Reply'
// import Reaction from './Reaction'
// import More from './More'

import { DeleteIcon } from 'components/UI/Icons'
import * as S from './MessageActions.styled'

const MessageActions = ({
  // onEdit,
  // onReply,
  // isThread,
  // message,
  show,
  // setShow,
}) => {
  return (
    <S.Actions show={show}>
      {/*
      {!isThread && <Reply onReply={onReply} />}
      <Reaction messageId={message.id} setShow={setShow} />
      <More
        isThread={isThread}
        onEdit={onEdit}
        messageId={message.id}
        messageAuthor={message.author}
        setShow={setShow}
      />
      */}
      <S.Action
        aria-label="Delete"
        type="button"
        name="button"
        onClick={() => alert('delete')}
      >
        <S.DeleteIcon>
          <DeleteIcon />
        </S.DeleteIcon>
      </S.Action>
    </S.Actions>
  )
}

export default MessageActions
