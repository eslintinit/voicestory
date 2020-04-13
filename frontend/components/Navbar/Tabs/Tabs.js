import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { useContext } from 'react'

import { AppContext } from 'context'
import { GET_COMMUNITIES } from 'apis/Community'

import Tab from './Tab'
import * as S from './Tabs.styled'

const Tabs = () => {
  const {
    query: { community: selectedCommunity },
  } = useRouter()

  const { communitiesLoaded, setCommunitiesLoaded } = useContext(AppContext)

  const { data: { communities = [] } = {} } = useQuery(GET_COMMUNITIES, {
    onCompleted: () => {
      if (!communitiesLoaded) {
        setCommunitiesLoaded(true)
      }
    },
  })
  console.log(communities)

  return (
    <S.Tabs>
      {communities.map((community, index) => {
        const active = community.url === selectedCommunity

        // Done for styles
        const nextActive =
          index < communities.length - 1
            ? communities[index + 1].url === selectedCommunity
            : false

        return (
          <Tab
            community={community}
            active={active}
            index={index}
            key={community.id}
            nextActive={nextActive}
          />
        )
      })}
    </S.Tabs>
  )
}

export default Tabs
