import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/react-hooks'
import { useKeyboardShortcut } from 'hooks'

import { AppContext } from 'context'
import { COMPANY_NAME } from 'utils/config'
import { GET_CHANNEL } from 'apis/Channel'

// import Topic from './Topic/Topic'
// import Search from './Search/Search'
import More from './More'
// import Members from './Members'
import Channels from './Channels/Channels'

import ChatHeaderPlaceholder from './ChatHeader.placeholder'
import * as S from './ChatHeader.styled'

const ChatHeader = () => {
  const {
    query: { community: communityUrl, channel: channelUrl },
    push,
  } = useRouter()

  const { channelLoaded, setChannelLoaded } = useContext(AppContext)

  const [
    getChannel,
    {
      // data: { channel = { community: { members: [] } } } = {},
      loading,
    },
  ] = useLazyQuery(GET_CHANNEL, {
    onCompleted: () => {
      if (!channelLoaded) {
        setChannelLoaded(true)
      }
    },
  })

  useEffect(() => {
    getChannel({ variables: { url: `${communityUrl}/${channelUrl}` } })
  }, [communityUrl, channelUrl])

  useKeyboardShortcut({
    n: () =>
      push(
        `/[company]/[community]/new-channel`,
        `/${COMPANY_NAME()}/${communityUrl}/new-channel`,
        {
          shallow: true,
        }
      ),
  })

  if (loading) {
    return <ChatHeaderPlaceholder />
  }

  return (
    <>
      <S.Container>
        <S.Info>
          <Channels />
          <S.ChannelInfo>
            {/*
            <Members membersCount={channel.community.members.length} />
            <Topic channel={channel} />
            */}
          </S.ChannelInfo>
        </S.Info>
        <S.ChatActions>
          {/*
          <Search />
          */}
          <More />
        </S.ChatActions>
      </S.Container>
    </>
  )
}

export default ChatHeader
