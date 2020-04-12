import { useQuery } from '@apollo/react-hooks'
// import { SEARCH_COMMUNITIES } from 'apis/Community'

import Community from './Community'

import * as S from './CommunitiesList.styled'
import { GET_COMMUNITIES } from '../../../apis/Community'

const CommunitiesList = ({ communities, refetch, searchString }) => {
  // const { data: { communities = [] } = {}, refetch } = useQuery(
  //   GET_COMMUNITIES,
  //   {
  //     variables: { searchString },
  //     pollInterval: 25000, // auto refetch after 20 sec
  //   }
  // )

  return (
    <S.CommunitiesList>
      {communities.map((community) => (
        <Community refetch={refetch} community={community} key={community.id} />
      ))}
    </S.CommunitiesList>
  )
}

export default CommunitiesList
