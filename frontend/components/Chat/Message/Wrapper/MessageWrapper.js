import moment from 'moment'
import * as S from './MessageWrapper.styled'

const ChildMessageWrapper = ({ message, children }) => (
  <S.Container child>
    <S.Content child>
      <S.Time child>{moment(message.createdAt).fromNow()}</S.Time>
      {children}
    </S.Content>
  </S.Container>
)

const ParentMessageWrapper = ({ message, children }) => {
  return (
    <S.Container>
      <S.Avatar src={message.author.image} />
      <S.Content>
        <S.User>
          <S.Name>{message.author.fullname}</S.Name>
          <S.Time>{moment(message.createdAt).format('h:mm A')}</S.Time>
        </S.User>
        {children}
      </S.Content>
    </S.Container>
  )
}
const MessageWrapper = ({ isChild, ...props }) =>
  isChild ? ChildMessageWrapper(props) : ParentMessageWrapper(props)

export default MessageWrapper
