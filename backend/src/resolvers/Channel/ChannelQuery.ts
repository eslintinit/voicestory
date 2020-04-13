import { queryField, stringArg, queryType } from 'nexus'
import { getUserId, getTenant } from '../../utils'

export const channel = queryType({
  definition(t) {
    t.crud.channel()
    t.crud.channels({
      filtering: true,
      ordering: true,
    })
  },
})

// export const channels = queryField('channels', {
//   type: 'Channel',
//   list: true,
//   args: { communityUrl: stringArg() },
//   resolve: (parent, { communityUrl }, ctx) => {
//     return ctx.prisma.channel.findMany({
//       where: {
//         communityUrl,
//       },
//       orderBy: { createdAt: 'asc' },
//     })
//   },
// })
