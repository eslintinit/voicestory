import { objectType } from 'nexus'

export const Channel = objectType({
  name: 'Channel',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.url()
    t.model.description()
    t.model.createdAt()
    t.model.community()
    t.model.author()
  },
})
