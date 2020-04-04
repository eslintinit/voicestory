import * as S from './WidgetIcon.styled'

export default ({ show, openWidget }) => (
  <S.Container show={show}>
    <S.WidgetIcon onClick={openWidget} />
  </S.Container>
)
