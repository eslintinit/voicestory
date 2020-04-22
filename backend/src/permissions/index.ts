import { rule, shield, and, or, not } from 'graphql-shield'
import { getUserId, isEmpty } from '../utils'

const isAuthenticatedUser = rule()(async (parent, args, context) => {
  const userId = getUserId(context)
  const isAuth = !isEmpty(userId)
  console.log('isAuthenticatedUser' + isAuth)
  return isAuth
})

// Is user Containing isOwner on Account
const isOwner = rule()(async (parent, { id }, context) => {
  const userId = getUserId(context)
  if (!userId) return false
  try {
    const user = await context.prisma.user.findOne({
      where: {
        id: userId,
      },
    })
    if (user.owner && user.owner === '1') {
      return true
    }
    return false
  } catch (error) {
    console.log('canManageCommunity - NO', error)
    return false
  }
})

// Can Manage All Communities by role
const canManageCommunity = rule()(async (parent, { id }, context) => {
  const userId = getUserId(context)
  if (!userId) return false
  try {
    const roles = await context.prisma.user
      .findOne({
        where: {
          id: userId,
        },
      })
      .role()

    let result = false
    roles.forEach((role: any) => {
      if (role.permissions.includes('manage_community')) {
        result = true
      }
    })
    return result
  } catch (error) {
    console.log('canManageCommunity - NO', error)
    return false
  }
})

// Does user has manage_channel role
const canManageChannel = rule()(async (parent, { id }, context) => {
  const userId = getUserId(context)
  if (!userId) return false
  try {
    const roles = await context.prisma.user
      .findOne({
        where: {
          id: userId,
        },
      })
      .role()

    let result = false
    roles.forEach((role: any) => {
      if (role.permissions.includes('manage_channel')) {
        result = true
      }
    })
    return result
  } catch (error) {
    console.log('canManageChannel - NO', error)
    return false
  }
})

// does user has manage role
const canManageRole = rule()(async (parent, { id }, context) => {
  const userId = getUserId(context)
  if (!userId) return false
  try {
    const roles = await context.prisma.user
      .findOne({
        where: {
          id: userId,
        },
      })
      .role()

    let result = false
    roles.forEach((role: any) => {
      if (role.permissions.includes('manage_role')) {
        result = true
      }
    })
    console.log('canManageRole', result)
    return result
  } catch (error) {
    console.log('canManageRole - NO', error)
    return false
  }
})

// Does user has chat permision  role
const canChatPermission = rule()(async (parent, { id }, context) => {
  const userId = getUserId(context)
  if (!userId) return false
  try {
    const roles = await context.prisma.user
      .findOne({
        where: {
          id: userId,
        },
      })
      .role()

    let result = false
    roles.forEach((role: any) => {
      if (role.permissions.includes('chat_permission')) {
        result = true
      }
    })
    console.log('canChatPermission', result)
    return result
  } catch (error) {
    console.log('canChatPermission - NO', error)
    return false
  }
})

//  user can upload image role
const canUploadImage = rule()(async (parent, { id }, context) => {
  const userId = getUserId(context)
  if (!userId) return false
  try {
    const roles = await context.prisma.user
      .findOne({
        where: {
          id: userId,
        },
      })
      .role()

    let result = false
    roles.forEach((role: any) => {
      if (role.permissions.includes('upload_image')) {
        result = true
      }
    })
    console.log('canUploadImage', result)
    return result
  } catch (error) {
    console.log('canUploadImage - NO', error)
    return false
  }
})

//  user can post links role
const canPostLinks = rule()(async (parent, { id }, context) => {
  const userId = getUserId(context)
  if (!userId) return false
  try {
    const roles = await context.prisma.user
      .findOne({
        where: {
          id: userId,
        },
      })
      .role()
    let result = false
    roles.forEach((role: any) => {
      if (role.permissions.includes('post_links')) {
        result = true
      }
    })
    console.log('canUploadImage', result)
    return result
  } catch (error) {
    console.log('canUploadImage - NO', error)
    return false
  }
})

// can user delete message he posted
const canDeleteMessage = rule()(async (parent, { messageId }, context) => {
  const userId = getUserId(context)
  if (!userId) return false
  try {
    let result = false
    const roles = await context.prisma.user
      .findOne({
        where: {
          id: userId,
        },
      })
      .role()

    roles.forEach((role: any) => {
      if (role.permissions.includes('delete_message')) {
        result = true
      }
    })
    if (result) return true
    const requestingUserIsAuthor = await context.prisma.message.findMany({
      where: {
        id: messageId,
        author: { id: userId },
      },
    })

    if (requestingUserIsAuthor[0]) {
      result = true
    }
    console.log('canDeleteMessage', result)
    return result
  } catch (error) {
    console.log('canDeleteMessage - NO', error)
    return false
  }
})

// can user edit message he posted
const canEditMessage = rule()(async (parent, { messageId }, context) => {
  const userId = getUserId(context)
  if (!userId) return false
  try {
    let result = false
    const roles = await context.prisma.user
      .findOne({
        where: {
          id: userId,
        },
      })
      .role()
    const requestingUserIsAuthor = await context.prisma.message.findMany({
      where: {
        id: messageId,
        author: { id: userId },
      },
    })

    if (requestingUserIsAuthor[0]) {
      result = true
    }
    console.log('canEditMessage', result)
    return result
  } catch (error) {
    console.log('canEditMessage - NO', error)
    return false
  }
})

const anyUser = rule()(async (parent, args, context) => {
  console.log('AnyUser' + context.request.get('voicestory-tenant'))
  return true
})
