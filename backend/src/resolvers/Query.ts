import * as UserQuery from './User/UserQuery'
import * as CommunityQuery from './Community/CommunityQuery'
import { queryField, queryType, stringArg } from 'nexus'

import * as ChannelQuery from './Channel/ChannelQuery'
import * as MessageQuery from './Message/MessageQuery'
import * as FileQuery from './File/FileQuery'
import * as RoleQuery from './Role/RoleQuery'
import { getUserId, isEmpty } from '../utils'
import { isContext } from 'vm'

export const queries = queryType({
  definition(t) {
    // crud for USERS
    t.crud.users({
      alias: 'users',
      filtering: true,
      ordering: true,
    })
  },
})

export const Query = {
  queries,
  UserQuery,

  // // users: { UserQuery },
  // // community: { CommunityQuery },
  // // communities: { CommunityQuery },
  // searchCommunities: { CommunityQuery },
  /* channel: { ChannelQuery }, */
  /* channels: { ChannelQuery }, */
  /* privateChannels: { ChannelQuery }, */
  /* messages: { MessageQuery }, */
  /* files: { FileQuery }, */
  /* roles: { RoleQuery }, */
}
