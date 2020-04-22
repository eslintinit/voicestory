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
  }
`

export const GET_ME = gql`
  query me {
    me {
      ...UserFragment
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
