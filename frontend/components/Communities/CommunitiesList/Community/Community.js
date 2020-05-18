import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { UserContext } from 'context/UserContext'
import { useMutation, useQuery } from '@apollo/react-hooks'
import {
  GET_COMMUNITIES_CLIENT,
  GET_COMMUNITIES,
  SEARCH_COMMUNITIES
} from '../../../../apis/Community'

import { COMPANY_NAME } from 'utils/config'
import {
  FOLLOW_COMMUNITY,
  UNFOLLOW_COMMUNITY,
  CommunityFragment,
} from 'apis/Community'

import Checkbox from 'components/UI/Checkbox/CommunityCheckbox'
import * as S from './Community.styled'

export default ({ community, setFilteredCommunities, searchString }) => {
  const router = useRouter()
  const { user } = useContext(UserContext)

  const [followCommunity] = useMutation(FOLLOW_COMMUNITY, {
    update: (cache, { data: { followCommunity: community } }) => {
      const { searchCommunities } = cache.readQuery({
        query: SEARCH_COMMUNITIES,
        variables: { searchString },
      })
      searchCommunities[searchCommunities.findIndex(c => c.id === community.id)] = community;
      cache.writeQuery({
        query: SEARCH_COMMUNITIES,
        variables: { searchString },
        data: { searchCommunities },
      })
      setFilteredCommunities(searchCommunities)

      // MANUALLY UPDATE THE STATE, TRY AND RESOLVE
      // https://www.apollographql.com/docs/link/links/state/#updating-the-cache
      // let updatedCommunities = communities.map((el) => {
      //   if (el.id === community.id) return community
      //   return el
      // })
      // cache.writeQuery({
      //   query: GET_COMMUNITIES,
      //   data: { updatedCommunities },
      // })
    },
  })
  const [unfollowCommunity] = useMutation(UNFOLLOW_COMMUNITY, {
    update: (cache, { data: { unfollowCommunity: community } }) => {
      const { searchCommunities } = cache.readQuery({
        query: SEARCH_COMMUNITIES,
        variables: { searchString },
      })
      searchCommunities[searchCommunities.findIndex(c => c.id === community.id)] = community;
      cache.writeQuery({
        query: SEARCH_COMMUNITIES,
        variables: { searchString },
        data: { searchCommunities },
      })
      setFilteredCommunities(searchCommunities)
      // const fragment = CommunityFragment
      // const cachedCommunity = cache.readFragment({
      //   fragment,
      //   __typename: 'Community',
      // })
      // const updatedCommunity = { ...cachedCommunity }

      // return cache.writeFragment({ fragment, updatedCommunity })
    },
  })

  const onFollow = async (url, isFollowed) => {
    if (isFollowed === true) {
      unfollowCommunity({ variables: { url } })
    } else {
      followCommunity({ variables: { url } })
    }
    return
  }

  const onCommunityClick = (e) => {
    const checkboxClick = e.target.closest('.checkbox')

    if (!checkboxClick) {
      router.push(
        `/[company]/[community]/[channel]`,
        `/${COMPANY_NAME()}/${community.url}/general`,
        { shallow: true }
      )
    }
  }
  const { data: { communities = [] } = {} } = useQuery(GET_COMMUNITIES, {
    variables: { searchString: '' },
  })
  return (
    <S.Community onClick={onCommunityClick}>
      <S.Logo src={community.image} />
      <S.Info>
        <S.Name>{community.name}</S.Name>
        <S.Description>{community.description}</S.Description>
      </S.Info>
      {user && (
        <Checkbox
          id={community.id}
          checked={community.isFollowed}
          onClick={async () => {
            await onFollow(community.url, community.isFollowed)
          }}
        />
      )}
    </S.Community>
  )
}
