import gql from 'graphql-tag'

const ChannelFragment = gql`
  fragment ChannelFragment on Channel {
    id
    name
    url
  }
`

export const GET_CHANNEL_NOTIFICATIONS = gql`
  query channelNotifications($channelUrl: String!) {
    channelNotifications(channelUrl: $channelUrl) {
      id
    }
  }
`

export const MARK_CHANNEL_NOTIFICATIONS_AS_READ = gql`
  mutation markChannelNotificationsAsRead($channelUrl: String!) {
    markChannelNotificationsAsRead(channelUrl: $channelUrl) {
      id
    }
  }
`

export const GET_CHANNELS = gql`
  query channels($communityUrl: String!) {
    channels(communityUrl: $communityUrl) {
      ...ChannelFragment
      community {
        members {
          username
        }
      }
    }
  }
  ${ChannelFragment}
`

export const GET_CHANNEL = gql`
  query channel($url: String, $communityUrl: String) {
    channel(url: $url, communityUrl: $communityUrl) {
      ...ChannelFragment
      description
      community {
        members {
          username
        }
      }
    }
  }
  ${ChannelFragment}
`

export const CREATE_CHANNEL = gql`
  mutation createChannel(
    $name: String!
    $description: String
    $url: String!
    $isPrivate: Boolean
    $communityUrl: String!
  ) {
    createChannel(
      name: $name
      description: $description
      url: $url
      isPrivate: $isPrivate
      communityUrl: $communityUrl
    ) {
      ...ChannelFragment
    }
  }
  ${ChannelFragment}
`

export const EDIT_CHANNEL = gql`
  mutation editChannel(
    $channelId: String!
    $name: String!
    $description: String
  ) {
    editChannel(channelId: $channelId, name: $name, description: $description) {
      id
      name
      url
      description
    }
  }
`
