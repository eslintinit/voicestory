import { objectType, stringArg, idArg } from 'nexus'
import { getUserId } from '../../utils'

// USE communities as private and communitiesPublic as public

// Reason we dont allow membership filters with the public
// query{
//   communitiesPublic{
//     id, name, url, description, image, author { username}
//   }
// }

// Crud allows the same

// query{
//   communities(where :{id: {equals : "ck8m3kn800000bh2qc4wrr0d6"}} ){
//     id, name
//   }
// }

// export const community = queryField('community', {
//   type: 'Community',
//   nullable: true,
//   args: {
//     id: idArg({ nullable: true }),
//     url: stringArg({ nullable: true }),
//   },
//   resolve: (parent, { id, url }, ctx) => {
//     if (id) {
//       return ctx.prisma.community.findOne({
//         where: { id },
//       })
//     } else if (url) {
//       return ctx.prisma.community.findOne({
//         where: { url },
//       })
//     }
//   },
// })
// Crud allows the same

// query {
//   communities{
//     id, name
//   }
// }

// export const communities = queryField('communities', {
//   type: 'Community',
//   list: true,
//   args: {},
//   resolve: async (parent, {}, ctx) => {
//     const r = await ctx.prisma.community.findMany({
//       where: {
//         url: { not: 'direct' },
//       },
//     })
//     return r
//   },
// })

// Crud allows the same

// query{
//   communities(where: {members : {
//     some: {
//     id:{ equals: "ck8lqatne00063r2qej8ldpzd"}
//       }
//   }}){
//     id
//     name
//   }
// }

// export const followedCommunities = queryField('followedCommunities', {
//   type: 'Community',
//   list: true,
//   resolve: async (parent, args, ctx) => {
//     const userId = getUserId(ctx)
//     return ctx.prisma.community.findMany({
//       where: {
//         members: { some: { id: userId } },
//       },
//     })
//   },
// })

// // Crud allows the same

// query{
//   communities(where: {
//     description: {contains: "te"}
//   }){
//     id
//     name
//   }
// }
// export const searchCommunities = queryField('searchCommunities', {
//   type: 'Community',
//   list: true,
//   args: { searchString: stringArg({ nullable: true }) },
//   resolve: (parent, { searchString }, ctx) => {
//     return ctx.prisma.community.findMany({
//       where: {
//         AND: [
//           { url: { not: 'direct' } },
//           {
//             OR: [
//               { name: { contains: searchString } },
//               { description: { contains: searchString } },
//             ],
//           },
//         ],
//       },
//     })
//   },
// })

// export const searchCommunities = objectType({
//   name: 'Query',
//   definition(t) {
//     t.string('anotherComputedField', {
//       async resolve(_parent, _args, ctx) {
//         const userId = getUserId(ctx)

//         const databaseInfo = await ctx.prisma.community.findMany({
//           where: {
//             members: { some: { id: userId } },
//           },
//         })
//         return databaseInfo
//       },
//     })
//   },
// })
