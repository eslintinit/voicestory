import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { groupBy } from 'lodash'
import moment from 'moment'

import { GET_MESSAGES } from 'apis/Message'

import Message from 'components/Chat/Message/Message'
import ChatBodyPlaceholder, { ChatBodyEmpty } from './ChatBodyPlaceholder'

import * as S from './ChatBody.styled'

const ChatBody = () => {
  const router = useRouter()
  const { community: communityUrl, channel: channelUrl } = router.query

  const { data: { messages = [] } = {}, loading } = useQuery(GET_MESSAGES, {
    variables: {
      communityUrl,
      channelUrl,
    },
  })
  if (loading) {
    return <ChatBodyPlaceholder />
  }

  if (messages.length === 0) {
    return <ChatBodyEmpty />
  }

  const messagesByDay = groupBy(messages, (date) =>
    moment(date).startOf('day').format(),
  )

  console.log('messages')
  console.log(messages)

  return (
    <>
      <S.Container>
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
                    isChild={isChild}
                    key={message.id}
                  />
                )
              })}
            </Fragment>
          )
        })}
      </S.Container>
      {/*
       */}
    </>
  )
}

export default ChatBody
