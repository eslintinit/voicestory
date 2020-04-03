import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const username = 'denis'
  await prisma.user.create({
    data: {
      username: 'denis',
      bio: '',
      fullname: 'petrov',
      image: '',
      email: 'denis@gmail.com',
      password: '',
      owner: '1',
      social: 'twitter',
      role: {
        create: [
          {
            title: 'Admin',
            roleSettings:
              'manage_community,manage_channel,manage_role,chat_permission,upload_image,post_links,delete_message',
            color: '#9B59B6',
          },
          {
            title: 'Manager',
            roleSettings:
              'manage_community,manage_channel,chat_permission,upload_image,post_links,delete_message',
            color: '#3398DB',
          },
          {
            title: 'Member',
            roleSettings:
              'manage_community,manage_channel,chat_permission,upload_image,post_links',
            color: '#2FCC71',
          },
        ],
      },
    },
  })

  await prisma.community.create({
    data: {
      name: 'General',
      url: 'general',
      image:
        'http://ec2-3-20-204-242.us-east-2.compute.amazonaws.com:3000/favicon.svg',
      description: 'default',
      channels: {
        create: [
          {
            name: 'general',
            description: 'Talk on a general topic',
            url: `general/general`,
            author: { connect: { username } },
          },
        ],
      },
      author: { connect: { username } },
      members: { connect: { username } },
    },
  })

  await prisma.community.create({
    data: {
      name: 'Private',
      url: 'direct',
      image: 'https://voicestory.com/image/article/1566410146060channel6.png',
      description: 'default',
      channels: {
        create: [
          {
            name: 'general',
            description: 'Talk on a general topic',
            url: `direct/general`,
            author: { connect: { username } },
          },
        ],
      },
      author: { connect: { username } },
      members: { connect: { username } },
    },
  })
}
