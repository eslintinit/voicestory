import gql from 'graphql-tag'

const ChannelFragment = gql`
  fragment ChannelFragment on Channel {
    id
    name
    description
    url
    community {
      url
    }
  }
`

const ChannelMembersFragment = gql`
  fragment ChannelMembersFragment on Channel {
    community {
      members {
        id
        image
        username
        fullname
        isOnline
        lastSeenAt
      }
    }
  }
`

export const GET_CHANNELS = gql`
  query channels($communityUrl: String!) {
    channels(
      where: { communityUrl: { equals: $communityUrl } }
      orderBy: { createdAt: asc }
    ) {
      ...ChannelFragment
      ...ChannelMembersFragment
    }
  }
  ${ChannelFragment}
  ${ChannelMembersFragment}
`

export const CREATE_CHANNEL = gql`
  mutation createChannel(
    $name: String!
    $description: String
    $url: String!
    $communityUrl: String!
  ) {
    createChannel(
      data: {
        name: $name
        description: $description
        url: $url
        community: { connect: { url: $communityUrl } }
      }
    ) {
      id
    }
  }
`

export const UPDATE_CHANNEL = gql`
  mutation updateChannel(
    $description: String
    $url: String!
    $communityUrl: String!
  ) {
    updateChannel(
      where: { communityUrl_url: { communityUrl: $communityUrl, url: $url } }
      data: { description: $description }
    ) {
      id
      name
      description
    }
  }
`

export const DELETE_CHANNEL = gql`
  mutation deleteChannel($url: String!, $communityUrl: String!) {
    deleteChannel(
      where: { communityUrl_url: { communityUrl: $communityUrl, url: $url } }
    ) {
      id
      name
      description
    }
  }
`
