import { useRouter } from 'next/router'
import { useQuery, writeQuery } from '@apollo/react-hooks'
import { useContext, useState, useEffect } from 'react'

import { GET_COMMUNITIES } from 'apis/Community'

import Tab from './Tab'
import * as S from './Tabs.styled'

const Tabs = () => {
  const {
    query: { community: selectedCommunity },
  } = useRouter()

  // Gets followed Communities
  const getFollowed = (communities) =>
    communities.filter((a) => a.isFollowed === true)

  const [communities, setCommunities] = useState([1])
  const { loading, data, error } = useQuery(GET_COMMUNITIES)
  const [followedCommunities, setFollowedCommunities] = useState(
    getFollowed(communities)
  )

  useEffect(() => {
    // set initial communities * followedCommunities
    if (data && communities.length !== data.communities.length) {
      setFollowedCommunities(getFollowed(data.communities))
      setCommunities(data.communities)
    }
    // updated followedCommunities on change
    if (
      data &&
      followedCommunities.length !== getFollowed(data.communities).length
    ) {
      setFollowedCommunities(getFollowed(data.communities))
    }
  })
  console.log(communities)

  return data && data.communities.length !== 0 ? (
    <S.Tabs>
      {/* see if there are followed communities  if not return all */}
      {(!followedCommunities.length ? communities : followedCommunities).map(
        (community, index) => {
          const active = community.url === selectedCommunity
          // Done for styles
          const nextActive =
            index < data.communities.length - 1
              ? data.communities[index + 1].url === selectedCommunity
              : false
          return (
            <Tab
              community={community}
              active={active}
              index={index}
              key={community.id}
              nextActive={nextActive}
              numberOfCommunities={followedCommunities.length}
            />
          )
        }
      )}
    </S.Tabs>
  ) : (
    ''
  )
}

export default Tabs
