import * as UserMutation from './User/UserMutation'
import * as CommunityMutation from './Community/CommunityMutation'
import * as ChannelMutation from './Channel/ChannelMutation'
import * as MessageMutation from './Message/MessageMutation'
import * as TypingStatusMutation from './TypingStatus/TypingStatusMutation'
import * as FileMutation from './File/FileMutation'
import * as RoleMutation from './Role/RoleMutation'

export const Mutation = {
  login: { UserMutation },
  users: { UserMutation },
  createCommunity: { CommunityMutation },
  followCommunity: { CommunityMutation },
  unfollowCommunity: { CommunityMutation },
  createChannel: { ChannelMutation },
  editChannel: { ChannelMutation },
  /* setUserTypingStatus: { TypingStatusMutation }, */
  /* createRole: { RoleMutation }, */
  /* updateRole: { RoleMutation }, */
  /* deleteRole: { RoleMutation }, */
  /* attachRoleToUser: { RoleMutation }, */
  /* deattachRoleToUser: { RoleMutation }, */
  /* sendMessage: { MessageMutation }, */
  /* deleteMessage: { MessageMutation }, */
  /* uploadFile: { FileMutation }, */
}
