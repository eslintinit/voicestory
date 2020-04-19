import { useRouter } from 'next/router'
import { COMPANY_NAME } from 'utils/config'
import { useKeyboardShortcut } from 'hooks'

import * as S from './Channel.styled'

const channelsShortcutMap = {
  0: 'q',
  1: 'w',
  2: 'e',
  3: 'r',
}

export default ({ channel, index }) => {
  const {
    query: { community: communityUrl, channel: channelUrl },
    push,
  } = useRouter()

  const onChangeChannel = () => {
    if (channel.url !== channelUrl) {
      push(
        '/[company]/[community]/[channel]',
        `/${COMPANY_NAME()}/${communityUrl}/${channel.url}`,
        { shallow: true },
      )
    }
  }

  useKeyboardShortcut({
    [channelsShortcutMap[index]]: onChangeChannel,
  })

  return (
    <S.Channel
      onClick={() => onChangeChannel()}
      onFocus={() => onChangeChannel()}
      active={channel.url === channelUrl}
    >
      {`#${channel.name}`}
    </S.Channel>
  )
}
