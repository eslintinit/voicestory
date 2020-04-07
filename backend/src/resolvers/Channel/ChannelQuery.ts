import { queryType } from 'nexus'

export const channel = queryType({
  definition(t) {
    t.crud.channel()
    t.crud.channels({
      filtering: true,
      ordering: true,
    })
  },
})
