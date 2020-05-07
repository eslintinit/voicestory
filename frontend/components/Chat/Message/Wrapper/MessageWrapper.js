import moment from 'moment'
import * as S from './MessageWrapper.styled'
import More from './More'

const ChildMessageWrapper = ({ message, children }) => (
  <S.Container child>
    <S.Content child>
      <S.Time child>{moment(message.createdAt).fromNow()}</S.Time>
      {children}
    </S.Content>
  </S.Container>
)

const ParentMessageWrapper = ({ toggleUserBlock, toggleUserBlockFromChannel, toggleUserBlockFromCommunity, user, message, children }) => {
  return (
    <S.Container>
      <S.Avatar src={message.author.image} />
      <S.Content>
        <S.User>
          <S.Name>{message.author.fullname}</S.Name>
          <S.Time>{moment(message.createdAt).format('h:mm A')}</S.Time>
        </S.User>
        {user && message.author && user.id !== message.author.id && (
        <S.ChatActions>
          <More toggleUserBlock={toggleUserBlock} toggleUserBlockFromChannel={toggleUserBlockFromChannel} toggleUserBlockFromCommunity={toggleUserBlockFromCommunity} message={message} />
        </S.ChatActions>
        )}
        {children}
      </S.Content>
    </S.Container>
  )
}
const MessageWrapper = ({ toggleUserBlock, toggleUserBlockFromChannel, toggleUserBlockFromCommunity, isChild, ...props }) => {
  return isChild ? ChildMessageWrapper(props) : ParentMessageWrapper({ toggleUserBlock, toggleUserBlockFromChannel, toggleUserBlockFromCommunity, user: props.user, message: props.message, children: props.children })
}

export default MessageWrapper
