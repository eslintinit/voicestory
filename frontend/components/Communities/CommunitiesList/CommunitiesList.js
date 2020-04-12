import { useQuery } from '@apollo/react-hooks'
// import { SEARCH_COMMUNITIES } from 'apis/Community'

import Community from './Community'

import * as S from './CommunitiesList.styled'
import { GET_COMMUNITIES } from '../../../apis/Community'

const CommunitiesList = ({ communities, searchString }) => {
  return (
    <S.CommunitiesList>
      {communities.map((community) => (
        <Community community={community} key={community.id} />
      ))}
    </S.CommunitiesList>
  )
}

export default CommunitiesList
