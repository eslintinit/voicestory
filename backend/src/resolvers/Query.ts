import * as UserQuery from './User/UserQuery'
import * as RoleQuery from './Role/RoleQuery'
import * as CommunityQuery from './Community/CommunityQuery'
import * as MessageQuery from './Message/MessageQuery'
import * as FileQuery from './File/FileQuery'

import { queryType } from 'nexus'

export const crudQueries = queryType({
  definition(t) {
    // Enable crud for USERS
    t.crud.users({
      filtering: true,
      ordering: true,
    })
    // Enable crud for PRIVATE COMMUNITIES
    t.crud.community()
    t.crud.communities({
      filtering: true,
      ordering: true,
    })
    t.crud.channel()
    t.crud.channels({
      filtering: true,
      ordering: true,
    })
  },
})

export const Query = {
  crudQueries,

  me: { UserQuery },
  users: { UserQuery },
  getUser: { UserQuery },

  communities: { CommunityQuery },
  community: { CommunityQuery },
  searchCommunities: { CommunityQuery },

  UserQuery,
  CommunityQuery,
  /* channel: { ChannelQuery }, */
  /* channels: { ChannelQuery }, */

  messages: { MessageQuery },
  files: { FileQuery },
  roles: { RoleQuery },
}
