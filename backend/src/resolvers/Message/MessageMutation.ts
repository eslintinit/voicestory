import { mutationField, stringArg, arg } from 'nexus'
import { getUserId, getTenant } from '../../utils'
import { processUpload, deleteFromAws } from '../../utils/fileApi'
import {
  removeFile,
  getOpenGraphData,
  createRemoteAttachments,
} from '../../utils/helpers'

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
