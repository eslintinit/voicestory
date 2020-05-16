import gql from 'graphql-tag'

const UserFragment = gql`
  fragment UserFragment on User {
    id
    fullname
    username
    bio
    email
    social
    image
    isOnline
    owner
    blockedCommunities
    blockedChannels
    blocked
    roles {
      id
      permissions
      title
      color
    }
  }
`

export const GET_ME = gql`
  query me {
    me {
      ...UserFragment
      roles {
        id
        permissions
        title
        color
      }
    }
  }
  ${UserFragment}
`

export const GET_USERS = gql`
  mutation users($searchString: String) {
    users(searchString: $searchString) {
      ...UserFragment
    }
  }
  ${UserFragment}
`

export const GET_USER = gql`
  query getUser($username: String!) {
    getUser(username: $username) {
      followers
      followings
      bio
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragment}
`

export const SEARCH_USERS = gql`
  query users($searchString: String) {
    users(searchString: $searchString) {
      ...UserFragment
      roles {
        id
        permissions
        title
        color
      }
    }
  }
  ${UserFragment}
`

export const LOGIN = gql`
  mutation login(
    $username: String!
    $fullname: String
    $email: String
    $social: String!
  ) {
    login(
      username: $username
      fullname: $fullname
      email: $email
      social: $social
    ) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragment}
`

export const LOGOUT = gql`
  mutation logout {
    logout {
      isOnline
    }
  }
`

export const USER_WENT_ONLINE = gql`
  subscription userWentOnline($tenant: String!) {
    userWentOnline(tenant: $tenant) {
      id
      username
      isOnline
    }
  }
`

export const USER_WENT_OFFLINE = gql`
  subscription userWentOffline($tenant: String!) {
    userWentOffline(tenant: $tenant) {
      id
      username
      isOnline
    }
  }
`

export const BLOCK = gql`
  mutation block(
    $id: String
  ) {
    block(
      id: $id
    ) {
      id
      fullname
      username
      bio
      email
      social
      image
      isOnline
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

export const UNBLOCK = gql`
  mutation unblock(
    $id: String
  ) {
    unblock(
      id: $id
    ) {
      id
      fullname
      username
      bio
      email
      social
      image
      isOnline
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

export const BLOCK_FROM_CHANNEL = gql`
  mutation blockFromChannel($id: String, $channelUrl: String, $communityUrl: String) {
    blockFromChannel(id: $id, channelUrl: $channelUrl, communityUrl: $communityUrl) {
      id
      fullname
      username
      bio
      email
      social
      image
      isOnline
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

export const UNBLOCK_FROM_CHANNEL = gql`
  mutation unblockFromChannel($id: String, $channelUrl: String, $communityUrl: String) {
    unblockFromChannel(id: $id, channelUrl: $channelUrl, communityUrl: $communityUrl) {
      id
      fullname
      username
      bio
      email
      social
      image
      isOnline
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

export const BLOCK_FROM_COMMUNITY = gql`
  mutation blockFromCommunity($id: String, $communityUrl: String) {
    blockFromCommunity(id: $id, communityUrl: $communityUrl) {
      id
      fullname
      username
      bio
      email
      social
      image
      isOnline
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

export const UNBLOCK_FROM_COMMUNITY = gql`
  mutation unblockFromCommunity($id: String, $communityUrl: String) {
    unblockFromCommunity(id: $id, communityUrl: $communityUrl) {
      id
      fullname
      username
      bio
      email
      social
      image
      isOnline
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