import { mutationField, stringArg, booleanArg } from 'nexus'
import { getUserId } from '../../utils'

export const createCommunity = mutationField('createCommunity', {
  type: 'Community',
  args: {
    name: stringArg(),
    url: stringArg(),
    image: stringArg(),
    description: stringArg({ nullable: true }),
    isPrivate: booleanArg({ nullable: true }),
  },
  resolve: (parent, { name, url, description, isPrivate, image }, ctx) => {
    const userId = getUserId(ctx)

    return ctx.prisma.community.create({
      data: {
        name,
        url,
        image,
        description,
        /* isPrivate, */
        author: { connect: { id: userId } },
        members: { connect: { id: userId } },
        channels: {
          create: {
            name: 'general',
            url: 'general',
          },
        },
      },
    })
  },
})

export const followCommunity = mutationField('followCommunity', {
  type: 'Community',
  args: { url: stringArg() },
  resolve: async (parent, { url }, ctx) => {
    const userId = getUserId(ctx)
    return ctx.prisma.community.update({
      where: { url },
      data: { members: { connect: { id: userId } } },
    })
  },
})

export const unfollowCommunity = mutationField('unfollowCommunity', {
  type: 'Community',
  args: { url: stringArg() },
  resolve: async (parent, { url }, ctx) => {
    const userId = getUserId(ctx)
    return ctx.prisma.community.update({
      where: { url },
      data: { members: { disconnect: { id: userId } } },
    })
  },
})

// WE DONT NEED, crud allows this

// export const deleteCommunity = mutationField('deleteCommunity', {
//   type: 'Community',
//   args: {
//     communityId: stringArg(),
//   },
//   resolve: async (parent, { communityId }, ctx) => {
//     const userId = getUserId(ctx)
//     return ctx.prisma.community.delete({
//       where: { id: communityId },
//     })
//   },
// })

// export const deleteCommunityByUrl = mutationField('deleteCommunityByUrl', {
//   type: 'Community',
//   args: {
//     communityUrl: stringArg(),
//   },
//   resolve: async (parent, { communityUrl }, ctx) => {
//     const userId = getUserId(ctx)
//     return ctx.prisma.community.delete({
//       where: { url: communityUrl },
//     })
//   },
// })
