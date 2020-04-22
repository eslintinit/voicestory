import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/react-hooks'
import { useKeyboardShortcut } from 'hooks'

import { AppContext } from 'context'
import { COMPANY_NAME } from 'utils/config'
import { GET_CHANNELS } from 'apis/Channel'

import Topic from './Topic/Topic'
// import Search from './Search/Search'
import More from './More'
import Members from './Members'
import Channels from './Channels/Channels'

import ChatHeaderPlaceholder from './ChatHeader.placeholder'
import * as S from './ChatHeader.styled'

const ChatHeader = () => {
  const {
    query: { community: communityUrl, channel: channelUrl },
    push,
  } = useRouter()

  const {
    appState: { channelsLoaded },
    dispatch,
  } = useContext(AppContext)
  const [getChannels, { data: { channels = [] } = {}, loading }] = useLazyQuery(
    GET_CHANNELS,
    {
      variables: { communityUrl },
      onCompleted: () => {
        if (!channelsLoaded) {
          dispatch('CHANNELS_LOADED')
        }
      },
    },
  )

  useEffect(() => {
    getChannels()
  }, [communityUrl])

  const selectedChannelIndex = channels.findIndex(
    (channel) => channel.url === channelUrl,
  )

  const toNextChannel = () => {
    const isLastChannel = selectedChannelIndex === channels.length - 1
    let nextUrl

    if (isLastChannel) {
      // To first channel
      nextUrl = channels[0].url
    } else {
      // to next
      nextUrl = channels[selectedChannelIndex + 1].url
    }

    push(
      `/[company]/[community]/[channel]`,
      `/${COMPANY_NAME()}/${communityUrl}/${nextUrl}`,
      { shallow: true },
    )
  }

  const toPreviousChannel = () => {
    const isFirstChannel = selectedChannelIndex === 0
    let nextUrl

    if (isFirstChannel) {
      // To last channel
      nextUrl = channels[channels.length - 1].url
    } else {
      // to next
      nextUrl = channels[selectedChannelIndex - 1].url
    }

    push(
      `/[company]/[community]/[channel]`,
      `/${COMPANY_NAME()}/${communityUrl}/${nextUrl}`,
      { shallow: true },
    )
  }

  // shift +
  useKeyboardShortcut(
    {
      n: () =>
        push(
          `/[company]/[community]/new-channel`,
          `/${COMPANY_NAME()}/${communityUrl}/new-channel`,
          {
            shallow: true,
          },
        ),
    },
    {
      modKey: 'shiftKey',
    },
  )

  // shift ← / →
  useKeyboardShortcut(
    {
      ArrowRight: toNextChannel,
      ArrowLeft: toPreviousChannel,
    },
    {
      modKey: 'shiftKey',
      eventType: 'keydown',
    },
  )

  if (loading) {
    return <ChatHeaderPlaceholder />
  }

  const selectedChannel = channels.find((channel) => channel.url === channelUrl)

  return (
    <S.Container>
      <S.Info>
        <Channels channels={channels} />
        {selectedChannel && (
          <S.ChannelInfo>
            <Members membersCount={selectedChannel.community.members.length} />
            <Topic channel={selectedChannel} />
          </S.ChannelInfo>
        )}
      </S.Info>
      <S.ChatActions>
        {/*
        <Search />
        */}
        <More />
      </S.ChatActions>
    </S.Container>
  )
}

export default ChatHeader
