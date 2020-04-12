import * as UserMutation from './User/UserMutation'
import * as CommunityMutation from './Community/CommunityMutation'
import * as ChannelMutation from './Channel/ChannelMutation'
import * as MessageMutation from './Message/MessageMutation'
import * as TypingStatusMutation from './TypingStatus/TypingStatusMutation'
import * as FileMutation from './File/FileMutation'
import * as RoleMutation from './Role/RoleMutation'
import { mutationType } from 'nexus'

export const crudMutations = mutationType({
  definition(t) {
    // Enable crud for COMMUNITIES
    t.crud.updateOneCommunity({ alias: 'updateCommunity' })
    t.crud.deleteOneCommunity({ alias: 'deleteCommunity' })
  },
})

export const Mutation = {
  crudMutations,
  UserMutation,
  CommunityMutation,
  /* createChannel: { ChannelMutation }, */
  /* setUserTypingStatus: { TypingStatusMutation }, */
  /* editChannel: { ChannelMutation }, */
  /* createRole: { RoleMutation }, */
  /* updateRole: { RoleMutation }, */
  /* deleteRole: { RoleMutation }, */
  /* attachRoleToUser: { RoleMutation }, */
  /* deattachRoleToUser: { RoleMutation }, */
  /* sendMessage: { MessageMutation }, */
  /* deleteMessage: { MessageMutation }, */
  /* uploadFile: { FileMutation }, */
}
