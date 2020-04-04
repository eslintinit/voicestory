import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'

import { GET_CHANNELS } from 'apis/Channel'

import Channel from './Channel/Channel'
import Placeholder from './Channels.placeholder'
import * as S from './Channels.styled'

const Channels = () => {
  const {
    query: { community: communityUrl },
  } = useRouter()

  // TODO: only run this query on community change
  const { data: { channels = [] } = {}, loading } = useQuery(GET_CHANNELS, {
    variables: { communityUrl },
  })

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
