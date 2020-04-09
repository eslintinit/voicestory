import * as UserQuery from './User/UserQuery'
import * as CommunityQuery from './Community/CommunityQuery'
import { queryType } from 'nexus'

export const crudQueries = queryType({
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
  },
})

export const Query = {
  crudQueries,
  UserQuery,
  CommunityQuery,
  /* channel: { ChannelQuery }, */
  /* channels: { ChannelQuery }, */
  /* privateChannels: { ChannelQuery }, */
  /* messages: { MessageQuery }, */
  /* files: { FileQuery }, */
  /* roles: { RoleQuery }, */
}
