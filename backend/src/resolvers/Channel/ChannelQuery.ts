import { queryField, stringArg } from 'nexus'
import { getUserId, getTenant } from '../../utils'

export const channels = queryField('channels', {
  type: 'Channel',
  list: true,
  args: { communityUrl: stringArg() },
  resolve: (parent, { communityUrl }, ctx) => {
    return ctx.prisma.channel.findMany({
      where: {
        communityUrl,
      },
      orderBy: { createdAt: 'asc' },
    })
  },
})

export const channel = queryField('channel', {
  type: 'Channel',
  nullable: true,
  args: {
    url: stringArg(),
    communityUrl: stringArg(),
  },
  resolve: (parent, { url, communityUrl }, ctx) => {
    return ctx.prisma.channel.findOne({
      where: { url, communityUrl },
    })
  },
})
