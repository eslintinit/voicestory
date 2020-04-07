import gql from 'graphql-tag'

const ChannelFragment = gql`
  fragment ChannelFragment on Channel {
    id
    name
    url
  }
`

export const GET_CHANNELS = gql`
  query channels($communityUrl: String!) {
    channels(communityUrl: $communityUrl) {
      ...ChannelFragment
      community {
        members {
          id
          image
          username
          fullname
        }
      }
    }
  }
  ${ChannelFragment}
`
