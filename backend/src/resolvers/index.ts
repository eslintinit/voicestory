import { GraphQLUpload as Upload } from 'graphql-upload'
import { Query } from './Query'
import { Mutation } from './Mutation'
import { Subscription } from './Subscription'
import { User } from './User/UserType'
import { AuthPayload } from './User/AuthPayloadType'
import { OnlinePayload } from './User/OnlinePayload'
import { TwitterPayload } from './User/TwitterPayloadType'
import { UnreadMessagePayload } from './Message/UnreadMessageType'
import { Community } from './Community/CommunityType'
import { Channel } from './Channel/ChannelType'
import { Message } from './Message/MessageType'
import { TypingStatus } from './TypingStatus/TypingStatusType'
import { File } from './File/FileType'
import { Role } from './Role/RoleType'

export const resolvers = {
  Query,
  Mutation,
  /* Subscription, */

  User,
  AuthPayload,
  OnlinePayload,
  TwitterPayload,

  Community,
  Channel,

  /* Role, */
  /* UnreadMessagePayload, */
  /* Message, */
  /* File, */
  /* Upload, */
  /* TypingStatus, */
}
