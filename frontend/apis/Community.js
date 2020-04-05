import gql from 'graphql-tag'

const CommunityFragment = gql`
  fragment CommunityFragment on Community {
    id
    url
    image
    name
  }
`

export const GET_COMMUNITIES = gql`
  query communities {
    communities {
      ...CommunityFragment
    }
  }
  ${CommunityFragment}
`

export const GET_COMMUNITY = gql`
  query community($url: String) {
    community(url: $url) {
      id
      url
      image
      name
      author {
        id
      }
      members {
        id
        username
        isOnline
        image
      }
      notifications {
        id
      }
    }
  }
`

export const SEARCH_COMMUNITIES = gql`
  query searchCommunities($searchString: String) {
    searchCommunities(searchString: $searchString) {
      ...CommunityFragment
    }
  }
  ${CommunityFragment}
`

export const GET_FOLLOWED_COMMUNITIES = gql`
  query followedCommunities {
    followedCommunities {
      ...CommunityFragment
    }
  }
  ${CommunityFragment}
`

export const FOLLOW_COMMUNITY = gql`
  mutation followCommunity($url: String) {
    followCommunity(url: $url) {
      id
      members {
        id
      }
    }
  }
`

export const UNFOLLOW_COMMUNITY = gql`
  mutation unfollowCommunity($url: String) {
    unfollowCommunity(url: $url) {
      id
      members {
        id
      }
    }
  }
`

export const CREATE_COMMUNITY = gql`
  mutation createCommunity(
    $name: String!
    $url: String!
    $description: String
    $isPrivate: Boolean
    $image: String
  ) {
    createCommunity(
      name: $name
      url: $url
      description: $description
      isPrivate: $isPrivate
      image: $image
    ) {
      url
    }
  }
`
