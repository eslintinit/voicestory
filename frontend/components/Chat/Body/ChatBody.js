import { useEffect, useRef, Fragment, useContext } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { groupBy } from 'lodash'
import moment from 'moment'
import { UserContext } from 'context/UserContext'

import { GET_MESSAGES, NEW_MESSAGE_SUBSCRIPTION } from 'apis/Message'
import { BLOCK, UNBLOCK } from 'apis/User'

import Message from 'components/Chat/Message/Message'
import ChatBodyPlaceholder, { ChatBodyEmpty } from './ChatBodyPlaceholder'

import * as S from './ChatBody.styled'

const ChatBody = () => {
  const router = useRouter()
  const { user } = useContext(UserContext)
  const { community: communityUrl, channel: channelUrl } = router.query

  const chatRef = useRef(null)
  const chatEndRef = useRef(null)

  const [block] = useMutation(BLOCK, {})
  const [unblock] = useMutation(UNBLOCK, {})

  const { subscribeToMore, data: { messages = [] } = {}, loading } = useQuery(
    GET_MESSAGES,
    {
      variables: {
        communityUrl,
        channelUrl,
      },
    },
  )
  
  /**
   * Event Functions
   * @param {User} user 
   */
  const toggleUserBlock = async (user, handle) => {
    if (handle === '0') {
      await unblock({
        variables: { id: user.id },
        errorPolicy: 'all',
      })
    } else {
      await block({
        variables: { id: user.id },
        errorPolicy: 'all',
      })
    }
  }

  /**
   * Event Functions
   * @param {User} user 
   */
  const toggleUserBlockFromChannel = async (user) => {

    if (user.blocked === '0') {
      await block({
        variables: { id: user.id },
        errorPolicy: 'all',
      })
    } else {
      await unblock({
        variables: { id: user.id },
        errorPolicy: 'all',
      })
    }
  }

  /**
   * Event Functions
   * @param {User} user 
   */
  const toggleUserBlockFromCommunity = async (user) => {

    if (user.blocked === '0') {
      await block({
        variables: { id: user.id },
        errorPolicy: 'all',
      })
    } else {
      await unblock({
        variables: { id: user.id },
        errorPolicy: 'all',
      })
    }
  }

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
                <Message toggleUserBlock={toggleUserBlock} toggleUserBlockFromChannel={toggleUserBlockFromChannel} toggleUserBlockFromCommunity={toggleUserBlockFromCommunity} user={user} message={message} isChild={isChild} key={message.id} />
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
