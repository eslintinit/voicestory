import { objectType } from 'nexus'
import { getUserId, isEmpty } from '../../utils'
import { and } from 'graphql-shield'

export const Community = objectType({
  name: 'Community',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.url()
    t.model.image()
    t.model.description()
    t.model.author()
    t.model.members({ pagination: false })
    t.model.channels({ pagination: false })
    t.boolean('isFollowed', {
      async resolve(_parent, _args, ctx) {
        const userId = await getUserId(ctx)
        const userFollowed = await ctx.prisma.community.findMany({
          where: {
            AND: [
              { members: { some: { id: userId } } },
              {
                id: _parent.id,
              },
            ],
          },
        })
        if (!isEmpty(userFollowed)) return true
        return false
      },
    })
  },
})
