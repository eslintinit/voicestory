import { useState, useContext } from 'react'
import { UserContext } from 'context/UserContext'
import { useRouter } from 'next/router'
import { useEscapeToClose } from 'hooks'
import { useMutation } from '@apollo/react-hooks'
import useSound from 'use-sound'
import dynamic from 'next/dynamic'

import { SEND_MESSAGE } from 'apis/Message'
import { COMPANY_NAME } from 'utils/config'

import plusIcon from 'public/icons/plus.svg'
import * as S from './ChatInput.styled'

const DynamicTypingStatus = dynamic(
  () => import('./TypingStatus/TypingStatus'),
  { ssr: false },
)

const ChatInput = () => {
  const {
    query: { channel: channelUrl, community: communityUrl },
    push,
  } = useRouter()

  const [sendMessage] = useMutation(SEND_MESSAGE)

  useEscapeToClose(() => document.getElementById('vs-input').blur())

  const [body, setBody] = useState('')
  const { user: loggedUser } = useContext(UserContext)

  // const [playSoundSendMessage] = useSound('/sounds/click_snap_lo.mp3')

  const onSendMessage = () => {
    if (!loggedUser) {
      push(`/[company]/login`, `/${COMPANY_NAME()}/login`, {
        shallow: true,
      })
    } else if (body !== '') {
      // playSoundSendMessage()
      sendMessage({
        variables: {
          body,
          communityUrl,
          channelUrl,
        },
      })
      setBody('')
    }
  }

  const onKeyDown = (e) => {
    // Sending message
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSendMessage()
    }
  }

  const onChange = (e) => {
    setBody(e.target.value)
  }

  return (
    <S.ChatInputWrapper>
      <S.AddButton>
        <S.PlusIcon>
          <use xlinkHref={`${plusIcon}#icon-plus`} />
        </S.PlusIcon>
      </S.AddButton>

      <S.Container>
        <S.InputWrapper>
          <S.Input
            value={body}
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoFocus
            autoComplete="off"
          />
        </S.InputWrapper>

        {loggedUser ? (
          body !== '' && (
            <S.SendButton onClick={onSendMessage}>Send</S.SendButton>
          )
        ) : (
          <S.SendButton
            style={{ padding: '0 16px', width: 'auto' }}
            onClick={() =>
              push(`/[company]/login`, `/${COMPANY_NAME()}/login`, {
                shallow: true,
              })
            }
          >
            Login
          </S.SendButton>
        )}
      </S.Container>

      {/*
      <DynamicTypingStatus />
      */}
    </S.ChatInputWrapper>
  )
}

export default ChatInput
