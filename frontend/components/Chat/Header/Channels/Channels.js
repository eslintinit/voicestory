import Channel from './Channel/Channel'
import * as S from './Channels.styled'

const Channels = ({ channels }) => {
  return (
    <S.Channels>
      {channels.map((channel, index) => (
        <Channel channel={channel} key={channel.id} index={index} />
      ))}
    </S.Channels>
  )
}

export default Channels
