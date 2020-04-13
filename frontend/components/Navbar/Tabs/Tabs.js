import { useRouter } from 'next/router'
import { useQuery, writeQuery } from '@apollo/react-hooks'
import { useContext, useState, useEffect } from 'react'

import { GET_COMMUNITIES } from 'apis/Community'

import Tab from './Tab/Tab'
import * as S from './Tabs.styled'

const Tabs = () => {
  const {
    query: { community: selectedCommunity },
  } = useRouter()

  let [communities, setCommunities] = useState([2])
  const { loading, data, error } = useQuery(GET_COMMUNITIES)
  return data && data.communities.length > 0 ? (
    <S.Tabs>
      {(data.communities.filter((a) => a.isFollowed === true).length === 0
        ? data.communities
        : data.communities.filter((a) => a.isFollowed === true)
      ).map((community, index) => {
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
            numberOfCommunities={communities.length}
          />
        )
      })}
    </S.Tabs>
  ) : (
    ''
  )
}

export default Tabs
