const dotenv = require('dotenv')
dotenv.config({ path: `../.env.${process.env.NODE_ENV}` })
/* dotenv.config({ path: `./.env` }) */

import { GraphQLServer, PubSub } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'
import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema } from 'nexus'
import { applyMiddleware } from 'graphql-middleware'
import { join } from 'path'

import * as allTypes from './resolvers'
import { permissions } from './permissions'
import { Context, Token } from './types'

import SocialConfig from './passport'
import { verify } from 'jsonwebtoken'

import * as compression from 'compression' // compresses requests
import * as bodyParser from 'body-parser'

const prisma = new PrismaClient()

const cors = require('cors')

const pubsub = new PubSub()

const nexusPrisma = nexusPrismaPlugin()

const baseSchema = makeSchema({
  types: [allTypes],
  plugins: [nexusPrisma],
  outputs: {
    typegen: join(__dirname, '../generated/nexus-typegen.ts'),
    schema: join(__dirname, '/schema.graphql'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: join(__dirname, 'types.ts'),
        alias: 'ctx',
      },
    ],
    contextType: 'ctx.Context',
  },
})

/* const schema = applyMiddleware(baseSchema, permissions) */
const schema = baseSchema

const server = new GraphQLServer({
  schema,
  // typeDefs: `scalar Upload`,
  context: async (ctx) => {
    if (ctx.request) {
      try {
        return {
          ...ctx,
          prisma,
          pubsub,
        }
      } catch (err) {
        console.log(name, 'NO1')
        return {
          ...ctx,
          pubsub,
        }
      }
    } else {
      try {
        return {
          ...ctx,
          prisma,
          pubsub,
        }
      } catch (err) {
        console.log(name, 'NO')
        return {
          ...ctx,
          pubsub,
        }
      }
    }
  },
})

// enable cors
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token'],
}

server.express.use('/*', cors(corsOption))
server.express.use(compression())
server.express.use(bodyParser.json({ type: 'application/json' }))
server.express.use(bodyParser.urlencoded({ extended: true }))
server.express.use(bodyParser.text({ type: 'text/html' }))

SocialConfig.configure(server)

server.start(
  {
    endpoint: '/graphql',
    playground: '/graphql',
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
    subscriptions: {
      onConnect: async (
        { token }: { token: string },
        ws: Object,
        context: Context,
      ) => {
        if (token) {
          try {
            const verifiedToken = verify(
              token,
              process.env['APP_SECRET'],
            ) as Token
            const userId = verifiedToken && verifiedToken.userId
            const tenant = verifiedToken && verifiedToken.tenant
            if (userId && tenant) {
              if (prisma.user) {
                const user = await prisma.user.update({
                  where: { id: userId },
                  data: { isOnline: true },
                })
                pubsub.publish('USER_WENT_ONLINE', { user, tenant })
                return user
              }
            }
          } catch (error) {
            return
          }
        }
      },
      onDisconnect: async (ws: Object, context: Context) => {
        if (context.request.headers.cookie) {
          try {
            let token = context.request.headers.cookie
            token = token.slice(token.lastIndexOf('token=') + 6)
            const verifiedToken = verify(
              token,
              process.env['APP_SECRET'],
            ) as Token
            const userId = verifiedToken && verifiedToken.userId
            const tenant = verifiedToken && verifiedToken.tenant
            if (userId && tenant) {
              if (prisma.user) {
                const user = await prisma.user.update({
                  where: { id: userId },
                  data: { isOnline: false },
                })
                pubsub.publish('USER_WENT_OFFLINE', { user, tenant })
                return user
              }
            }
          } catch (error) {
            return
          }
        }
      },
    },
  },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:4000/graphql\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-auth#using-the-graphql-api`,
    ),
)

process.on('exit', async () => {
  /* await multiTenant.disconnect() */
})
