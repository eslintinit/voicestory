import * as UserQuery from './User/UserQuery'
import * as CommunityQuery from './Community/CommunityQuery'
import * as ChannelQuery from './Channel/ChannelQuery'
import * as MessageQuery from './Message/MessageQuery'
import * as FileQuery from './File/FileQuery'
import * as RoleQuery from './Role/RoleQuery'

export const Query = {
  me: { UserQuery },
  getUser: { UserQuery },
  users: { UserQuery },
  community: { CommunityQuery },
  communities: { CommunityQuery },
  searchCommunities: { CommunityQuery },
  /* channel: { ChannelQuery }, */
  /* channels: { ChannelQuery }, */
  /* privateChannels: { ChannelQuery }, */
  /* messages: { MessageQuery }, */
  /* files: { FileQuery }, */
  /* roles: { RoleQuery }, */
}
