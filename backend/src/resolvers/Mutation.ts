import * as UserMutation from './User/UserMutation'
import * as CommunityMutation from './Community/CommunityMutation'
import * as ChannelMutation from './Channel/ChannelMutation'
import * as MessageMutation from './Message/MessageMutation'
import * as TypingStatusMutation from './TypingStatus/TypingStatusMutation'
import * as FileMutation from './File/FileMutation'
import * as RoleMutation from './Role/RoleMutation'

export const Mutation = {
  users: { UserMutation },
  login: { UserMutation },

  createCommunity: { CommunityMutation },
  followCommunity: { CommunityMutation },
  unfollowCommunity: { CommunityMutation },

  createChannel: { ChannelMutation },
  editChannel: { ChannelMutation },

  sendMessage: { MessageMutation },
  deleteMessage: { MessageMutation },

  /* setUserTypingStatus: { TypingStatusMutation }, */
  /* createRole: { RoleMutation }, */
  /* updateRole: { RoleMutation }, */
  /* deleteRole: { RoleMutation }, */
  /* attachRoleToUser: { RoleMutation }, */
  /* deattachRoleToUser: { RoleMutation }, */
  /* uploadFile: { FileMutation }, */
}
