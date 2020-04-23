import moment from 'moment'
import { transformMessage } from 'utils/helper'
import * as S from './MessageWrapper.styled'

export const ChildMessage = ({ message }) => (
  <S.Container child>
    <S.Content child>
      <S.Time child>{moment(message.createdAt).fromNow()}</S.Time>
      <S.Body child>{transformMessage(message.body)}</S.Body>
    </S.Content>
  </S.Container>
)

export const ParentMessage = ({ message }) => {
  return (
    <S.Container>
      <S.Avatar src={message.author.image} />
      <S.Content>
        <S.User>
          <S.Name>{message.author.fullname}</S.Name>
          <S.Time>{moment(message.createdAt).format('h:mm A')}</S.Time>
        </S.User>
        <S.Body>{transformMessage(message.body)}</S.Body>
      </S.Content>
    </S.Container>
  )
}
