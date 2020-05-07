import { mutationType } from 'nexus'

import * as UserMutation from './User/UserMutation'
import * as CommunityMutation from './Community/CommunityMutation'
import * as ChannelMutation from './Channel/ChannelMutation'
import * as MessageMutation from './Message/MessageMutation'
import * as TypingStatusMutation from './TypingStatus/TypingStatusMutation'
import * as FileMutation from './File/FileMutation'
import * as RoleMutation from './Role/RoleMutation'

export const crudMutations = mutationType({
  definition(t) {
    // Enable crud for COMMUNITIES
    t.crud.updateOneCommunity({ alias: 'updateCommunity' })
    t.crud.deleteOneCommunity({ alias: 'deleteCommunity' })
    t.crud.createOneChannel({ alias: 'createChannel' })
    t.crud.updateOneChannel({ alias: 'updateChannel' })
    t.crud.deleteOneChannel({ alias: 'deleteChannel' })
  },
})

export const Mutation = {
  crudMutations,

  users: { UserMutation },
  login: { UserMutation },
  block: { UserMutation },
  unblock: { UserMutation },
  UserMutation,

  createCommunity: { CommunityMutation },
  followCommunity: { CommunityMutation },
  unfollowCommunity: { CommunityMutation },
  CommunityMutation,

  // channelMutations: { ChannelMutation },
  /* createChannel: { ChannelMutation }, */

  sendMessage: { MessageMutation },
  deleteMessage: { MessageMutation },

  uploadFile: { FileMutation },
  createRole: { RoleMutation },
  updateRole: { RoleMutation },
  deleteRole: { RoleMutation },
  attachRoleToUser: { RoleMutation },
  deattachRoleToUser: { RoleMutation },
}
