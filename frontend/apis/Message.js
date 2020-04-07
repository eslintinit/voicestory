import gql from 'graphql-tag'

const MessageFragment = gql`
  fragment MessageFragment on Message {
    id
    body
    createdAt
    author {
      id
      username
      fullname
      image
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
