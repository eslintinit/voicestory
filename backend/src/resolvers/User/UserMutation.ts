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
            email,
            social: 'twitter',
            /* communitiesFollowed: { connect: { url: 'general' } }, */
          },
        })

        await context.prisma.community.update({
          where: { url: 'general' },
          data: { members: { connect: { email } } },
        })

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
