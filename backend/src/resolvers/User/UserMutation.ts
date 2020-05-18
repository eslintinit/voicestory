import { mutationField, stringArg } from 'nexus'
import { sign } from 'jsonwebtoken'
import { getTenant, getUserId } from '../../utils'

export const login = mutationField('login', {
  type: 'AuthPayload',
  args: {
    username: stringArg({ nullable: false }),
    fullname: stringArg({ nullable: true }),
    email: stringArg({ nullable: true }),
    social: stringArg({ nullable: false }),
  },
  resolve: async (_parent, { username, fullname, email, social }, context) => {
    try {
      let user = await context.prisma.user.findOne({
        where: { username },
      })

      if (!user) {
        throw new Error(`No user found for email: ${email}`)
      }

      const twitterProfile = JSON.parse(social)
      user = await context.prisma.user.update({
        where: { username },
        data: {
          image: twitterProfile.photos[0].value,
          isOnline: true
        },
      })

      const data = {
        /* token: sign( */
        /*   { userId: user.id, tenant: getTenant(context) }, */
        /*   process.env['APP_SECRET'], */
        /* ), */
        token: sign({ userId: user.id }, process.env['APP_SECRET']),
        user,
      }
      console.log(data, 'user')
      return data
    } catch (error) {
      if (social !== '') {
        const twitterProfile = JSON.parse(social)
        console.log(twitterProfile)
        const user = await context.prisma.user.create({
          data: {
            username: twitterProfile.username,
            fullname: twitterProfile.displayName,
            image: twitterProfile.photos[0].value,
            email: email,
            social: 'twitter',
            isOnline: true,
            /* communitiesFollowed: { connect: { url: 'general' } }, */
          },
        })

        // await context.prisma.community.update({
        //   where: { url: 'general' },
        //   data: { members: { connect: { email: email } } },
        // })

        return {
          token: sign({ userId: user.id }, process.env['APP_SECRET']),
          user,
        }
      } else {
        throw new Error(`No user found for email: ${email}`)
      }
    }
  },
})

export const logout = mutationField('logout', {
  type: 'User',
  resolve: async (parent, args, context) => {
    try {
      const userId = await getUserId(context)
      const user = await context.prisma.user.update({
        where: { id: userId },
        data: { isOnline: false },
      })
      context.pubsub.publish('USER_WENT_OFFLINE', {
        user,
        tenant: await getTenant(context),
      })
      return user
    } catch (error) {}
  },
})

export const block = mutationField('block', {
  type: 'User',
  args: {
    id: stringArg(),
  },
  resolve: (_parent, { id }, ctx) => {
    return ctx.prisma.user.update({
      where: { id },
      data: {
        blocked: "1",
      },
    })
  },
})

export const unblock = mutationField('unblock', {
  type: 'User',
  args: {
    id: stringArg(),
  },
  resolve: (_parent, { id }, ctx) => {
    return ctx.prisma.user.update({
      where: { id },
      data: {
        blocked: "0",
      },
    })
  },
})

export const blockFromChannel = mutationField('blockFromChannel', {
  type: 'User',
  args: {
    id: stringArg(),
    channelUrl: stringArg(),
    communityUrl: stringArg(),
  },
  resolve: async (_parent, { id, channelUrl, communityUrl }, ctx) => {
    let user = await ctx.prisma.user.findOne({
      where: { id },
    });

    let blockedChannels = user.blockedChannels !== null ? user.blockedChannels.split('$$$') : [];
    blockedChannels = blockedChannels.includes(`${communityUrl}>>>${channelUrl}`) ? blockedChannels : [ ...blockedChannels, `${communityUrl}>>>${channelUrl}` ];

    let res = await ctx.prisma.user.update({
      where: { id },
      data: {
        blockedChannels: blockedChannels.join('$$$'),
      },
    })
    return res;
  },
})

export const unblockFromChannel = mutationField('unblockFromChannel', {
  type: 'User',
  args: {
    id: stringArg(),
    channelUrl: stringArg(),
    communityUrl: stringArg(),
  },
  resolve: async (_parent, { id, channelUrl, communityUrl }, ctx) => {
    let user = await ctx.prisma.user.findOne({
      where: { id },
    });

    let blockedChannels = user.blockedChannels !== null ? user.blockedChannels.split('$$$') : [];
    blockedChannels = blockedChannels.filter(b => b !== `${communityUrl}>>>${channelUrl}`);

    let res = await ctx.prisma.user.update({
      where: { id },
      data: {
        blockedChannels: blockedChannels.join('$$$'),
      },
    })
    return res;
  },
})

export const blockFromCommunity = mutationField('blockFromCommunity', {
  type: 'User',
  args: {
    id: stringArg(),
    communityUrl: stringArg(),
  },
  resolve: async (_parent, { id, communityUrl }, ctx) => {
    let user = await ctx.prisma.user.findOne({
      where: { id },
    });

    let blockedCommunities = user.blockedCommunities !== null ? user.blockedCommunities.split('$$$') : [];
    blockedCommunities = blockedCommunities.includes(communityUrl) ? blockedCommunities : [ ...blockedCommunities, communityUrl ];

    let res = await ctx.prisma.user.update({
      where: { id },
      data: {
        blockedCommunities: blockedCommunities.join('$$$'),
      },
    })
    return res;
  },
})

export const unblockFromCommunity = mutationField('unblockFromCommunity', {
  type: 'User',
  args: {
    id: stringArg(),
    communityUrl: stringArg(),
  },
  resolve: async (_parent, { id, communityUrl }, ctx) => {
    let user = await ctx.prisma.user.findOne({
      where: { id },
    });

    let blockedCommunities = user.blockedCommunities !== null ? user.blockedCommunities.split('$$$') : [];
    blockedCommunities = blockedCommunities.filter(b => b !== communityUrl);

    let res = await ctx.prisma.user.update({
      where: { id },
      data: {
        blockedCommunities: blockedCommunities.join('$$$'),
      },
    })
    return res;
  },
})


/// Why is This mutationField? when it searches user ??? ?
// export const users = mutationField('users', {
// type: 'User',
// list: true,
// args: { searchString: stringArg({ nullable: true }) },
// resolve: (parent, { searchString }, context) => {
// return context.prisma.user.findMany({
// where: {
// username: {
// contains: searchString,
// },
// },
// })
// },
// })
