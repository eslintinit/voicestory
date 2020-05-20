import gql from 'graphql-tag'

const MessageFragment = gql`
  fragment MessageFragment on Message {
    id
    body
    createdAt
    author {
      id
      fullname
      username
      bio
      email
      social
      image
      isOnline
      lastSeenAt
      owner
      blockedCommunities
      blockedChannels
      blocked
      communitiesOwned {
        id
        url
      }
      communitiesFollowed {
        id
        url
      }
      roles {
        id
        permissions
        title
        color
      }
    }
  }
`

const MessageUrlFragment = gql`
  fragment MessageUrlFragment on Message {
    channel {
      url
      community {
        url
      }
    }
  }
`

export const GET_MESSAGES = gql`
  query messages($communityUrl: String, $channelUrl: String) {
    messages(communityUrl: $communityUrl, channelUrl: $channelUrl) {
      ...MessageFragment
    }
  }
  ${MessageFragment}
`

export const SEND_MESSAGE = gql`
  mutation sendMessage(
    $body: String!
    $communityUrl: String!
    $channelUrl: String!
  ) {
    sendMessage(
      body: $body
      communityUrl: $communityUrl
      channelUrl: $channelUrl
    ) {
      ...MessageFragment
    }
  }
  ${MessageFragment}
`

export const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription newMessage($communityUrl: String!, $channelUrl: String!) {
    newMessage(communityUrl: $communityUrl, channelUrl: $channelUrl) {
      ...MessageFragment
      ...MessageUrlFragment
    }
  }

  ${MessageFragment}
  ${MessageUrlFragment}
`
