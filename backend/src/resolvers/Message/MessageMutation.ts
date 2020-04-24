import { mutationField, stringArg, arg } from 'nexus'
import { getUserId } from '../../utils'

export const sendMessage = mutationField('sendMessage', {
  type: 'Message',
  args: {
    body: stringArg(),
    communityUrl: stringArg(),
    channelUrl: stringArg(),
  },
  resolve: async (parent, { body, communityUrl, channelUrl }, ctx) => {
    try {
      const userId = await getUserId(ctx)

      const message = await ctx.prisma.message.create({
        data: {
          body,
          channel: {
            connect: {
              communityUrl_url: {
                url: channelUrl,
                communityUrl,
              },
            },
          },
          author: { connect: { id: userId } },
        },
        include: { channel: true },
      })
      await ctx.pubsub.publish('NEW_MESSAGE', {
        newMessage: message,
      })

      return message
    } catch (error) {
      console.log(error)
    }
  },
})

export const deleteMessage = mutationField('deleteMessage', {
  type: 'Message',
  args: {
    id: stringArg(),
  },
  resolve: async (parent, { id }, ctx) => {
    try {
      const message = await ctx.prisma.message.delete({
        where: {
          id,
        },
      })

      return message
    } catch (error) {
      console.log(error)
    }
  },
})

export const editMessage = mutationField('editMessage', {
  type: 'Message',
  args: {
    body: stringArg(),
    messageId: stringArg(),
  },
  resolve: async (parent, { body, messageId }, ctx) => {
    const userId = getUserId(ctx)

    if (!userId) {
      throw new Error('nonexistent user')
    }

    // const requestingUserIsAuthor = await ctx.photon.messages.findMany({
    //   where: {
    //     id: messageId
    //   }
    // })

    // if (!requestingUserIsAuthor[0]) {
    //   throw new Error('Invalid permissions, you must be an author of this post to edit it.')
    // }

    const message = await ctx.prisma.message.update({
      where: {
        id: messageId,
      },
      data: {
        body,
      },
      include: {
        channel: true,
      },
    })

    // ctx.pubsub.publish('EDITED_MESSAGE', {
    //   editMessage: message,
    //   tenant: getTenant(ctx)
    // })

    return message
  },
})
