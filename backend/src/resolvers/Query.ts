import * as UserQuery from './User/UserQuery'
import * as CommunityQuery from './Community/CommunityQuery'
import * as ChannelQuery from './Channel/ChannelQuery'
import * as MessageQuery from './Message/MessageQuery'
import * as FileQuery from './File/FileQuery'
import * as RoleQuery from './Role/RoleQuery'

export const Query = {
  me: { UserQuery },
  users: { UserQuery },
  getUser: { UserQuery },

  communities: { CommunityQuery },
  community: { CommunityQuery },
  searchCommunities: { CommunityQuery },

  /* channels: { ChannelQuery }, */
  channel: { ChannelQuery },

  messages: { MessageQuery },
  /* files: { FileQuery }, */
  /* roles: { RoleQuery }, */
}
