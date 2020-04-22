import { Query } from './Query'
import { Mutation } from './Mutation'
import { Subscription } from './Subscription'

import { User } from './User/UserType'
import { Role } from './Role/RoleType'
import { AuthPayload } from './User/AuthPayloadType'
import { OnlinePayload } from './User/OnlinePayload'
import { TwitterPayload } from './User/TwitterPayloadType'

import { Community } from './Community/CommunityType'
import { Channel } from './Channel/ChannelType'
import { Message } from './Message/MessageType'

import { File } from './File/FileType'
import { GraphQLUpload as Upload } from 'graphql-upload'

export const resolvers = {
  Query,
  Mutation,
  Subscription,

  User,
  Role,
  AuthPayload,
  OnlinePayload,
  TwitterPayload,

  Community,
  Channel,
  Message,

  File,
  Upload,
}
