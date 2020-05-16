import { useEffect, useRef, Fragment, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { groupBy } from 'lodash'
import moment from 'moment'
import { UserContext } from 'context/UserContext'

import { GET_MESSAGES, NEW_MESSAGE_SUBSCRIPTION } from 'apis/Message'
import { BLOCK, UNBLOCK, BLOCK_FROM_CHANNEL, UNBLOCK_FROM_CHANNEL, BLOCK_FROM_COMMUNITY, UNBLOCK_FROM_COMMUNITY } from 'apis/User'

import Message from 'components/Chat/Message/Message'
import ChatBodyPlaceholder, { ChatBodyEmpty } from './ChatBodyPlaceholder'

import * as S from './ChatBody.styled'

const ChatBody = () => {
  const [filteredMessages, setFilteredMessages] = useState([])
  const router = useRouter()
  const { user } = useContext(UserContext)
  const { community: communityUrl, channel: channelUrl } = router.query
  const [currentShowMorePopupMessageId, setCurrentShowMorePopupMessageId] = useState(null)

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

  const [block] = useMutation(BLOCK, {
    update: (cache, { data: { block: user } }) => {
      const { messages } = cache.readQuery({ 
        query: GET_MESSAGES, 
        variables: {
          communityUrl,
          channelUrl,
        } 
      })
      cache.writeQuery({
        query: GET_MESSAGES,
        variables: {
          communityUrl,
          channelUrl,
        },
        data: { messages: [ ...messages.map(m => {
          m.author = m.author.id === user.id ? user : m.author;
          return m;
        }) ] },
      })
      setFilteredMessages([ ...messages.map(m => {
        m.author = m.author.id === user.id ? user : m.author;
        return m;
      }) ])
    },
  })

  const [unblock] = useMutation(UNBLOCK, {
    update: (cache, { data: { unblock: user } }) => {
      const { messages } = cache.readQuery({ 
        query: GET_MESSAGES,
        variables: {
          communityUrl,
          channelUrl,
        },
      })
      cache.writeQuery({
        query: GET_MESSAGES,
        variables: {
          communityUrl,
          channelUrl,
        },
        data: { messages: [ ...messages.map(m => {
          m.author = m.author.id === user.id ? user : m.author;
          return m;
        }) ] },
      })
      setFilteredMessages([ ...messages.map(m => {
        m.author = m.author.id === user.id ? user : m.author;
        return m;
      }) ])
    },
  })
  
  const [blockFromChannel] = useMutation(BLOCK_FROM_CHANNEL, {
    update: (cache, { data: { blockFromChannel: user } }) => {
      const { messages } = cache.readQuery({ 
        query: GET_MESSAGES, 
        variables: {
          communityUrl,
          channelUrl,
        } 
      })
      cache.writeQuery({
        query: GET_MESSAGES,
        variables: {
          communityUrl,
          channelUrl,
        },
        data: { messages: [ ...messages.map(m => {
          m.author = m.author.id === user.id ? user : m.author;
          return m;
        }) ] },
      })
      setFilteredMessages([ ...messages.map(m => {
        m.author = m.author.id === user.id ? user : m.author;
        return m;
      }) ])
    },
  })

  const [unblockFromChannel] = useMutation(UNBLOCK_FROM_CHANNEL, {
    update: (cache, { data: { unblockFromChannel: user } }) => {
      const { messages } = cache.readQuery({ 
        query: GET_MESSAGES,
        variables: {
          communityUrl,
          channelUrl,
        },
      })
      cache.writeQuery({
        query: GET_MESSAGES,
        variables: {
          communityUrl,
          channelUrl,
        },
        data: { messages: [ ...messages.map(m => {
          m.author = m.author.id === user.id ? user : m.author;
          return m;
        }) ] },
      })
      setFilteredMessages([ ...messages.map(m => {
        m.author = m.author.id === user.id ? user : m.author;
        return m;
      }) ])
    },
  })
  
  const [blockFromCommunity] = useMutation(BLOCK_FROM_COMMUNITY, {
    update: (cache, { data: { blockFromCommunity: user } }) => {
      const { messages } = cache.readQuery({ 
        query: GET_MESSAGES, 
        variables: {
          communityUrl,
          channelUrl,
        } 
      })
      cache.writeQuery({
        query: GET_MESSAGES,
        variables: {
          communityUrl,
          channelUrl,
        },
        data: { messages: [ ...messages.map(m => {
          m.author = m.author.id === user.id ? user : m.author;
          return m;
        }) ] },
      })
      setFilteredMessages([ ...messages.map(m => {
        m.author = m.author.id === user.id ? user : m.author;
        return m;
      }) ])
    },
  })

  const [unblockFromCommunity] = useMutation(UNBLOCK_FROM_COMMUNITY, {
    update: (cache, { data: { unblockFromCommunity: user } }) => {
      const { messages } = cache.readQuery({ 
        query: GET_MESSAGES,
        variables: {
          communityUrl,
          channelUrl,
        },
      })
      cache.writeQuery({
        query: GET_MESSAGES,
        variables: {
          communityUrl,
          channelUrl,
        },
        data: { messages: [ ...messages.map(m => {
          m.author = m.author.id === user.id ? user : m.author;
          return m;
        }) ] },
      })
      setFilteredMessages([ ...messages.map(m => {
        m.author = m.author.id === user.id ? user : m.author;
        return m;
      }) ])
    },
  })

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
  const toggleUserBlockFromChannel = async (user, handle) => {

    if (handle === '1') {
      await blockFromChannel({
        variables: { id: user.id, channelUrl, communityUrl },
        errorPolicy: 'all',
      })
    } else {
      await unblockFromChannel({
        variables: { id: user.id, channelUrl, communityUrl },
        errorPolicy: 'all',
      })
    }
  }

  /**
   * Event Functions
   * @param {User} user 
   */
  const toggleUserBlockFromCommunity = async (user, handle) => {

    if (handle === '1') {
      await blockFromCommunity({
        variables: { id: user.id, communityUrl },
        errorPolicy: 'all',
      })
    } else {
      await unblockFromCommunity({
        variables: { id: user.id, communityUrl },
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
    setFilteredMessages(messages)
  }, [messages.length])

  if (loading) {
    return <ChatBodyPlaceholder />
  }

  if (filteredMessages.length === 0) {
    return <ChatBodyEmpty />
  }

  const messagesByDay = groupBy(filteredMessages, (date) =>
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
                <Message currentShowMorePopupMessageId={currentShowMorePopupMessageId} setCurrentShowMorePopupMessageId={setCurrentShowMorePopupMessageId} toggleUserBlock={toggleUserBlock} toggleUserBlockFromChannel={toggleUserBlockFromChannel} toggleUserBlockFromCommunity={toggleUserBlockFromCommunity} user={user} message={message} isChild={isChild} key={message.id} />
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
