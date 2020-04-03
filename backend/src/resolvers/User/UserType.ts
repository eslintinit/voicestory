import { objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.fullname()
    t.model.username()
    t.model.bio()
    t.model.email()
    t.model.social()
    t.model.image()
    t.model.isOnline()
    t.model.communitiesOwned({ pagination: false })
    t.model.communitiesFollowed({ pagination: false })
  },
})
