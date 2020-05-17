import { useRouter } from 'next/router'
import { useQuery, writeQuery } from '@apollo/react-hooks'
import { useContext, useState, useEffect } from 'react'
import { useKeyboardShortcut } from 'hooks'
import HorizontalScroll from 'react-scroll-horizontal'

import { COMPANY_NAME } from 'utils/config'
import { GET_COMMUNITIES } from 'apis/Community'

import Tab from './Tab'
import * as S from './Tabs.styled'

const Tabs = () => {
  const {
    query: { community: selectedCommunityUrl },
    push,
  } = useRouter()

  // Gets followed Communities
  const getFollowed = (communities) =>
    communities.filter((a) => a.isFollowed === true)

  const [allCommunities, setCommunities] = useState([1])
  const { loading, data, error } = useQuery(GET_COMMUNITIES)
  const [followedCommunities, setFollowedCommunities] = useState(
    getFollowed(allCommunities),
  )

  useEffect(() => {
    // set initial communities * followedCommunities
    if (data && allCommunities.length !== data.communities.length) {
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

  const communities = !followedCommunities.length
    ? allCommunities
    : followedCommunities

  const selectedCommunityIndex = communities.findIndex(
    (community) => community.url === selectedCommunityUrl,
  )

  const toNextCommunity = () => {
    const isLastCommunity = selectedCommunityIndex === communities.length - 1
    let nextUrl

    if (isLastCommunity) {
      // To first community
      nextUrl = communities[0].url
    } else {
      // to next
      nextUrl = communities[selectedCommunityIndex + 1].url
    }

    push(
      `/[company]/[community]/[channel]`,
      `/${COMPANY_NAME()}/${nextUrl}/general`,
      { shallow: true },
    )
  }

  const toPreviousCommunity = () => {
    const isFirstCommunity = selectedCommunityIndex === 0
    let nextUrl

    if (isFirstCommunity) {
      // To last community
      nextUrl = communities[communities.length - 1].url
    } else {
      // to previous
      nextUrl = communities[selectedCommunityIndex - 1].url
    }

    push(
      `/[company]/[community]/[channel]`,
      `/${COMPANY_NAME()}/${nextUrl}/general`,
      { shallow: true },
    )
  }

  // ← →
  useKeyboardShortcut(
    {
      ArrowRight: toNextCommunity,
      ArrowLeft: toPreviousCommunity,
    },
    {
      modKey: null,
      eventType: 'keydown',
    },
  )
  // console.log(communities.length);
  if(data && data.communities.length !== 0) {
    return communities.length > 5 ? (
      <S.Tabs style={{ width: "824px" }}>
        <HorizontalScroll reverseScroll={true}>
          {/* see if there are followed communities  if not return all */}
          {communities.map((community, index) => {
            const active = community.url === selectedCommunityUrl
            // Done for styles
            const nextActive =
              index < data.communities.length - 1
                ? data.communities[index + 1].url === selectedCommunityUrl
                : false
            return (
              <Tab
                community={community}
                active={active}
                index={index}
                key={community.id}
                nextActive={nextActive}
                fistCommunity={
                  followedCommunities.length !== 0 ? followedCommunities[0].url : ''
                }
                numberOfCommunities={followedCommunities.length}
              />
            )
          })}
        </HorizontalScroll>
      </S.Tabs>
    ) : (
      <S.Tabs>
        {/* see if there are followed communities  if not return all */}
        {communities.map((community, index) => {
          const active = community.url === selectedCommunityUrl
          // Done for styles
          const nextActive =
            index < data.communities.length - 1
              ? data.communities[index + 1].url === selectedCommunityUrl
              : false
          return (
            <Tab
              community={community}
              active={active}
              index={index}
              key={community.id}
              nextActive={nextActive}
              fistCommunity={
                followedCommunities.length !== 0 ? followedCommunities[0].url : ''
              }
              numberOfCommunities={followedCommunities.length}
            />
          )
        })}
      </S.Tabs>
    )
  }
  else {
    return (
      ''
    )
  }

}

export default Tabs
