import { useState, useEffect, useContext } from 'react'
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

  const { channelsLoaded, setChannelsLoaded } = useContext(AppContext)
  const [getChannels, { data: { channels = [] } = {}, loading }] = useLazyQuery(
    GET_CHANNELS,
    {
      variables: { communityUrl },
      onCompleted: () => {
        if (!channelsLoaded) {
          setChannelsLoaded(true)
        }
      },
    },
  )

  useEffect(() => {
    getChannels()
  }, [communityUrl])

  // const getSelectedChannel = () =>
  // const [selectedChannel, setSelectedChannel] = useState(null)

  useKeyboardShortcut({
    n: () =>
      push(
        `/[company]/[community]/new-channel`,
        `/${COMPANY_NAME()}/${communityUrl}/new-channel`,
        {
          shallow: true,
        },
      ),
  })

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
            {/*
            <Members membersCount={selectedChannel.community.members.length} />
            */}
            <Members membersCount={242} />
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
