import gql from 'graphql-tag'

export const CREATE_ROLE = gql`
  mutation createRole($title: String, $permissions: String, $color: String) {
    createRole(title: $title, permissions: $permissions, color: $color) {
      id
      title
      permissions
      color
    }
  }
`

export const UPDATE_ROLE = gql`
  mutation updateRole(
    $id: String
    $title: String
    $permissions: String
    $color: String
  ) {
    updateRole(
      id: $id
      title: $title
      permissions: $permissions
      color: $color
    ) {
      id
      title
      permissions
      color
    }
  }
`

export const DELETE_ROLE = gql`
  mutation deleteRole($id: String!) {
    deleteRole(id: $id) {
      id
      permissions
      title
      color
    }
  }
`

export const GET_ROLES = gql`
  query roles {
    roles {
      id
      title
      permissions
      color
    }
  }
`

export const GET_ROLE = gql`
  query roles {
    roles {
      id
      title
      permissions
      color
    }
  }
`

export const ATTACH_ROLE_TO_USER = gql`
  mutation attachRoleToUser($userId: String!, $roleId: String!) {
    attachRoleToUser(userId: $userId, roleId: $roleId) {
      id
      username
      social
      image
      isOnline
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

export const DEATTACH_ROLE_TO_USER = gql`
  mutation deattachRoleToUser($userId: String!, $roleId: String!) {
    deattachRoleToUser(userId: $userId, roleId: $roleId) {
      id
      username
      social
      image
      isOnline
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
