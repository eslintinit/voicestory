import { mutationType } from 'nexus'

export const channelMutations = mutationType({
  definition(t) {
    t.crud.createOneChannel({ alias: 'createChannel' })
    t.crud.updateOneChannel({ alias: 'updateChannel' })
    t.crud.deleteOneChannel({ alias: 'deleteChannel' })
  },
})
