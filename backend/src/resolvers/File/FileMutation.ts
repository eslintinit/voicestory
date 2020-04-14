import { GraphQLUpload } from 'graphql-upload'
import { mutationField, arg, stringArg } from 'nexus'
import { processUpload, deleteFromAws } from '../../utils/fileApi'
import { getUserId } from '../../utils'

export const uploadFile = mutationField('uploadFile', {
  type: 'File',
  args: { file: arg({ type: 'Upload', nullable: true }) },
  resolve: async (parent, { file }, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error('nonexistent user')
    }

    const { Key, filename, mimetype, encoding, filesize } = await processUpload(
      file,
    )

    const result = await ctx.prisma.file.create({
      data: {
        Key,
        filename,
        mimetype,
        encoding,
        filesize: String(filesize),
        uploader: { connect: { id: userId } },
      },
    })

    return result
  },
})
