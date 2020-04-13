import { useRouter } from 'next/router'
import { useKeyboardShortcut } from 'hooks'
import { useMutation } from '@apollo/react-hooks'

import { COMPANY_NAME } from 'utils/config'

import closeSVG from 'public/icons/close.svg'
import * as S from './Tab.styled'

import { UNFOLLOW_COMMUNITY, CommunityFragment } from 'apis/Community'

const Tab = ({ community, active, nextActive, index, numberOfCommunities }) => {
  const router = useRouter()
  const { community: selectedCommunity } = router.query

  const onChangeTab = () => {
    if (community.url !== selectedCommunity)
      router.push(
        '/[company]/[community]/[channel]',
        `/${COMPANY_NAME()}/${community.url}/general`,
        { shallow: true }
      )
  }
  useKeyboardShortcut({
    [index + 1]: onChangeTab,
  })

  const [unfollowCommunity] = useMutation(UNFOLLOW_COMMUNITY, {
    update(cache, { data: { unfollowCommunity: community } }) {
      const fragment = CommunityFragment
      const cachedCommunity = cache.readFragment({
        fragment,
        __typename: 'Community',
      })
      const updatedCommunity = { ...cachedCommunity }

      return cache.writeFragment({ fragment, updatedCommunity })
    },
  })
  return (
    <S.Tab
      active={active}
      onClick={onChangeTab}
      key={community.id}
      numberOfCommunities={numberOfCommunities}
    >
      <S.TabContent active={active} nextActive={nextActive}>
        <S.Community>
          <S.CommunityLogo src={community.image} />
          <S.CommunityName active={active}>{community.name}</S.CommunityName>
        </S.Community>
        <S.UnsubscribeIconWrapper>
          <S.UnsubscribeIcon
            onClick={() => {
              // Do: Unfollow. Update cache
              unfollowCommunity({ variables: { url: community.url } })
            }}
          >
            <use xlinkHref={`${closeSVG}#icon-close`} />
          </S.UnsubscribeIcon>
        </S.UnsubscribeIconWrapper>
      </S.TabContent>
    </S.Tab>
  )
}

export default Tab
