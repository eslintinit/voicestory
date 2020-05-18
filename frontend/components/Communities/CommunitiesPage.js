import { useRouter } from 'next/router'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from 'context/UserContext'
import { useEscapeToClose, useKeyboardShortcut } from 'hooks'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'

import { COMPANY_NAME } from 'utils/config'
import { canManageCommunity } from 'utils/permission'

import { PlusIcon } from 'components/UI/Icons'
import { GET_COMMUNITIES_CLIENT, SEARCH_COMMUNITIES } from '../../apis/Community'
import Search from './Search'
import CommunitiesList from './CommunitiesList'
import * as S from './CommunitiesPage.styled'

const CommunitiesPage = () => {
  const [filteredCommunities, setFilteredCommunities] = useState([])
  const [searchString, setSearchString] = useState('')
  const [isSearch, setSearch] = useState(false)
  const { user } = useContext(UserContext)
  const router = useRouter()

  // const [
  //   searchCommunities,
  //   { data: { communities = [] } = {}, loading: communitiesLoading },
  // ] = useLazyQuery(SEARCH_COMMUNITIES)

  const canCreateCommunity = user && canManageCommunity(user)
  // const canCreateCommunity = true
  const toCreateCommunity = () =>
    router.push(
      `/[company]/communities/new`,
      `/${COMPANY_NAME()}/communities/new`,
      {
        shallow: true,
      },
    )

  // Search state is here because of this logic:
  useEscapeToClose(() => {
    if (isSearch) {
      setSearch(false)
      setSearchString('')
    } else {
      router.back()
    }
  })

  useKeyboardShortcut({
    t: () =>
      router.push(
        `/[company]/communities/new`,
        `/${COMPANY_NAME()}/communities/new`,
        {
          shallow: true,
        },
      ),
  })

  // useEffect(() => {
  //   searchCommunities({ variables: { searchString } })
  // }, [])

  const { data: { searchCommunities = [] } = {}, refetch } = useQuery(
    SEARCH_COMMUNITIES,
    {
      variables: { searchString: '' },
      pollInterval: 25000, // auto refetch after 20 sec
    },
  )

  useEffect(() => {
    // console.log(searchCommunities)
    // setFilteredCommunities(communities)

    if (searchString === '') {
      setFilteredCommunities(searchCommunities)
      return
    }

    setFilteredCommunities(
      searchCommunities.filter(
        (community) =>
          community.name.toLowerCase().includes(searchString.toLowerCase()) ||
          community.description.toLowerCase().includes(searchString.toLowerCase()),
      ),
    )
  }, [searchCommunities.length, searchString])

  // let communitiesParsed = filteredCommunities.forEach((el) => {
  //   if (el.isFollowed) {
  //     filteredCommunities.splice(filteredCommunities.indexOf(el), 1)
  //     filteredCommunities.unshift(el)
  //   }
  // })

  // if (communitiesLoading) {
  //   return <div />
  // }

  return (
    <S.Container>
      <S.CommunitiesWrapper>
        <S.Header>
          <S.Heading>Communities</S.Heading>
          <S.Actions>
            <Search
              isSearch={isSearch}
              setSearch={setSearch}
              searchString={searchString}
              setSearchString={setSearchString}
            />

            {canCreateCommunity && (
              <S.PlusIconWrapper onClick={toCreateCommunity}>
                <PlusIcon />
              </S.PlusIconWrapper>
            )}
          </S.Actions>
        </S.Header>
        <CommunitiesList
          communities={filteredCommunities}
          setFilteredCommunities={setFilteredCommunities}
          searchString={searchString}
        />
      </S.CommunitiesWrapper>
    </S.Container>
  )
}

export default CommunitiesPage
