import { objectType } from 'nexus'

export const Role = objectType({
  name: 'Role',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.title()
    t.model.permissions()
    t.model.color()
    t.model.users()
  },
})
