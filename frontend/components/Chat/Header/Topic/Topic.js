import { useContext, useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import InlineEdit from 'components/UI/InlineEdit/Parent'

import { UPDATE_CHANNEL } from 'apis/Channel'

import { UserContext } from 'context/UserContext'
// import { canManageChannel } from 'utils/permission'

import * as S from './Topic.styled'

const Topic = ({ onChangeTopic, channel }) => {
  const [topic, setTopic] = useState(channel.description || '')
  const [updateChannel] = useMutation(UPDATE_CHANNEL)
  const { user } = useContext(UserContext)
  // const canUpdateChannel = user && canManageChannel(user)
  const canUpdateChannel = !!user

  useEffect(() => {
    setTopic(channel.description)
  }, [channel])

  const changeDescription = async () => {
    try {
      await updateChannel({
        variables: {
          url: channel.url,
          communityUrl: channel.community.url,
          description: topic,
        },
        errorPolicy: 'all',
      })
      onChangeTopic()
    } catch (error) {
      // alert(error);
    }
  }

  return (
    <S.ChatTopic>
      <InlineEdit
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Set a topic"
        onSave={changeDescription}
        canEdit={canUpdateChannel}
      />
    </S.ChatTopic>
  )
}

export default Topic
