import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/react-hooks'

import { AppContext } from 'context'
import { GET_CHANNELS } from 'apis/Channel'

import Channel from './Channel/Channel'
import Placeholder from './Channels.placeholder'
import * as S from './Channels.styled'

const Channels = () => {
  const {
    query: { community: communityUrl },
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

  if (loading) {
    return <Placeholder />
  }

  return (
    <S.Channels>
      {channels.map((channel, index) => (
        <Channel channel={channel} key={channel.id} index={index}>
          {`#${channel.name}`}
        </Channel>
      ))}
    </S.Channels>
  )
}

export default Channels
