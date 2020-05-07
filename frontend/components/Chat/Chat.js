import ChatHeader from 'components/Chat/Header'
import ChatBody from 'components/Chat/Body'
import ChatInput from 'components/Chat/Input'

import * as S from './Chat.styled'


const Chat = () => { 
  
  return (
    <S.Container>
      <ChatHeader />
      <ChatBody />
      <ChatInput />
    </S.Container>
  )
}

export default Chat
