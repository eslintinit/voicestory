import { useEffect, useRef, Fragment } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { groupBy } from 'lodash'
import moment from 'moment'

import { GET_MESSAGES, NEW_MESSAGE_SUBSCRIPTION } from 'apis/Message'

import Message from 'components/Chat/Message/Message'
import ChatBodyPlaceholder, { ChatBodyEmpty } from './ChatBodyPlaceholder'

import * as S from './ChatBody.styled'

const ChatBody = () => {
  const router = useRouter()
  const { community: communityUrl, channel: channelUrl } = router.query

  const chatRef = useRef(null)
  const chatEndRef = useRef(null)

  const { subscribeToMore, data: { messages = [] } = {}, loading } = useQuery(
    GET_MESSAGES,
    {
      variables: {
        communityUrl,
        channelUrl,
      },
    },
  )

  // https://spectrum.chat/apollo/apollo-client/unsubscribe-subscribetomore~b7f64715-1a65-40d5-9147-5a6300de4e30
  useEffect(
    () =>
      subscribeToMore({
        document: NEW_MESSAGE_SUBSCRIPTION,
        variables: {
          communityUrl,
          channelUrl,
        },
        updateQuery: (
          { messages: oldMessages = [] },
          { subscriptionData: { data: { newMessage } = {} } = {} },
        ) => ({
          messages: [...oldMessages, newMessage],
        }),
      }),
    [communityUrl, channelUrl],
  )

  useEffect(() => {
    if (chatEndRef && chatEndRef.current) {
      // TODO: only trigger if chat was scrolled down to the bottom
      chatEndRef.current.scrollIntoView()
    }
  }, [messages.length])

  if (loading) {
    return <ChatBodyPlaceholder />
  }

  if (messages.length === 0) {
    return <ChatBodyEmpty />
  }

  const messagesByDay = groupBy(messages, (date) =>
    moment(date).startOf('day').format(),
  )

  return (
    <S.Container ref={chatRef}>
      {Object.entries(messagesByDay).map(([date, messagesList]) => {
        return (
          <Fragment key={date}>
            <S.Date date={date}>
              <S.DateText>{moment(date).format('dddd, MMM Do')}</S.DateText>
            </S.Date>
            {messagesList.map((message, index, list) => {
              const previousMessage = list[index - 1]

              const isChild =
                previousMessage &&
                previousMessage.author.username === message.author.username

              return (
                <Message
                  message={message}
                  index={index}
                  isChild={isChild}
                  key={message.id}
                />
              )
            })}
          </Fragment>
        )
      })}
      <div ref={chatEndRef} id="vs-chat-end" alt="Dummy" />
    </S.Container>
  )
}

export default ChatBody
