import { useRouter } from 'next/router'
import { useKeyboardShortcut } from 'hooks'
import { useMutation } from '@apollo/react-hooks'

import { COMPANY_NAME } from 'utils/config'

import closeSVG from 'public/icons/close.svg'
import * as S from './Tab.styled'

import { UNFOLLOW_COMMUNITY, CommunityFragment } from 'apis/Community'

import Popup from 'reactjs-popup'
const Card = ({ name }) => (
  <div className="card">
    <div className="header">
      {name}
    </div>
  </div>
)
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
    <Popup
      trigger={
        <S.Tab
          active={active}
          numberOfCommunities={numberOfCommunities}
          onClick={onChangeTab}
          key={community.id}
        >
          <S.TabContent active={active} nextActive={nextActive}>
            <S.Community>
              <S.CommunityLogo src={community.image} />
              <S.CommunityName active={active}>
                {community.name}
              </S.CommunityName>
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
      }
      position="bottom center"
      on="hover"
      mouseLeaveDelay={300}
      arrow={false}

      mouseEnterDelay={2500}
    >
      <Card name={community.name} />
    </Popup>
  )
}

export default Tab
