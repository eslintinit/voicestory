import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import { UserContext } from 'context/UserContext'
import { useEscapeToClose, useKeyboardShortcut } from 'hooks'
import { GET_COMMUNITIES } from '../../apis/Community'
import { useQuery } from '@apollo/react-hooks'

import { COMPANY_NAME } from 'utils/config'
import { canManageCommunity } from 'utils/permission'

import { PlusIcon } from 'components/UI/Icons'
import Search from './Search'
import CommunitiesList from './CommunitiesList'
import * as S from './CommunitiesPage.styled'

const CommunitiesPage = () => {
  const [searchString, setSearchString] = useState('')
  const [isSearch, setSearch] = useState(false)
  const { user } = useContext(UserContext)
  const router = useRouter()

  // const canCreateCommunity = user && canManageCommunity(user)
  const canCreateCommunity = true
  const toCreateCommunity = () =>
    router.push(
      `/[company]/communities/new`,
      `/${COMPANY_NAME()}/communities/new`,
      {
        shallow: true,
      }
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
        }
      ),
  })
  const { data: { communities = [] } = {}, refetch } = useQuery(
    GET_COMMUNITIES,
    {
      variables: { searchString },
      pollInterval: 25000, // auto refetch after 20 sec
    }
  )
  communities.sort((a, b) => a.isFollowed < b.isFollowed)
  return (
    <S.Container>
      <S.CommunitiesWrapper>
        <S.Header>
          <S.Heading>Communities</S.Heading>
          <S.Actions>
            {/*
            <Search
              isSearch={isSearch}
              setSearch={setSearch}
              searchString={searchString}
              setSearchString={setSearchString}
            />
            */}
            {canCreateCommunity && (
              <S.PlusIconWrapper onClick={toCreateCommunity}>
                <PlusIcon />
              </S.PlusIconWrapper>
            )}
          </S.Actions>
        </S.Header>
        <CommunitiesList
          communities={communities}
          searchString={searchString}
        />
      </S.CommunitiesWrapper>
    </S.Container>
  )
}

export default CommunitiesPage
