import { useRouter } from 'next/router'
import { useKeyboardShortcut } from 'hooks'
import { useMutation } from '@apollo/react-hooks'
import Popup from 'reactjs-popup'
import { useState, useEffect } from 'react'
import { UNFOLLOW_COMMUNITY, CommunityFragment } from 'apis/Community'
import { COMPANY_NAME } from 'utils/config'
// import { COMPANY_NAME } from 'styles/themes'
import useDarkMode from 'use-dark-mode'
import { themeWhite, themeDark } from 'styles/themes'

import closeSVG from 'public/icons/close.svg'
import * as S from './Tab.styled'

const Card = ({ isDarkMode, name }) => (
  <div className="card">
    <div className="header" style={{ 
      borderRadius: "2px", 
      backgroundColor: isDarkMode ? themeDark.navbarContainerBG : themeWhite.navbarContainerBG, 
      color: "#7d7d7d",
      padding: "5px",
    }}>{name}</div>
    {/* <S.CommunityPopupCard>{name}</S.CommunityPopupCard> */}
  </div>
)
const Tab = ({
  community,
  active,
  nextActive,
  index,
  numberOfCommunities,
  fistCommunity,
}) => {
  const router = useRouter()
  const { value: isDarkMode } = useDarkMode(false)
  const { community: selectedCommunity } = router.query
  const [communityLoaded, setCommunityLoaded] = useState(false)

  const onChangeTab = () => {
    if (community.url !== selectedCommunity) {
      return router.push(
        '/[company]/[community]/[channel]',
        `/${COMPANY_NAME()}/${community.url}/general`,
        { shallow: true },
      )
    }
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
      router.push(
        '/[company]/[community]/[channel]',
        `/${COMPANY_NAME()}/${fistCommunity.url}/general`,
        { shallow: true },
      )

      return cache.writeFragment({ fragment, updatedCommunity })
    },
  })

  useEffect(() => {
    if (selectedCommunity && community && community.url === selectedCommunity)
      setCommunityLoaded(true)
  }, [])

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
                  if (communityLoaded)
                    unfollowCommunity({ variables: { url: community.url } })
                  setCommunityLoaded(true)
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
      arrow={false}
      mouseEnterDelay={1500}
      contentStyle={{ padding: "0px", textAlign: "center", marginTop: "5px", background: "transparent", border: "0px" }}
    >
      <Card isDarkMode={isDarkMode} name={community.name} />
    </Popup>
  )
}

export default Tab
