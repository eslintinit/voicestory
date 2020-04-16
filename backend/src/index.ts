const dotenv = require('dotenv')
dotenv.config({ path: `../.env.${process.env.NODE_ENV}` })

import { GraphQLServer, PubSub } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'
import { applyMiddleware } from 'graphql-middleware'
// import { permissions } from './permissions'
import { Context, Token } from './types'
import SocialConfig from './config/passport'
import { verify } from 'jsonwebtoken'

import * as compression from 'compression' // compresses requests
import * as bodyParser from 'body-parser'

import { baseSchema, corsOption } from './config/index'
const prisma = new PrismaClient()

import * as cors from 'cors'

const pubsub = new PubSub()

// const schema = applyMiddleware(baseSchema, permissions)
const schema = baseSchema
// const schema = baseSchema

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
  await prisma.disconnect()
})
