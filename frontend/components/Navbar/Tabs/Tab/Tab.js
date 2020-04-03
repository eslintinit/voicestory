import { useRouter } from 'next/router'
import { useKeyboardShortcut } from 'hooks'

import { COMPANY_NAME } from 'utils/config'

import voicestoryIcon from 'public/favicon.svg'
import closeSVG from 'public/icons/close.svg'
import * as S from './Tab.styled'

const Tab = ({ community, active, nextActive, index }) => {
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

  return (
    <S.Tab active={active} onClick={onChangeTab} key={community.id}>
      <S.TabContent active={active} nextActive={nextActive}>
        <S.Community>
          <S.CommunityLogo src={community.image || voicestoryIcon} alt="Logo" />
          <S.CommunityName active={active}>{community.name}</S.CommunityName>
        </S.Community>
        <S.UnsubscribeIconWrapper>
          <S.UnsubscribeIcon
            onClick={() => {
              // Do: Unfollow. Update cache
              // unfollowCommunity({ variables: { url: community.url } });
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
