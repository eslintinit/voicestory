import { makeSchema } from 'nexus'
import * as allTypes from '../resolvers'
import { nexusPrismaPlugin } from 'nexus-prisma'
import { join } from 'path'
const nexusPrisma = nexusPrismaPlugin()

export default () =>
  makeSchema({
    types: [allTypes],
    plugins: [nexusPrisma],
    outputs: {
      typegen: join(__dirname, '../generated/nexus-typegen.ts'),
      schema: join(__dirname, '../schema.graphql'),
    },
    typegenAutoConfig: {
      sources: [
        {
          source: '@prisma/client',
          alias: 'prisma',
        },
        {
          source: join(__dirname, '../types.ts'),
          alias: 'ctx',
        },
      ],
      contextType: 'ctx.Context',
    },
  })
