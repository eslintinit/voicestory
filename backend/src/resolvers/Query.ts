import * as UserQuery from './User/UserQuery'
import * as CommunityQuery from './Community/CommunityQuery'
import { queryType } from 'nexus'

export const queries = queryType({
  definition(t) {
    // Enable crud for USERS
    t.crud.users({
      filtering: true,
      ordering: true,
    })
    // Enable crud for PRIVATE COMMUNITIES
    t.crud.communities({
      filtering: true,
      ordering: true,
    })
    // Public crud for COMMUNITIES

    t.crud.communities({
      alias: 'communitiesPublic',
      filtering: {
        url: true,
        id: true,
        author: true,
        description: true,
      },
      ordering: true,
    })
  },
})

export const Query = {
  queries,
  UserQuery,
  CommunityQuery,
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
