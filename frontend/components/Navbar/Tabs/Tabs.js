import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { useContext, useState, useEffect } from 'react'

import { AppContext } from 'context'
import { GET_FOLLOWED_COMMUNITIES } from 'apis/Community'

import Tab from './Tab/Tab'
import * as S from './Tabs.styled'

const Tabs = () => {
  const {
    query: { community: selectedCommunity },
  } = useRouter()

  const { communitiesLoaded, setCommunitiesLoaded } = useContext(AppContext)
  const [followedCommunities, setFollowedCommunities] = useState([])

  // const { data: { communities = [] } = {} } = useQuery(
  //   GET_FOLLOWED_COMMUNITIES,
  //   {
  //     onCompleted: () => {
  //       if (!communitiesLoaded) {
  //         setCommunitiesLoaded(true)
  //       }
  //     },
  //   }
  // )

  // const { followedCommunities, setFollowedCommunities } = useState([])

  useQuery(GET_FOLLOWED_COMMUNITIES, {
    onCompleted: (data) => {
      setFollowedCommunities([...data.followedCommunities])
    },
  })

  return followedCommunities.length !== 0 ? (
    <S.Tabs>
      {followedCommunities.map((community, index) => {
        const active = community.url === selectedCommunity

        // Done for styles
        const nextActive =
          index < followedCommunities.length - 1
            ? followedCommunities[index + 1].url === selectedCommunity
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
  ) : (
    ''
  )
}

export default Tabs
